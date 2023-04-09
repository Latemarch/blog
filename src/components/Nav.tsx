import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { IAuth } from "../redux/slices/userSlice";
import Button from "./Button";
import { INav } from "../type";

export default function Nav({ buttons }: INav) {
	const { user } = useSelector<IAuth>((state) => state.user) as IAuth;
	const location = useLocation().pathname.split("/")[1];
	const category = location === "" ? "home" : location;
	return (
		<ul className="relative z-50 flex px-2 text-h1 dark:text-white drop-shadow-md rounded-full bg-zinc-100 dark:bg-Dtab ring-1 ring-zinc-100 dark:ring-zinc-300/20">
			{Object.keys(buttons).map((key) => (
				<Link to={buttons[key]} key={key}>
					<div className="relative ">
						{key.toLocaleLowerCase() === category && (
							<div className="absolute -z-50 flex w-12 h-2 top-0 left-0 bottom-0 right-0 mx-auto my-auto shadow-lg shadow-teal-400 "></div>
						)}
						<li key={key}>
							<Button
								name={key}
								style={
									key.toLocaleLowerCase() === category
										? { color: "#37D4BF" }
										: undefined
								}
							/>
						</li>
					</div>
				</Link>
			))}
			{user?.isAdmin && (
				<Link to="/edit/post" key="edit">
					<li key="edit">
						<Button
							name="Edit"
							style={"edit" === category ? { color: "#37D4BF" } : undefined}
						/>
					</li>
				</Link>
			)}
		</ul>
	);
}
