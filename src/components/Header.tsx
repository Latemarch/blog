import { useSelector } from "react-redux";
import { logIn, logOut } from "../apis/Firebase";
import { IAuth } from "../redux/slices/userSlice";
import Nav from "./Nav";

const buttons = ["About", "Articles", "Projects", "Edit"];

export default function Header() {
	const { user } = useSelector<IAuth>((state) => state.user) as IAuth;
	return (
		<header className="z-10 flex justify-center h-24 w-full items-center">
			<Nav buttons={buttons} />
			{!user ? (
				<button
					onClick={logIn}
					className="fixed left-2 top-2 flex w-7   h-7 bg-white rounded-full flex items-center justify-center"
				>
					in
				</button>
			) : (
				<button
					onClick={logOut}
					className="fixed left-2 top-2 flex w-7   h-7 bg-white rounded-full flex items-center justify-center"
				>
					Out
				</button>
			)}
		</header>
	);
}
