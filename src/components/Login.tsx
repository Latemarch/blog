import React from "react";
import Button from "./Button";
import { logIn, logOut } from "../apis/Firebase";
import { useSelector } from "react-redux";
import { IAuth } from "../redux/slices/userSlice";

export default function Login() {
	const { user } = useSelector<IAuth>((state) => state.user) as IAuth;
	return (
		<>
			{!user ? (
				<Button name="LogIn" onClick={logIn} />
			) : (
				<Button name="LogOut" onClick={logOut} />
			)}
		</>
	);
}
