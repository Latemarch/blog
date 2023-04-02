import React from "react";
import ProjectCard from "../components/ProjectCard";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function Projects() {
	return (
		<section>
			<div className="my-10 mb-16">
				<h1 className="text-4xl mb-5 tracking-tight">
					Here are some projects I've created while pursuing my journey as a
					front-end developer.
				</h1>
				<p className="text-zinc-400 text-justify">
					I've worked on numerous projects over the years, but these are the
					ones I'm most proud of. If you find something that catches your eye,
					feel free to explore the code and don't hesitate to contact me if you
					have any questions or would like to discuss how it can be implemented.
				</p>
			</div>
			<ul className="grid grid-cols-2 gap-10 gap-y-10 md:grid-cols-3">
				{arr.map((el) => (
					<ProjectCard />
				))}
			</ul>
		</section>
	);
}
