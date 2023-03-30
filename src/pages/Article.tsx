import React, { useEffect, useState } from "react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { fetchPosts } from "../apis/FetchPosts";

export default function Article() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		console.log("start");
		const fetchData = async () => {
			const result = await fetchPosts("latemarch");
			setPosts(result);
			console.log("async", result);
		};
	}, []);
	const inlineLatex = "\\int_0^\\infty x^2 dx";
	console.log("posts", posts);
	return (
		<>
			<InlineMath>{inlineLatex}</InlineMath>
		</>
	);
}
