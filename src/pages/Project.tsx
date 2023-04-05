import MarkdownEditor from "@uiw/react-markdown-editor";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { formatDate } from "../components/PostCard";
import { IAuth } from "../redux/slices/userSlice";
import useProject from "../hooks/useProject";

export default function Project() {
	const { user } = useSelector<IAuth>((state) => state.user) as IAuth;
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
		<article className="m-0 lg:m-20 pb-20">
			{isLoading && <p>isLoading..</p>}
			{project && (
				<div className="mb-24">
					<h1 className="text-6xl font-bold">{project.title}</h1>
					<div className="flex items-center text-gray-500">
						<p className="m-2">{formatDate(project.createdAt)}</p>
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
			)}
			{project && (
				<MarkdownEditor.Markdown
					style={{ background: "none" }}
					source={project.detail}
				/>
			)}
			<div className="flex justify-end">
				<div className="flex items-center bg-Dtab my-5 rounded-md">
					<Button name="목록으로" onClick={() => navigate("/posts")} />
				</div>
			</div>
		</article>
	);
}
