import React, { ReactNode } from "react";
import Button from "./Button";
interface IProp {
	msg: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Modal({ msg, onClick }: IProp) {
	return (
		<>
			<div className="fixed flex bg-gray-800 inset-0 items-center justify-center z-30 opacity-90 x-auto"></div>
			<div className="fixed flex inset-0 items-center justify-center z-40 x-auto">
				<div className="relative flex justify-end items-end w-96 h-40 bg-gray-700 rounded-2xl">
					<div className="absolute flex justify-center items-center inset-0 text-xl ">
						{msg}
					</div>
					<Button name={"Delete"} onClick={onClick} />
					<Button name={"Cancle"} onClick={onClick} />
				</div>
			</div>
		</>
	);
}
