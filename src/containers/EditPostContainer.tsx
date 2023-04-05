import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getItem, IPost } from "../apis/Firebase";
import { useNavigate, useParams } from "react-router-dom";
import EditPost from "../pages/EditPost";
import Button from "../components/Button";
import usePost from "../hooks/usePost";

const defaultPost: IPost = {
	category: "posts",
	id: "",
	createdAt: 0,
	author: "",
	title: "",
	body: "",
	tag: [],
};

export default function EditPostContainer() {
	const { id } = useParams();
	const {
		addPost,
		updatePost,
		getPost: { data: prevPost, isSuccess },
	} = usePost(id);
	useEffect(() => {
		prevPost && setMarkDown(prevPost.body);
	}, [isSuccess]);
	const initialPost = prevPost?.id ? prevPost : defaultPost;
	const [post, setPost] = useState<IPost>(initialPost);
	const [markdown, setMarkDown] = useState<string>("");
	const navigate = useNavigate();

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setPost((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		post.body = markdown;
		if (id) {
			updatePost.mutate(post, {
				onSuccess: () => {
					navigate(`/posts/${id}`);
				},
			});
		} else {
			addPost.mutate(post, {
				onSuccess: () => {
					navigate("/posts");
				},
			});
		}
	};

	return (
		<>
			<div className="flex">
				<Button name={"Post"} onClick={() => navigate("/edit/post")} />
				<Button name={"Project"} onClick={() => navigate("/edit/project")} />
			</div>
			<EditPost
				post={post}
				markdown={markdown}
				handleSubmit={handleSubmit}
				handleInput={handleInput}
				setMarkDown={setMarkDown}
			/>
		</>
	);
}
