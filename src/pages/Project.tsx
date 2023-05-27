import MarkdownEditor from "@uiw/react-markdown-editor";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { formatDate } from "../components/PostCard";
import useProject from "../hooks/useProject";
import { IStore } from "../type";
import { BsGithub } from "react-icons/bs";
import { FiLink } from "react-icons/fi";

export default function Project() {
	const { user } = useSelector((state: IStore) => state.user);
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		removeProject,
		getProject: { data: project, isLoading },
	} = useProject(id);
	const onDelete = () => {
		const isConfirmed = window.confirm("Are you sure you want to proceed?");
		if (isConfirmed) {
			project && removeProject.mutate(project);
			navigate("/projects");
		} else {
			console.log("User clicked Cancel.");
		}
	};
	return (
		<article className="m-0 lg:m-20 pb-20 text-zinc-600 dark:text-zinc-400">
			{isLoading && <p>isLoading..</p>}
			{project && (
				<>
					<div className="mb-2">
						<h1 className="text-6xl font-bold text-h1 dark:text-Dh1">
							{project.title}
						</h1>
						<div className="flex items-center">
							<p className="my-2 mr-4">{formatDate(project.createdAt)}</p>
							{user?.isAdmin && (
								<div className="flex">
									<Button
										name={"Edit"}
										onClick={() => navigate(`/edit/project/${id}`)}
									/>
									<Button name={"Delete"} onClick={onDelete} />
								</div>
							)}
						</div>
					</div>
					<div className="mb-2">{project.detail}</div>
					<div className="flex mb-10 gap-2 text-xl">
						{project.git && (
							<a href={project.git} target="_blank" rel="noreferrer">
								<BsGithub />
							</a>
						)}
						{project.published && (
							<a href={project.published} target="_blank" rel="noreferrer">
								<FiLink />
							</a>
						)}
					</div>

					<MarkdownEditor.Markdown
						style={{ background: "none" }}
						source={project.body}
					/>
					<div className="flex justify-end">
						<div className="flex items-center bg-zinc-200 dark:bg-Dtab my-5 rounded-md dark:text-zinc-100">
							<Button name="목록으로" onClick={() => navigate("/projects")} />
						</div>
					</div>
				</>
			)}
		</article>
	);
}
