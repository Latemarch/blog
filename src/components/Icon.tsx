import Query from "../svgs/query.svg";
import Redux from "../svgs/redux.svg";
import FB from "../svgs/firebase.svg";
import TS from "../svgs/ts.svg";
import React from "../svgs/react.svg";
import Next from "../svgs/nextjs.svg";
import { IIcon, iconName } from "../type";

export const iconObj: Record<iconName, string> = {
	React,
	Next,
	TS,
	Query,
	Redux,
	FB,
};
export default function Icon({ name, onClick, style }: IIcon) {
	return (
		<>
			{name === "Next" ? (
				<img
					className="mr-1 p-[2px] flex h-10 w-10 justify-center items-center rounded-full bg-zinc-100 dark:bg-zinc-400 ring-1 ring-zinc-700/5 overflow-hidden shadow-md full-gray"
					src={iconObj[name]}
					alt={iconObj[name]}
				/>
			) : (
				<div
					data-name={name}
					className="mr-1 p-2 flex h-10 w-10 justify-center items-center rounded-full bg-zinc-100 dark:bg-zinc-800 ring-1 ring-zinc-700/5 overflow-hidden shadow-md"
					onClick={onClick}
					style={style}
				>
					<img className="scale-110" src={iconObj[name]} alt={iconObj[name]} />
				</div>
			)}
		</>
	);
}
