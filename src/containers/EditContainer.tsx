import Edit from "../pages/Edit";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { addPost, IArticle } from "../apis/Firebase";

interface IProp {
	id?: string;
}
const defaultArticle = {
	id: uuid(),
	createdAt: formatDate(new Date()),
	author: "",
	title: "",
	body: "",
	tag: [],
};
export default function EditContainer({ id }: IProp) {
	const initialArticle = defaultArticle;
	const [article, setArticle] = useState<IArticle>(initialArticle);
	const [markdown, setMarkDown] = useState("");
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setArticle((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		article.body = markdown;
		console.log(article);
		addPost(article);
	};

	return (
		<Edit
			article={article}
			handleSubmit={handleSubmit}
			handleInput={handleInput}
			setMarkDown={setMarkDown}
		/>
	);
}

export function formatDate(date: Date) {
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();

	return `${monthNames[monthIndex]} ${day}, ${year}`;
}
