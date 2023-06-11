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
		getPost: { data: prevPost },
	} = usePost(id);
	const initialPost = prevPost ? prevPost : DefaultPost;
	const [post, setPost] = useState<IPost>(initialPost);
	const [tags, setTags] = useState<string[]>([]);
	const [markdown, setMarkDown] = useState<string>("");
	const navigate = useNavigate();

	useEffect(() => {
		prevPost && setMarkDown(prevPost.body);
		prevPost && setTags(prevPost.tags);
		prevPost && setPost(prevPost);
	}, [prevPost]);

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setPost((prev) => ({ ...prev, [name]: value }));
	};
	const handleTags = (e: React.MouseEvent<HTMLDivElement>) => {
		const { name } = e.currentTarget.dataset;
		if (!tags) {
			setTags([]);
			return;
		}
		if (name)
			if (tags.includes(name)) {
				setTags((prev) => prev.filter((el) => el !== name));
			} else {
				setTags((prev) => [...prev, name]);
			}
	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("submit");
		// post.body = markdown;
		// post.tags = tags;
		const updatedPost = {
			...post,
			body: markdown,
			tags,
		};
		if (id) {
			updatePost.mutate(updatedPost, {
				onSuccess: () => {
					navigate(`/posts/${id}`);
				},
			});
		} else {
			addPost.mutate(updatedPost, {
				onSuccess: () => {
					navigate("/posts");
				},
			});
		}
	};

	return (
		<>
			{!id && (
				<div className="flex text-h1 dark:text-Dh1">
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
