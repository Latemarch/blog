import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
	addItem,
	getItem,
	getItems,
	IProj,
	removeItem,
	updateItem,
} from "../apis/Firebase";

export default function useProject(id?: string) {
	const queryClient = useQueryClient();

	const projectQuery = useQuery(["projects"], () => getItems("projects"), {
		staleTime: 1000 * 6 * 5,
	});

	const getProject = useQuery(["projects", id], () => getItem(id, "projects"), {
		staleTime: 1000 * 60 * 5,
	});

	const addProject = useMutation((item: IProj) => addItem(item), {
		onSuccess: () => {
			queryClient.invalidateQueries(["projects"]);
		},
	});

	const updateProject = useMutation((proj: IProj) => updateItem(proj), {
		onSuccess: (_, proj) => {
			queryClient.invalidateQueries(["projects"]);
			queryClient.invalidateQueries(["projects", proj.id]);
		},
	});

	const removeProject = useMutation((item: IProj) => removeItem(item), {
		onSuccess: () => {
			queryClient.invalidateQueries(["projects"]);
		},
	});

	return { projectQuery, getProject, addProject, updateProject, removeProject };
}
