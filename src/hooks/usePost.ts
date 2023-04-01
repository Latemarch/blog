import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts } from "../apis/Firebase";

export default function usePost() {
	const queryClient = useQueryClient();
	const postQuery = useQuery(["posts"], getPosts, {});

	return { postQuery };
}
