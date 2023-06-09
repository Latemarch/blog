import ProjectCard from "../components/ProjectCard";
import { v4 as uuid } from "uuid";
import useProject from "../hooks/useProject";

export default function Projects() {
	const {
		projectQuery: { data: projects },
	} = useProject();
	return (
		<section className="pb-20">
			<div className="mb-16">
				<h1 className="text-4xl mb-4 tracking-tight text-h1 dark:text-Dh1">
					클론 코딩과 프로젝트
				</h1>
				<p className="text-span dark:text-Dspan max-w-[600px]">
					공부하는 동안 만들어 봤던 토이프로젝트, 클론코딩, 그리고 개인 및 그룹
					프로젝트 중 일부를 소개합니다. 모든 프로젝트들은 기본적으로 리액트와
					타입스크립트로 작성되었습니다. 자세한 사항은 프로젝트를 확인하세요.
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
