import React from "react";
import ProjectCard from "../components/ProjectCard";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function Projects() {
	return (
		<section>
			<div className="my-10 mb-16">
				<h1 className="text-5xl mb-5">
					Things I’ve made trying to put my dent in the universe.
				</h1>
				<p>
					I’ve worked on tons of little projects over the years but these are
					the ones that I’m most proud of. Many of them are open-source, so if
					you see something that piques your interest, check out the code and
					contribute if you have ideas for how it can be improved.
				</p>
			</div>
			<ul className="grid grid-cols-2 gap-5 md:grid-cols-3">
				{arr.map((el) => (
					<ProjectCard />
				))}
			</ul>
		</section>
	);
}
