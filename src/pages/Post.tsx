import { useQuery } from "@tanstack/react-query";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPost } from "../apis/Firebase";
import Button from "../components/Button";
import { formatDate } from "../components/PostCard";
import { IAuth } from "../redux/slices/userSlice";

export default function Post() {
	const { user } = useSelector<IAuth>((state) => state.user) as IAuth;
	const { id } = useParams();
	const navigate = useNavigate();
	const { data: post, isLoading } = useQuery(["posts", id], () => getPost(id));
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
								<Link to={`/edit/post/${id}`}>
									<Button name={"Edit"} />
								</Link>
								<Button name={"Delete"} />
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
