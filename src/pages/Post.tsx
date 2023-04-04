import { useQuery } from "@tanstack/react-query";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPost } from "../apis/Firebase";
import Button from "../components/Button";
import { formatDate } from "../components/PostCard";
import usePost from "../hooks/usePost";
import { IAuth } from "../redux/slices/userSlice";

export default function Post() {
	const { user } = useSelector<IAuth>((state) => state.user) as IAuth;
	const { id } = useParams();
	const navigate = useNavigate();
	const { data: post, isLoading } = useQuery(["posts", id], () => getPost(id));
	const { removePost } = usePost();
	const onDelete = () => {
		const isConfirmed = window.confirm("Are you sure you want to proceed?");
		if (isConfirmed) {
			// 실행할 작업을 여기에 작성합니다.
			post && removePost.mutate(post);
			navigate("/posts");
		} else {
			console.log("User clicked Cancel.");
		}
	};
	return (
		<article className="m-0 lg:m-20 pb-20">
			{isLoading && <p>isLoading..</p>}
			{post && (
				<div className="mb-24">
					<h1 className="text-6xl font-bold">{post.title}</h1>
					<div className="flex items-center text-gray-500">
						<p className="m-2">{formatDate(post.createdAt)}</p>
						{user?.isAdmin && (
							<div className="flex">
								<Button
									name={"Edit"}
									onClick={() => navigate(`/edit/post/${id}`)}
								/>
								<Button name={"Delete"} onClick={onDelete} />
							</div>
						)}
					</div>
				</div>
			)}
			{post && (
				<MarkdownEditor.Markdown
					style={{ background: "none" }}
					source={post.body}
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
