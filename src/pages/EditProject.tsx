import React from "react";
import { IProj } from "../apis/Firebase";
import { v4 as uuid } from "uuid";
import Input from "../components/Input";
const defaultProject: IProj = {
	category: "projects",
	id: uuid(),
	createdAt: Date.now(),
	title: "",
	stacks: [],
	detail: "",
	links: [],
};
export default function EditProject() {
	return (
		<section className="pb-20">
			<form className="flex w-full flex-col space-y-2 focus:outline-none">
				<Input props={{ name: "title" }} />
				<div className="flex space-x-2">
					<Input props={{ name: "stacks" }} />
					<Input props={{ name: "links" }} />
				</div>
				<Input props={{ name: "detail", style: { height: "100px" } }} />
				<div className="flex justify-end">
					<button className="border mt-4 p-2 rounded-lg bg-Dtab">submit</button>
				</div>
			</form>
		</section>
	);
}
