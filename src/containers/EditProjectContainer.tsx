import { useEffect, useState } from "react";
import { IProj } from "../apis/Firebase";
import useProject from "../hooks/useProject";
import { useNavigate, useParams } from "react-router-dom";
import EditProject from "../pages/EditProject";
import { iconName } from "../components/Icon";
const defaultProject: IProj = {
	category: "projects",
	id: "",
	createdAt: Date.now(),
	title: "",
	git: "",
	published: "",
	stacks: [],
	detail: "",
};
export default function EditProjectContainer() {
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		addProject,
		updateProject,
		getProject: { data: prevProj, isSuccess },
	} = useProject(id);
	const initialProj = isSuccess ? prevProj : defaultProject;
	const [project, setProject] = useState<IProj>(initialProj);
	const [stacks, setStacks] = useState<string[]>([]);
	useEffect(() => {
		setStacks(defaultProject.stacks);
	}, [isSuccess]);
	const handleStacks = (e: React.MouseEvent<HTMLDivElement>) => {
		const { name } = e.currentTarget.dataset;
		if (name)
			if (stacks.includes(name)) {
				setStacks((prev) => prev.filter((el) => el !== name));
			} else {
				setStacks((prev) => [...prev, name]);
			}
	};
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setProject((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		project.stacks = stacks as iconName[];
		if (id) {
			updateProject.mutate(project, {
				onSuccess: () => {
					navigate(`/projects/${id}`);
				},
			});
		} else {
			addProject.mutate(project, {
				onSuccess: () => {
					navigate("/projects");
				},
			});
		}
	};
	const getIconStyle = (stack: string): React.CSSProperties => {
		return { filter: stacks.includes(stack) ? "brightness(1.5)" : undefined };
	};
	return (
		<EditProject
			project={project}
			handleStacks={handleStacks}
			handleInput={handleInput}
			handleSubmit={handleSubmit}
			getIconStyle={getIconStyle}
		/>
	);
}
