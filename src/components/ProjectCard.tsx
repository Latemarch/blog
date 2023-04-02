import React from "react";
import logoReact from "../svgs/react.svg";
import logoTs from "../svgs/ts.svg";
import logoQuery from "../svgs/query.svg";
import logoRedux from "../svgs/redux.svg";
import { FiLink } from "react-icons/fi";
import Icon from "./Icon";

export default function ProjectCard() {
	return (
		<li>
			<div className="relative group flex h-min-40">
				<div className="absolute inset-0 z-0 bg-zinc-800/50 rounded-2xl opacity-0 md:transition group-hover:scale-110 group-hover:opacity-100"></div>
				<div className="relative z-10 bg-gry-400">
					<div className="grid grid-cols-4">
						{/* <Icon img={logoReact} />
						<Icon img={logoTs} /> */}
						<Icon img={logoQuery} />
						<Icon img={logoRedux} />
					</div>
					<p className="font-bold text-lg">Planetaria</p>
					<span className="text-sm text-zinc-400 ">
						Creating technology to empower ciilians to explore space on their
						own terms.
					</span>
					<div className="flex items-center text-sm mt-4">
						<FiLink className="text-xs" />
						<p className="ml-2">github.com</p>
					</div>
				</div>
			</div>
		</li>
	);
}
