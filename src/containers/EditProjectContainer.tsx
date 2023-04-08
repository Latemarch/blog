import { useEffect, useState } from "react";
import useProject from "../hooks/useProject";
import { useNavigate, useParams } from "react-router-dom";
import EditProject from "../pages/EditProject";
import { IProj, iconName } from "../type";
import { DefaultProject } from "../defaultvalues";
import { getStyle } from "../utils/functions";

export default function EditProjectContainer() {
	const navigate = useNavigate();
	const { id } = useParams();
	const {
		addProject,
		updateProject,
		getProject: { data: prevProj, isSuccess },
	} = useProject(id);
	const initialProj = prevProj ? prevProj : DefaultProject;
	const [project, setProject] = useState<IProj>(initialProj);
	const [stacks, setStacks] = useState<string[]>([]);
	useEffect(() => {
		prevProj && setStacks(project.stacks);
	}, [prevProj]);
	const handleStacks = (e: React.MouseEvent<HTMLDivElement>) => {
		const { name } = e.currentTarget.dataset;
		if (name)
			if (stacks.includes(name)) {
				setStacks((prev) => prev.filter((el) => el !== name));
			} else {
				setStacks((prev) => [...prev, name]);
			}
	};
	const handleInput = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
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

	return (
		<EditProject
			project={project}
			handleStacks={handleStacks}
			handleInput={handleInput}
			handleSubmit={handleSubmit}
			getIconStyle={getStyle(stacks, { filter: "brightness(1.5)" })}
		/>
	);
}
