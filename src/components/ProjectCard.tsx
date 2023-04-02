import React from "react";
import { FiLink } from "react-icons/fi";

export default function ProjectCard() {
	return (
		<li>
			<div className="relative group flex h-min-40">
				<div className="absolute inset-0 z-0 bg-zinc-800/50 rounded-2xl opacity-0 md:transition group-hover:scale-110 group-hover:opacity-100"></div>
				<div className="relative z-10 bg-gry-400">
					<div className="flex h-10 w-10 mb-4 justify-center items-center rounded-full bg-zinc-800 ring-1 ring-zinc-700/5 overflow-hidden shadow-md  ">
						<img
							className="object-fill"
							src="https://res.cloudinary.com/dozlbr1hz/image/upload/v1677842624/cld-sample-5.jpg"
						/>
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
