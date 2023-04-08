import { useState } from "react";
import usePost from "../hooks/usePost";
import { getStyle } from "../utils/functions";
import { IPost } from "../type";
import Posts from "../pages/Posts";

export default function PostsContainer() {
	const [tags, setTags] = useState<string[]>([]);
	const {
		postQuery: { data: posts },
	} = usePost() as {
		postQuery: { data: IPost[] };
	};

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const { name: tag } = e.currentTarget.dataset;
		if (tag) {
			setTags((prev) =>
				prev.includes(tag) //
					? prev.filter((el) => el !== tag)
					: [...prev, tag]
			);
		}
	};

	const filteredPosts = !tags.length
		? posts
		: posts &&
		  posts.filter(
				(post: IPost) =>
					!!post.tags?.length &&
					!!tags.filter((tag) => post.tags?.includes(tag)).length
		  );

	return (
		<>
			{!posts ? (
				<p>Loading..</p>
			) : (
				<Posts
					posts={filteredPosts} //
					handleClick={handleClick}
					getIconStyle={getStyle(tags, { color: "#37D4BF" })}
				/>
			)}
		</>
	);
}
