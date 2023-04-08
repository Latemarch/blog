import { request, gql } from "graphql-request";

export const fetchPosts = async (username: string) => {
	const query = gql`
		query ($username: String!) {
			user(username: $username) {
				posts {
					id
					title
					content
					createdAt
					updatedAt
					tags {
						name
					}
				}
			}
		}
	`;

	const variables = { username };
	const response: any = await request(
		"https://api.velog.io/graphql",
		query,
		variables
	);
	console.log("fetch", response);
	return response.user.posts;
};
