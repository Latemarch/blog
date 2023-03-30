import { Link } from "react-router-dom";
import Button from "./Button";

const buttons = ["About", "Articles", "Projects", "Seakings"];

export default function Header() {
	return (
		<header className="flex justify-center h-24 w-full items-center">
			<ul className="flex px-8  drop-shadow-md rounded-full bg-Dtab ring-1 ring-zinc-100 dark:ring-zinc-300/20">
				<Link to="/">
					<Button key={"about"} name={"about"} />
				</Link>
				<Link to="articles">
					<Button key={"Articles"} name={"Articles"} />
				</Link>
				<Link to="projects">
					<Button key={"Projects"} name={"Projects"} />
				</Link>
				<Link to="/">
					<Button key={"Scraps"} name={"Scraps"} />
				</Link>
			</ul>
		</header>
	);
}
