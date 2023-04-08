import MarkdownEditor from "@uiw/react-markdown-editor";
import { IEditPost } from "../type";
import Tag from "../components/Tag";
import { DefaultTags } from "../defaultvalues";

export default function EditPost({
	post,
	markdown,
	handleSubmit,
	handleInput,
	setMarkDown,
	getIconStyle,
	handleTags,
}: IEditPost) {
	return (
		<div className="flex h-full flex-col pb-20 text-span dark:text-Dspan">
			<form className="flex h-full flex-col" onSubmit={handleSubmit}>
				<input
					className="focus:outline-none text-2xl dark:bg-Dbg2 my-2 p-1 border-b border-zinc-700/50 text-h1 dark:text-Dh1"
					value={post.title}
					onChange={handleInput}
					name={"title"}
					placeholder="Title..."
					required
				/>
				<ul className="flex m-1 mb-4 space-x-4">
					{DefaultTags.map((tag) => (
						<Tag
							key={tag}
							name={tag}
							onClick={handleTags}
							style={getIconStyle(tag)}
						/>
					))}
				</ul>
				<MarkdownEditor
					className="h-5/6"
					onChange={setMarkDown}
					value={markdown}
				/>
				<div className="flex justify-end">
					<button className="border mt-4 p-2 rounded-lg bg-zinc-200 dark:bg-Dtab">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
