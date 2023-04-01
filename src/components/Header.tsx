import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logIn, logOut, onUserStateChange } from "../apis/Firebase";
import { IAuth } from "../redux/slices/userSlice";
import Nav from "./Nav";

const buttons = ["About", "Articles", "Projects", "edit"];

export default function Header() {
	const { user } = useSelector<IAuth>((state) => state.user) as IAuth;
	console.log("in the header", user);
	return (
		<header className="flex justify-center h-24 w-full items-center">
			<Nav buttons={buttons} />
			{!user ? (
				<button
					onClick={logIn}
					className="fixed left-0 top-0 flex  h-5 bg-white"
				>
					login
				</button>
			) : (
				<button
					onClick={logOut}
					className="fixed left-20 top-0 flex  h-5 bg-white"
				>
					logOut
				</button>
			)}

			<button
				onClick={logOut}
				className="fixed left-200 top-0 flex  h-5 bg-white"
			>
				logOut
			</button>
		</header>
	);
}
