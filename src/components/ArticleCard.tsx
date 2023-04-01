import React from "react";
import { Link } from "react-router-dom";
import { IArticle } from "../apis/Firebase";

interface IProp {
	post: IArticle;
}
export default function ArticleCard({ post }: IProp) {
	return (
		<Link to={`${post.id}`}>
			<article className="grid-col-3 bg-red-900 m-4">
				<p>{post.createdAt}</p>
				<h1>{post.title}</h1>
				<span className="line-clamp-3">{post.body}</span>
			</article>
		</Link>
	);
}
