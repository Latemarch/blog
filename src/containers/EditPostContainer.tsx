import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditPost from "../pages/EditPost";
import Button from "../components/Button";
import usePost from "../hooks/usePost";
import { IPost } from "../type";
import { DefaultPost } from "../defaultvalues";
import { getStyle } from "../utils/functions";

export default function EditPostContainer() {
	const { id } = useParams();
	const {
		addPost,
		updatePost,
		getPost: { data: prevPost, isSuccess },
	} = usePost(id);
	useEffect(() => {
		prevPost && setMarkDown(prevPost.body);
	}, [prevPost]);
	const initialPost = isSuccess ? prevPost : DefaultPost;
	const [post, setPost] = useState<IPost>(initialPost);
	const [tags, setTags] = useState<string[]>([]);

	const [markdown, setMarkDown] = useState<string>("");
	const navigate = useNavigate();

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setPost((prev) => ({ ...prev, [name]: value }));
	};
	const handleTags = (e: React.MouseEvent<HTMLDivElement>) => {
		const { name } = e.currentTarget.dataset;
		if (name)
			if (tags.includes(name)) {
				setTags((prev) => prev.filter((el) => el !== name));
			} else {
				setTags((prev) => [...prev, name]);
				console.log(tags);
			}
	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		post.body = markdown;
		post.tags = tags;
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
			{!id && (
				<div className="flex">
					<Button name={"Post"} onClick={() => navigate("/edit/post")} />
					<Button name={"Project"} onClick={() => navigate("/edit/project")} />
				</div>
			)}
			<EditPost
				post={post}
				markdown={markdown}
				handleSubmit={handleSubmit}
				handleInput={handleInput}
				setMarkDown={setMarkDown}
				handleTags={handleTags}
				getIconStyle={getStyle(tags, { color: "#37D4BF" })}
			/>
		</>
	);
}
