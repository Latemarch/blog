import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { addItem, getPosts, IPost } from "../apis/Firebase";

export default function usePost() {
	const queryClient = useQueryClient();
	const postQuery = useQuery(["posts"], getPosts, {});

	const addPost = useMutation((item: IPost) => addItem(item), {
		onSuccess: () => {
			queryClient.invalidateQueries(["posts"]);
		},
	});

	return { postQuery, addPost };
}
