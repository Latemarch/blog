import { useQuery } from "@tanstack/react-query";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { getPost, IPost, updateItem } from "../apis/Firebase";
import { useNavigate, useParams } from "react-router-dom";
import EditPost from "../pages/EditPost";
import Button from "../components/Button";
import usePost from "../hooks/usePost";

const defaultPost: IPost = {
	category: "posts",
	id: uuid(),
	createdAt: Date.now(),
	author: "",
	title: "",
	body: "",
	tag: [],
};

export default function EditPostContainer() {
	const { id } = useParams();
	const { data: prevPost } = useQuery<IPost>(["posts", id], () => getPost(id), {
		enabled: !!id,
	});
	const { addPost } = usePost();
	console.log(prevPost?.id);
	const initialPost = prevPost?.id ? prevPost : defaultPost;
	const [post, setPost] = useState<IPost>(initialPost);
	const [markdown, setMarkDown] = useState<string>("");
	const navigate = useNavigate();
	useEffect(() => {
		prevPost && setMarkDown(prevPost.body);
	}, []);
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setPost((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		post.body = markdown;
		if (id) {
			updateItem(id, post).then(() => navigate(`/posts/${post.id}`));
		} else {
			addPost.mutate(post, {
				onSuccess: () => {
					navigate(`/posts/${post.id}`);
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
