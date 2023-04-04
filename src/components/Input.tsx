import React, { CSSProperties } from "react";
interface IProp {
	name: string;
	onClick?: () => any;
	value?: string;
	required?: boolean;
	style?: CSSProperties;
}
export default function Input({ props }: { props: IProp }) {
	const { name, onClick, value, required, style } = props;
	return (
		<input
			className="flex w-full dark:bg-gray-700 focus:outline-none"
			placeholder={name}
			name={name}
			value={value}
			onClick={onClick}
			required={required}
			style={style}
		/>
	);
}
