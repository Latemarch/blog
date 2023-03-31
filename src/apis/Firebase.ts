import { get } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
	apiKey: "AIzaSyCrL0eZ73G5jpq4PM4alTjtMrY74POyDZA",
	authDomain: "blog-eba42.firebaseapp.com",
	databaseURL:
		"https://blog-eba42-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "blog-eba42",
	storageBucket: "blog-eba42.appspot.com",
	messagingSenderId: "1033794597655",
	appId: "1:1033794597655:web:47d6b8b9360cfbfe253d52",
	// apiKey: "AIzaSyCrL0eZ73G5jpq4PM4alTjtMrY74POyDZA",
	// authDomain: "blog-eba42.firebaseapp.com",
	// databaseURL: "https://blog-eba42-default-rtdb.asia-southeast1.firebasedatabase.app",
	// projectId: "blog-eba42",
	// storageBucket: "blog-eba42.appspot.com",
	// messagingSenderId: "1033794597655",
	// appId: "1:1033794597655:web:47d6b8b9360cfbfe253d52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export async function login() {
	signInWithPopup(auth, provider)
		.then((result) => {
			console.log(result.user);
		})
		.catch(console.error);
}

export type IArticle = {
	writer: string;
	title: string;
	contents: string;
	createdAt: Date;
};
