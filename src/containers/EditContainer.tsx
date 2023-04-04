import Edit from "../pages/Edit";
import { useQuery } from "@tanstack/react-query";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { addPost, getPost, IPost, updatePost } from "../apis/Firebase";
import { useParams } from "react-router-dom";

const defaultPost: IPost = {
	id: uuid(),
	createdAt: Date.now(),
	author: "",
	title: "",
	body: "",
	tag: [],
};
export default function EditContainer() {
	const { id } = useParams();
	const { data: editPost, isLoading } = useQuery<IPost>(["posts", id], () =>
		getPost(id)
	);
	const initialPost = editPost ? editPost : defaultPost;
	const [post, setPost] = useState<IPost>(initialPost);
	const [markdown, setMarkDown] = useState<string>("");
	useEffect(() => {
		editPost && setMarkDown(editPost.body);
	}, []);
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setPost((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		post.body = markdown;
		id ? updatePost(id, post) : addPost(post);
	};

	return (
		<Edit
			post={post}
			markdown={markdown}
			handleSubmit={handleSubmit}
			handleInput={handleInput}
			setMarkDown={setMarkDown}
		/>
	);
}
