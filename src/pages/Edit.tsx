import MarkdownEditor from "@uiw/react-markdown-editor";
import React, { useState } from "react";
import { IArticle } from "../apis/Firebase";

interface IProp {
	id?: string;
}
const defaultArticle = {
	createdAt: new Date(),
	writer: "",
	title: "",
	contents: "",
};
export default function Edit({ id }: IProp) {
	const article = defaultArticle;
	const [value, setValue] = React.useState<IArticle>(article);
	const [markdown, setMarkdown] = useState("");
	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValue((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		value.contents = markdown;
	};
	return (
		<div className="flex h-full flex-col">
			<form className="flex h-full flex-col" onSubmit={handleSubmit}>
				<input
					value={value.title}
					onChange={inputHandler}
					name={"title"}
					className="focus:outline-none text-2xl bg-Dinput"
					placeholder="Title..."
					required
				/>

				<MarkdownEditor className="h-5/6" onChange={setMarkdown} />
				<div className="flex justify-end">
					<button className="border mt-4 p-2 rounded-lg bg-Dtab">submit</button>
				</div>
			</form>
		</div>
	);
}
