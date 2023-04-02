import ArticleCard from "../components/ArticleCard";
import ProjectCard from "../components/ProjectCard";
import usePost from "../hooks/usePost";
import { v4 as uuid } from "uuid";
import {
	AiFillFolderOpen,
	AiOutlineInstagram,
	AiOutlineMail,
} from "react-icons/ai";
import { BsGithub, BsTwitter } from "react-icons/bs";

export default function Home() {
	const {
		postQuery: { data: posts, isLoading },
	} = usePost();
	return (
		<div className="pb-20">
			<h1 className="text-4xl mb-4">
				Software designer, founder, and amateur astronaut.
			</h1>
			<span className="text-zinc-400">
				I’m Spencer, a software designer and entrepreneur based in New York
				City. I’m the founder and CEO of Planetaria, where we develop
				technologies that empower regular people to explore space on their own
				terms.
			</span>
			<div className="flex space-x-3 mt-6">
				<BsGithub />
				<BsTwitter />
				<AiOutlineInstagram />
				<AiOutlineMail />
			</div>
			<div className="my-20">
				<div className="mx-2 md:ml-5 mb-4 border-b border-zinc-700/40 flex ">
					Articles
				</div>
				{posts &&
					posts
						.slice(0, 3)
						.map((post) => <ArticleCard key={post.id} post={post} />)}
			</div>
			<div className="border border-zinc-700/40 rounded-2xl p-6 pt-2">
				<div className="flex items-center mb-3">
					<AiFillFolderOpen />
					<p className="text-zinc-300 ml-2">Works</p>
				</div>
				<ul className="grid grid-cols-2 gap-10 gap-y-10 lg:grid-cols-3">
					{[1, 2].map((el) => (
						<ProjectCard key={uuid()} />
					))}
				</ul>
			</div>
		</div>
		// <div className="w-full h-full home text-white text-justify">
		// 	<h1 className="text-3xl">Motivation</h1>
		// 	<span className="text-xl">dljwldj</span>
		// </div>
	);
}
