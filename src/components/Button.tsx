import { IButton } from "../type";

export default function Button({ name, onClick, style }: IButton) {
	return (
		<button
			id={name}
			onClick={onClick}
			className="relative block px-1 mx-2 py-2 transition hover:text-purple-500 dark:hover:text-purple-400 "
			style={style}
		>
			{name}
		</button>
	);
}
