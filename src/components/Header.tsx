import { useSelector } from "react-redux";
import { logIn, logOut } from "../apis/Firebase";
import { IAuth } from "../redux/slices/userSlice";
import Icon from "./Icon";
import logoReact from "../svgs/react.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Button from "./Button";

const buttons = ["About", "Articles", "Projects"];

export default function Header() {
	const { user } = useSelector<IAuth>((state) => state.user) as IAuth;
	user?.isAdmin && !buttons.includes("Edit") && buttons.push("Edit");
	return (
		<header className="relative flex justify-center h-20 w-full items-center mx-8 max-w-2xl sm:mx-16 lg:mx-24 lg:max-w-5xl ">
			<Nav buttons={buttons} />
			<div className="absolute flex left-0 h-16 items-center justify-center ">
				<Link to="/">
					<Icon img={logoReact} />
				</Link>
			</div>
			{/* <div className="fixed left-0 opacity-0">
				{!user ? (
					<Button button="LogIn" onClick={logIn} />
				) : (
					<Button button="LogOut" onClick={logOut} />
				)}
			</div> */}
		</header>
	);
}
