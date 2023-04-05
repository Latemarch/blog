import { FiLink } from "react-icons/fi";
import Icon, { iconName } from "./Icon";
import { IProj } from "../apis/Firebase";
import { Link } from "react-router-dom";

interface IProp {
	project: IProj;
}
export default function ProjectCard({ project }: IProp) {
	return (
		<Link to={`${project.id}`}>
			<li>
				<div className="relative group flex h-min-40">
					<div className="absolute inset-0 z-0 bg-zinc-800/50 rounded-2xl opacity-0 md:transition group-hover:scale-110 group-hover:opacity-100"></div>
					<div className="relative z-10 bg-gry-400">
						<div className="flex flex-wrap">
							{project.stacks &&
								project.stacks.map((stack) => (
									<Icon key={stack} name={stack} />
								))}
						</div>
						<p className="font-bold text-lg mt-4">{project.title}</p>
						<span className="text-sm text-zinc-400 ">{project.detail}</span>
						<div className="flex items-center text-sm mt-4">
							<FiLink className="text-xs" />
							<p className="ml-2">github.com</p>
						</div>
					</div>
				</div>
			</li>
		</Link>
	);
}
