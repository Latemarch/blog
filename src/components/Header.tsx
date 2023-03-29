import Headroom from "react-headroom";
import Button from "./Button";

const buttons = ["About", "Articles", "Projects", "Seakings"];

const headSt = {
	webkitTransition: "all .5s ease-in-out",
	mozTransition: "all .5s ease-in-out",
	oTransition: "all .5s ease-in-out",
	transition: "all .5s ease-in-out",
};
export default function Header() {
	return (
		<header className="flex h-24 w-full items-center">
			//https://kyleamathews.github.io/react-headroom/
			<Headroom style={headSt}>
				<ul className="flex px-8 py-2 drop-shadow-md rounded-full bg-Dtab">
					{buttons.map((name, idx) => (
						<Button key={idx} name={name} />
					))}
				</ul>
			</Headroom>
		</header>
	);
}
