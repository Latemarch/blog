import MarkdownEditor from "@uiw/react-markdown-editor";
import Icon, { iconObj } from "../components/Icon";
import { IEditProject, iconName } from "../type";

const style =
	"flex w-full p-2 focus:outline-none text-2xl bg-zinc-200 dark:bg-zinc-800 text-black dark:text-zinc-200 dark:bg-Dinput items-start";
const icons: iconName[] = Object.keys(iconObj) as iconName[];

export default function EditProject({
	project,
	markDown,
	handleStacks,
	handleInput,
	handleSubmit,
	getIconStyle,
	setMarkDown,
}: IEditProject) {
	return (
		<section className="pb-20">
			<form className="flex w-full flex-col space-y-2 " onSubmit={handleSubmit}>
				<div className="flex mb-2">
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
				<textarea
					className={`${style} h-20`}
					name="detail"
					placeholder="detail"
					value={project.detail}
					onChange={handleInput}
				/>
				<p>{`${project.detail.length}/50`}</p>
				<MarkdownEditor
					className="h-screen overflow-auto"
					value={markDown}
					onChange={setMarkDown}
				/>
				<div className="flex justify-end">
					<button className="border mt-4 p-2 rounded-lg bg-Dtab">submit</button>
				</div>
			</form>
		</section>
	);
}
