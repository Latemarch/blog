import MarkdownEditor from "@uiw/react-markdown-editor";
import React, { SetStateAction, useState } from "react";
import { IArticle } from "../apis/Firebase";
import { v4 as uuid } from "uuid";
import { Dispatch } from "@reduxjs/toolkit";

interface IProp {
	article: IArticle;
	handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
	handleInput(e: React.ChangeEvent<HTMLInputElement>): void;
	setMarkDown(e: any): void;
}
export default function Edit({
	article,
	handleSubmit,
	handleInput,
	setMarkDown,
}: IProp) {
	return (
		<div className="flex h-full flex-col">
			<form className="flex h-full flex-col" onSubmit={handleSubmit}>
				<input
					value={article.title}
					onChange={handleInput}
					name={"title"}
					className="focus:outline-none text-2xl bg-Dinput"
					placeholder="Title..."
					required
				/>

				<MarkdownEditor className="h-5/6" onChange={setMarkDown} />
				<div className="flex justify-end">
					<button className="border mt-4 p-2 rounded-lg bg-Dtab">submit</button>
				</div>
			</form>
		</div>
	);
}
