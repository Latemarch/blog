import { IProj } from "../apis/Firebase";
import Icon, { iconName, iconObj } from "../components/Icon";

const style =
	"flex w-full focus:outline-none text-2xl dark:bg-Dinput items-start";
const icons: iconName[] = Object.keys(iconObj) as iconName[];
interface IProp {
	project: IProj;
	handleStacks: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	getIconStyle: (arg: string) => React.CSSProperties;
}
export default function EditProject({
	project,
	handleStacks,
	handleInput,
	handleSubmit,
	getIconStyle,
}: IProp) {
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
					value={project.title}
					onChange={handleInput}
				/>

				<input
					className={style}
					name="git"
					placeholder="git url"
					value={project.git}
					onChange={handleInput}
				/>
				<input
					className={style}
					name="published" //
					placeholder="published site url"
					value={project.published}
					onChange={handleInput}
				/>
				<input
					className={`${style} h-48`}
					name="detail"
					placeholder="detail"
					value={project.detail}
					onChange={handleInput}
				/>
				<div className="flex justify-end">
					<button className="border mt-4 p-2 rounded-lg bg-Dtab">submit</button>
				</div>
			</form>
		</section>
	);
}
