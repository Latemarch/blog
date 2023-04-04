import { CSSProperties } from "react";

interface IProps {
	img: string;
	style?: CSSProperties | undefined;
}
export default function Icon({ img, style }: IProps) {
	return (
		<div
			className="mr-1 p-2 flex h-10 w-10 justify-center items-center rounded-full bg-zinc-800 ring-1 ring-zinc-700/5 overflow-hidden shadow-md "
			style={style}
		>
			<img className="scale-110" src={img} />
		</div>
	);
}
