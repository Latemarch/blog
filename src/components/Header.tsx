import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import Nav from "./Nav";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { IStore } from "../type";
import { updateMode } from "../redux/slices/darkModeSlice";

type IButtons = {
	[key: string]: string;
};
const buttons: IButtons = {
	Home: "/",
	Posts: "posts",
	Projects: "projects",
};

export default function Header() {
	const { isDark } = useSelector((state: IStore) => state.darkMode);
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(updateMode());
	};
	return (
		<header className="relative flex justify-center h-20 w-full items-center mx-8 max-w-2xl sm:mx-16 lg:mx-24 lg:max-w-5xl ">
			<Nav buttons={buttons} />
			<div className="absolute flex right-0 h-16 items-center justify-center ">
				<DarkModeSwitch
					onChange={handleClick}
					checked={isDark}
					sunColor={"gray"}
				/>
			</div>
			<div className="fixed left-0 opacity-0">
				<Login />
			</div>
		</header>
	);
}
