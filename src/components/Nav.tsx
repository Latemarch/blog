import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IAuth } from "../redux/slices/userSlice";
import Button from "./Button";
import { INav } from "../type";

export default function Nav({ buttons }: INav) {
	const { user } = useSelector<IAuth>((state) => state.user) as IAuth;
	return (
		<ul className="flex px-2 text-white drop-shadow-md rounded-full bg-Dtab ring-1 ring-zinc-100 dark:ring-zinc-300/20">
			{Object.keys(buttons).map((key) => (
				<Link to={buttons[key]} key={key}>
					<li key={key}>
						<Button name={key} />
					</li>
				</Link>
			))}
			{user?.isAdmin && (
				<Link to="/edit/post" key="edit">
					<li key="edit">
						<Button name="Edit" />
					</li>
				</Link>
			)}
		</ul>
	);
}
