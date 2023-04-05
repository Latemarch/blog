import PostCard from "../components/PostCard";
import usePost from "../hooks/usePost";
import { IPost, IProj } from "../apis/Firebase";

interface IPosts {
	data: IPost;
}
export default function Posts() {
	const {
		postQuery: { data: posts, isLoading },
	} = usePost();
	return (
		<div className="pb-20">
			<div className="my-20 ">
				<h1 className="text-4xl mb-4 tracking-tight">
					Writing on software stack, computer science,and project building.
				</h1>
				<span className="text-zinc-400">
					All of my long-form thoughts on programming, project design, and more,
					collected in chronological order.
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
