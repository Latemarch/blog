import { Link } from "react-router-dom";
import Button from "./Button";

export default function Nav({ buttons }: { buttons: string[] }) {
	return (
		<ul className="flex px-2  drop-shadow-md rounded-full bg-Dtab ring-1 ring-zinc-100 dark:ring-zinc-300/20">
			{buttons.map((button) => (
				<Link to={button} key={button}>
					<li className="text-white" key={button}>
						<Button button={button} />
					</li>
				</Link>
			))}
		</ul>
	);
}
