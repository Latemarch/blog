import Query from "../svgs/query.svg";
import Redux from "../svgs/redux.svg";
import FB from "../svgs/firebase.svg";
import TS from "../svgs/ts.svg";
import React from "../svgs/react.svg";
import { CSSProperties } from "react";
import { IIcon, iconName } from "../type";

// export type iconName = "Query" | "Redux" | "FB" | "TS" | "React";
// interface IProps {
// 	name: iconName;
// 	onClick?: (e: any) => void;
// 	style?: CSSProperties | undefined;
// }
export const iconObj: Record<iconName, string> = {
	React,
	TS,
	Query,
	Redux,
	FB,
};
export default function Icon({ name, onClick, style }: IIcon) {
	return (
		<div
			data-name={name}
			className="mr-1 p-2 flex h-10 w-10 justify-center items-center rounded-full bg-zinc-800 ring-1 ring-zinc-700/5 overflow-hidden shadow-md"
			onClick={onClick}
			style={style}
		>
			<img className="scale-110" src={iconObj[name]} />
		</div>
	);
}
