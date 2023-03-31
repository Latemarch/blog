import { Link } from "react-router-dom";
import { logIn } from "../apis/Firebase";
import Nav from "./Nav";

const buttons = ["About", "Articles", "Projects", "edit"];

export default function Header() {
	return (
		<header className="flex justify-center h-24 w-full items-center">
			<Nav buttons={buttons} />
			<button
				onClick={logIn}
				className="fixed left-0 top-0 flex w-5 h-5 bg-white"
			/>
		</header>
	);
}
