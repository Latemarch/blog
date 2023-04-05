import ProjectCard from "../components/ProjectCard";
import { v4 as uuid } from "uuid";
import useProject from "../hooks/useProject";

export default function Projects() {
	const {
		projectQuery: { data: projects },
	} = useProject();
	return (
		<section className="pb-20">
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
			<ul className="grid grid-cols-2 bg-gra-200 items-center gap-10 gap-y-10 md:grid-cols-3 ">
				{/* <ul className="flex justify-between sm:justify-start flex-wrap px-4 sm:px-0"> */}
				{projects &&
					projects.map((project) => (
						<ProjectCard key={uuid()} project={project} />
					))}
			</ul>
		</section>
	);
}
