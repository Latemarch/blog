import Icon from "./Icon";
import Login from "./Login";
import Nav from "./Nav";

type IButtons = {
	[key: string]: string;
};
const buttons: IButtons = {
	Home: "/",
	Posts: "posts",
	Projects: "projects",
};

export default function Header() {
	return (
		<header className="relative flex justify-center h-20 w-full items-center mx-8 max-w-2xl sm:mx-16 lg:mx-24 lg:max-w-5xl ">
			<Nav buttons={buttons} />
			{/* <div className="absolute flex left-0 h-16 items-center justify-center ">
				<Link to="/">
					<Icon name={"React"} />
				</Link>
			</div> */}
			<div className="fixed left-0 opacity-0">
				<Login />
			</div>
		</header>
	);
}
