import { useSelector } from "react-redux";
import { logIn, logOut } from "../apis/Firebase";
import { IAuth } from "../redux/slices/userSlice";
import Icon from "./Icon";
import logoReact from "../svgs/react.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";

const list = ["About", "Posts", "Projects"];

export default function Header() {
	const { user } = useSelector<IAuth>((state) => state.user) as IAuth;
	const [buttons, setButtons] = useState<string[]>(list);

	return (
		<header className="relative flex justify-center h-20 w-full items-center mx-8 max-w-2xl sm:mx-16 lg:mx-24 lg:max-w-5xl ">
			<Nav buttons={buttons} />
			<div className="absolute flex left-0 h-16 items-center justify-center ">
				<Link to="/">
					<Icon img={logoReact} />
				</Link>
			</div>
			<div className="fixed left-0 opacity-0">
				{!user ? (
					<Button name="LogIn" onClick={logIn} />
				) : (
					<Button name="LogOut" onClick={logOut} />
				)}
			</div>
		</header>
	);
}
