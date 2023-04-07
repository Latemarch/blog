import PostCard from "../components/PostCard";
import ProjectCard from "../components/ProjectCard";
import usePost from "../hooks/usePost";
import { v4 as uuid } from "uuid";
import {
	AiFillFolderOpen,
	AiOutlineInstagram,
	AiOutlineMail,
} from "react-icons/ai";
import { BsGithub, BsTwitter } from "react-icons/bs";
import useProject from "../hooks/useProject";

export default function Home() {
	const {
		postQuery: { data: posts },
	} = usePost();
	const {
		projectQuery: { data: projects },
	} = useProject();
	return (
		<div className="pb-20">
			<h1 className="text-4xl mb-4">개발 블로그가 되고싶은 개발 공부 블로그</h1>
			<span className="text-zinc-400">
				물리학과를 졸업 후 개발자가 되고자 개발공부를 시작하게 된 '다시학생'.
			</span>
			<div className="flex space-x-3 mt-6">
				<BsGithub />
				<BsTwitter />
				<AiOutlineInstagram />
				<AiOutlineMail />
			</div>
			<div className="my-20">
				<div className="mx-2 mb-4  flex ">Posts</div>
				<ul className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
					{posts &&
						posts
							.slice(0, 3)
							.map((post) => <PostCard key={post.id} post={post} />)}
				</ul>
			</div>

			<div className="border border-zinc-700/40 rounded-2xl p-6 pt-2">
				<div className="flex items-center mb-3">
					<AiFillFolderOpen />
					<p className="text-zinc-300 ml-2">Works</p>
				</div>
				<ul className="grid xs:grid-cols-2 gap-4 lg:grid-cols-3">
					{projects &&
						projects.map((project) => (
							<ProjectCard key={uuid()} project={project} />
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
