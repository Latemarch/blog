import { child, get, getDatabase, ref, set } from "firebase/database";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	User,
	onAuthStateChanged,
	signOut,
	NextFn,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	// authDomain: "blog-eba42.firebaseapp.com",
	// databaseURL: process.env.REACT_APP_FIREBASE_DB_UR,
	databaseURL:
		"https://blog-eba42-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
	// projectId: "blog-eba42 ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase();
const dbRef = ref(getDatabase(app));

export async function logIn() {
	signInWithPopup(auth, provider).catch(console.error);
}

export async function logOut() {
	signOut(auth)
		.then((res) => console.log(res))
		.catch(console.error);
}
export function onUserStateChange(callback: (user: IUser | undefined) => void) {
	onAuthStateChanged(auth, async (user) => {
		if (user) {
			const { photoURL, uid, email, displayName } = user;
			const sortedUser = { isAdmin, photoURL, uid, email, displayName };
			const updatedUser = await isAdmin(sortedUser);
			callback(updatedUser);
		} else {
			const updatedUser = undefined;
			callback(updatedUser);
		}
	});
}

export async function isAdmin(user: IUser) {
	return get(child(dbRef, "admins")) //
		.then((snapshot) => {
			const admins = snapshot.val();
			const isAdmin = admins.includes(user?.uid);
			return { ...user, isAdmin };
		});
}

export function addPost(article: IArticle) {
	set(ref(database, `posts/${article.id}`), article);
}

export async function getPosts(): Promise<IArticle[]> {
	const snapshot = await get(child(dbRef, "posts"));
	if (snapshot.exists()) {
		const data: IArticle[] = Object.values(snapshot.val());
		return data;
	}
	return [];
}

export async function getPost(id: string | undefined): Promise<IArticle> {
	const snapshot = await get(child(dbRef, `posts/${id}`));
	const post = snapshot.val();
	return post;
}

export type IArticle = {
	id: string;
	author: string;
	title: string;
	body: string;
	createdAt: string;
	tag?: string[];
};

export interface IUser {
	isAdmin: any;
	photoURL: string | null;
	uid: string;
	email: string | null;
	displayName: string | null;
}
