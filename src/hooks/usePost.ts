import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
	addItem,
	getItem,
	getItems,
	removeItem,
	updateItem,
} from "../utils/Firebase";
import { IPost } from "../type";

export default function usePost(id?: string) {
	const queryClient = useQueryClient();
	const postQuery = useQuery(["posts"], () => getItems("posts"), {
		staleTime: 1000 * 60 * 5,
	});
	const getPost = useQuery(["posts", id], () => getItem(id, "posts"), {
		staleTime: 1000 * 60 * 5,
	});

	const addPost = useMutation((post: IPost) => addItem(post), {
		onSuccess: (_, post) => {
			queryClient.invalidateQueries(["posts"]);
			queryClient.invalidateQueries(["posts", post.id]);
		},
	});
	const updatePost = useMutation((post: IPost) => updateItem(post), {
		onSuccess: (_, post) => {
			queryClient.invalidateQueries(["posts"]);
			queryClient.invalidateQueries(["posts", post.id]);
		},
	});
	const removePost = useMutation((item: IPost) => removeItem(item), {
		onSuccess: () => {
			queryClient.invalidateQueries(["posts"]);
		},
	});

	return { postQuery, getPost, addPost, removePost, updatePost };
}
