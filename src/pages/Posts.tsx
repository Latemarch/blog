import PostCard from "../components/PostCard";
import usePost from "../hooks/usePost";

export default function Posts() {
	const {
		postQuery: { data: posts, isLoading },
	} = usePost();
	return (
		<div className="pb-20">
			<div className="my-10 ">
				<h1 className="text-4xl mb-4 tracking-tight">Front-end 관련 포스팅</h1>
				<span className="text-zinc-400">
					자바스크립트 개념정리, 리액트와 그 외 라이브러리들의 관해서
				</span>
			</div>
			<div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
				{isLoading && <p>Loading...</p>}
				{posts &&
					posts
						.sort((a, b) => b.createdAt - a.createdAt)
						.map((post) => <PostCard key={post.id} post={post} />)}
			</div>
		</div>
	);
}
