export default function Button({ button }: { button: string }) {
	return (
		<button className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">
			{button}
		</button>
	);
}
