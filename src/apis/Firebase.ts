import { child, get, getDatabase, ref } from "firebase/database";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	User,
	onAuthStateChanged,
	signOut,
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
// const database = getDatabase();
const dbRef = ref(getDatabase(app));

export async function logIn() {
	signInWithPopup(auth, provider).catch(console.error);
}

export async function logOut() {
	signOut(auth).catch(console.error);
}

export function onUserStateChange(callback: (user: User | null) => void) {
	onAuthStateChanged(auth, async (user) => {
		const updatedUser = user && (await isAdmin(user));
		callback(updatedUser);
	});
}

export async function isAdmin(user: User) {
	return get(child(dbRef, "admins")) //
		.then((snapshot) => {
			const admins = snapshot.val();
			const isAdmin = admins.includes(user?.uid);
			return { ...user, isAdmin };
		});
}

export type IArticle = {
	writer: string;
	title: string;
	contents: string;
	createdAt: Date;
};
