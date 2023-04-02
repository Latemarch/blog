import React from "react";

export default function Icon({ img }: { img: string }) {
	return (
		<div className="mr-1 p-2 flex h-10 w-10 mb-4 justify-center items-center rounded-full bg-zinc-800 ring-1 ring-zinc-700/5 overflow-hidden shadow-md  ">
			<img className="scale-110" src={img} />
		</div>
	);
}
