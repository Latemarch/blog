import React from "react";
import { login } from "../apis/Firebase";

export default function Home() {
	return (
		<div className="w-full h-full home text-white text-justify">
			<h1 className="text-3xl">Motivation</h1>
			<span className="text-xl">dljwldj</span>
			<button onClick={login}>login</button>
		</div>
	);
}
