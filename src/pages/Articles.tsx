import React, { useEffect } from "react";
import { getPosts, IArticle } from "../apis/Firebase";
import ArticleCard from "../components/ArticleCard";
import usePost from "../hooks/usePost";

export default function Articles() {
	const {
		postQuery: { data: posts, isLoading },
	} = usePost();
	posts && console.log("Articles", posts);
	return (
		<>
			{isLoading && <p>Loading...</p>}
			{posts && posts.map((post) => <ArticleCard key={post.id} post={post} />)}
		</>
	);
}
