import MarkdownEditor from "@uiw/react-markdown-editor";
import { IEditPost } from "../type";
import Tag from "../components/Tag";
import { DefaultTags } from "../defaultvalues";
import { useEffect, useState } from "react";

const inputStyle =
	"focus:outline-none text-2xl dark:bg-Dbg2 my-2 p-1 border-b border-zinc-700/50 text-h1 dark:text-Dh1";
export default function EditPost({
	post,
	markdown,
	handleSubmit,
	handleInput,
	setMarkDown,
	getIconStyle,
	handleTags,
}: IEditPost) {
	const [isEdit, setIsEdit] = useState<boolean>(false);
	useEffect(() => {
		post.id && setIsEdit(true);
	}, []);
	return (
		<div className="flex h-full flex-col  text-span dark:text-Dspan">
			<form className="flex h-full flex-col" onSubmit={handleSubmit}>
				<input
					className={inputStyle}
					value={post.title}
					onChange={handleInput}
					name={"title"}
					placeholder="Title..."
					required
				/>
				{isEdit || (
					<input
						className={`${inputStyle} w-1/2 h-12`}
						name="id"
						placeholder={`/${post.title
							.toLowerCase()
							.trim()
							.replace(/\s+/g, "-")
							.replace(/[^a-zA-Z0-9-]+/g, "")}`}
						value={isEdit || post.id}
						onChange={handleInput}
					/>
				)}
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
					<button className="border mb-20 mt-4 p-2 rounded-lg bg-zinc-200 dark:bg-Dtab">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
