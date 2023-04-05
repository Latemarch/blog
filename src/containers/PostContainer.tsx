import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import usePost from "../hooks/usePost";
import { IAuth } from "../redux/slices/userSlice";
import Post from "../pages/Post";

export default function PostContainer() {
	const { user } = useSelector<IAuth>((state) => state.user) as IAuth;
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		removePost,
		getPost: { data: post, isLoading },
	} = usePost(id);
	const onDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		const isConfirmed = e.currentTarget.id;
		if (isConfirmed === "Delete") {
			post && removePost.mutate(post);
			navigate("/posts");
		} else {
			console.log("Canceled.");
		}
	};
	return (
		<>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<Post
					post={post} //
					isAdmin={user?.isAdmin}
					onDelete={onDelete}
				/>
			)}
		</>
	);
}
