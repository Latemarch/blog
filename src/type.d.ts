export interface IEditProject {
	project: IProj;
	handleStacks: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleInput: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	getIconStyle: (arg: string) => React.CSSProperties;
}

export interface IEditPost {
	post: IPost;
	markdown: string;
	handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
	handleInput(e: React.ChangeEvent<HTMLInputElement>): void;
	setMarkDown(e: any): void;
}

type IButtons = {
	[key: string]: string;
};
export interface INav {
	buttons: IButtons;
}

export interface IModal {
	msg: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IProj {
	category: string;
	id: string;
	title: string;
	createdAt: number;
	stacks: iconName[];
	detail: string;
	git?: string;
	published?: string;
}
export interface IPost {
	category: string;
	id: string;
	author: string;
	title: string;
	body: string;
	createdAt: number;
	tag?: string[];
}

export interface IUser {
	isAdmin: any;
	photoURL: string | null;
	uid: string;
	email: string | null;
	displayName: string | null;
}

interface IProp {
	project: IProj;
}

interface IPostFC {
	post: IPost;
	isAdmin: boolean;
	onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IPostCard {
	post: IPost;
}
