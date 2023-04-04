import {
	ChangeEvent,
	CSSProperties,
	FormEvent,
	MouseEvent,
	useState,
} from "react";
import { IProj } from "../apis/Firebase";
import { v4 as uuid } from "uuid";
import Icon, { iconName, iconObj } from "../components/Icon";
const defaultProject: IProj = {
	category: "projects",
	id: uuid(),
	createdAt: Date.now(),
	title: "",
	git: "",
	published: "",
	stacks: [],
	detail: "",
};
const style =
	"flex w-full focus:outline-none text-2xl dark:bg-Dinput items-start";
const icons: iconName[] = Object.keys(iconObj) as iconName[];
// const icons: iconName[] = ["React"];
export default function EditProject() {
	const [input, setInput] = useState(defaultProject);
	const [stacks, setStacks] = useState<string[]>([]);
	const handleStacks = (e: MouseEvent<HTMLDivElement>) => {
		const { name } = e.currentTarget.dataset;
		if (name)
			if (stacks.includes(name)) {
				setStacks((prev) => prev.filter((el) => el !== name));
			} else {
				setStacks([...stacks, name]);
			}
	};
	const getIconStyle = (stack: string): CSSProperties => {
		return { filter: stacks.includes(stack) ? "brightness(2)" : undefined };
	};
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInput({ ...input, [name]: value });
	};
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(input, stacks);
	};
	return (
		<section className="pb-20">
			<form className="flex w-full flex-col space-y-2 " onSubmit={handleSubmit}>
				<div className="flex">
					{icons.map((icon) => (
						<Icon
							key={icon}
							name={icon}
							onClick={handleStacks}
							style={getIconStyle(icon)}
						/>
					))}
				</div>
				<input
					className={style}
					name="title"
					placeholder="title"
					value={input.title}
					onChange={handleInput}
				/>

				<input
					className={style}
					name="git"
					placeholder="git url"
					value={input.git}
					onChange={handleInput}
				/>
				<input
					className={style}
					name="published" //
					placeholder="published site url"
					value={input.published}
					onChange={handleInput}
				/>
				<input
					className={`${style} h-48`}
					name="detail"
					placeholder="detail"
					value={input.detail}
					onChange={handleInput}
					required
				/>
				<div className="flex justify-end">
					<button className="border mt-4 p-2 rounded-lg bg-Dtab">submit</button>
				</div>
			</form>
		</section>
	);
}
