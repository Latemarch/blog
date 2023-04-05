import MarkdownEditor from "@uiw/react-markdown-editor";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { formatDate } from "../components/PostCard";
import { IPost } from "../apis/Firebase";

interface IProp {
	post: IPost;
	isAdmin: boolean;
	onDelete: () => void;
}
export default function Post({ post, isAdmin, onDelete }: IProp) {
	const navigate = useNavigate();
	return (
		<article className="m-0 lg:m-20 pb-20">
			{post && (
				<div className="mb-24">
					<h1 className="text-6xl font-bold">{post.title}</h1>
					<div className="flex items-center text-gray-500">
						<p className="m-2">{formatDate(post.createdAt)}</p>
						{isAdmin && (
							<div className="flex">
								<Button
									name={"Edit"}
									onClick={() => navigate(`/edit/post/${post.id}`)}
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
