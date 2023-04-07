import React from "react";
import { ITag } from "../type";

const style = { color: "teal" };
export default function Tag({ name, style }: ITag) {
	return (
		<div
			className="flex font-bold items-center justify-center p-1 px-3 dark:bg-Dtab w-16 rounded-2xl text-xl ring-1 ring-znic-800/20"
			style={style}
		>
			<p className="px-4">{name}</p>
		</div>
	);
}
