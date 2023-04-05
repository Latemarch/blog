import MarkdownEditor from "@uiw/react-markdown-editor";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { formatDate } from "../components/PostCard";
import { IPost } from "../apis/Firebase";
import Modal from "../components/Modal";
import { useState } from "react";

interface IProp {
	post: IPost;
	isAdmin: boolean;
	onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Post({ post, isAdmin, onDelete }: IProp) {
	const navigate = useNavigate();
	const [isModal, setIsModal] = useState(false);
	const hanldeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
		onDelete(e);
		setIsModal(!isModal);
	};
	return (
		<article className="m-0 lg:m-20 pb-20">
			{isModal && <Modal msg="Delete Post" onClick={hanldeModal} />}
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
								{/* <Button name={"Delete"} onClick={onDelete} /> */}
								<Button
									name={"Delete"}
									onClick={() => setIsModal((prev) => !prev)}
								/>
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