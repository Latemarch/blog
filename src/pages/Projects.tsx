import ProjectCard from "../components/ProjectCard";
import { v4 as uuid } from "uuid";
import useProject from "../hooks/useProject";

export default function Projects() {
	const {
		projectQuery: { data: projects },
	} = useProject();
	return (
		<section className="pb-20">
			<div className="mb-10 mb-16">
				<h1 className="text-4xl mb-4 tracking-tight text-h1 dark:text-Dh1">
					클론 코딩과 프로젝트
				</h1>
				<p className="text-span dark:text-Dspan text-justify">
					완성해본 클론코딩과 프로젝트 중 일부. 지적사항이나 의문사항은 언제든지
					환영합니다.
				</p>
			</div>
			<ul className="grid xs:grid-cols-2 bg-gra-200 items-center gap-10 gap-y-10 md:grid-cols-3 ">
				{/* <ul className="flex justify-between sm:justify-start flex-wrap px-4 sm:px-0"> */}
				{projects &&
					projects
						.sort((a, b) => b.createdAt - a.createdAt)
						.map((project) => <ProjectCard key={uuid()} project={project} />)}
			</ul>
		</section>
	);
}
