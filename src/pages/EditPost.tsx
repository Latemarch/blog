import MarkdownEditor from "@uiw/react-markdown-editor";
import { IEditPost } from "../type";
import Tag from "../components/Tag";

export default function EditPost({
	post,
	markdown,
	handleSubmit,
	handleInput,
	setMarkDown,
}: IEditPost) {
	return (
		<div className="flex h-full flex-col">
			<form className="flex h-full flex-col" onSubmit={handleSubmit}>
				<input
					className="focus:outline-none text-2xl dark:bg-Dbg2 my-2 p-1 border-b border-zinc-700/50 "
					value={post.title}
					onChange={handleInput}
					name={"title"}
					placeholder="Title..."
					required
				/>

				<MarkdownEditor
					className="h-5/6"
					onChange={setMarkDown}
					value={markdown}
				/>
				<div className="flex justify-end">
					<button className="border mt-4 p-2 rounded-lg bg-Dtab">Submit</button>
				</div>
			</form>
		</div>
	);
}
