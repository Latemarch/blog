interface IProps {
	name: string;
	onClick?: () => void;
}

export default function Button({ name, onClick }: IProps) {
	return (
		<button
			onClick={onClick}
			className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
		>
			{name}
		</button>
	);
}
