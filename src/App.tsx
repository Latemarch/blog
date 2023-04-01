import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { onUserStateChange } from "./apis/Firebase";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollHeader from "./components/ScrollHeader";
import { updateUser } from "./redux/slices/userSlice";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		onUserStateChange((user) => {
			dispatch(updateUser(user));
		});
	}, []);
	return (
		<div className="relative flex flex-col items-center px-8 h-screen">
			<ScrollHeader height={100}>
				<Header />
			</ScrollHeader>
			<div className="main w-full h-full  sm:px-8 mt-20 sm:mt-32 ">
				<div className="mx-auto max-w-7xl lg:px-8  h-full ">
					<div className="mx-auto max-w-2xl lg:max-w-5xl text-white h-full">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
