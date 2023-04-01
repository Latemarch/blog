import { useQuery } from "@tanstack/react-query";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { useParams } from "react-router-dom";
import { getPost } from "../apis/Firebase";

export default function Article() {
	const { id } = useParams();
	const { data: post, isLoading } = useQuery(["posts", id], () => getPost(id));
	return (
		<article className="m-0 lg:m-20 ">
			{isLoading && <p>isLoading..</p>}
			{post && (
				<div className="mb-24">
					<h1 className="text-6xl font-bold">{post.title}</h1>
					<p className="m-2 text-gray-500">{post.createdAt}</p>
				</div>
			)}
			{post && (
				<MarkdownEditor.Markdown
					style={{ background: "none" }}
					source={post.body}
				/>
			)}
		</article>
	);
}
