import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IAuth } from "../redux/slices/userSlice";

export default function Nav({ buttons }: { buttons: string[] }) {
	const { user } = useSelector<IAuth>((s) => s.user) as IAuth;
	const filteredButtons = user?.isAdmin
		? buttons
		: buttons.filter((el) => el !== "edit");
	return (
		<ul className="flex px-2  drop-shadow-md rounded-full bg-Dtab ring-1 ring-zinc-100 dark:ring-zinc-300/20">
			{filteredButtons.map((button) => (
				<Link to={button} key={button}>
					<li className="p-2 px-4 text-white" key={button}>
						{button}
					</li>
				</Link>
			))}
		</ul>
	);
}
