import Edit from "../pages/Edit";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { addPost, IArticle } from "../apis/Firebase";

interface IProp {
	id?: string;
}
const defaultArticle = {
	id: uuid(),
	createdAt: new Date(),
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
