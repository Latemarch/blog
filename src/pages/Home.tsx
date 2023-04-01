import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onUserStateChange } from "../apis/Firebase";
import { IAuth, updateUser } from "../redux/slices/userSlice";

export default function Home() {
	const { user } = useSelector<IAuth>((state) => state.user) as IAuth;
	const dis = useDispatch();
	console.log("home", user);
	useEffect(() => {
		onUserStateChange((user) => {
			dis(updateUser(user));
		});
	}, []);

	return (
		<div className="w-full h-full home text-white text-justify">
			<h1 className="text-3xl">Motivation</h1>
			<span className="text-xl">dljwldj</span>
		</div>
	);
}
