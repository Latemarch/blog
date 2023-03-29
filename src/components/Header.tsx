import Button from "./Button";

const buttons = ["About", "Articles", "Projects", "Seakings"];

export default function Header() {
	return (
		<header className="flex justify-center h-24 w-full items-center">
			<ul className="flex px-8 py-2 drop-shadow-md rounded-full bg-Dtab">
				{buttons.map((name, idx) => (
					<Button key={idx} name={name} />
				))}
			</ul>
		</header>
	);
}
