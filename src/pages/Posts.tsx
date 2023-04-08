import PostCard from "../components/PostCard";
import Tag from "../components/Tag";
import { DefaultTags } from "../defaultvalues";
import { IPosts } from "../type";

export default function Posts({ posts, handleClick, getIconStyle }: IPosts) {
	return (
		<div className="pb-20">
			<div className="mt-10 mb-4">
				<h1 className="text-4xl mb-4 tracking-tight">Front-end 관련 포스팅</h1>
				<span className="flex text-zinc-400 max-w-[600px] text-justify">
					자바스크립트의 개념정리를 담은 글들은 ES, 리액트를 사용하면서 사용했던
					stack이나 library의 사용법등을 다룬 글들은 React로, 그외 내용을 담은
					글들은 ETC로 분류함.
				</span>
			</div>
			<ul className="flex space-x-2 mb-10">
				{DefaultTags.map((tag) => (
					<Tag
						key={tag}
						name={tag}
						onClick={handleClick}
						style={getIconStyle(tag)}
					/>
				))}
			</ul>
			<div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
				{!posts && <p>Loading...</p>}
				{posts &&
					posts
						.sort((a, b) => b.createdAt - a.createdAt)
						.map((post) => <PostCard key={post.id} post={post} />)}
			</div>
		</div>
	);
}
