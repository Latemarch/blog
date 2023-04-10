import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { onUserStateChange } from "./utils/Firebase";
import "./App.css";
import Header from "./components/Header";
import HeaderScroll from "./components/HeaderScroll";
import { updateUser } from "./redux/slices/userSlice";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import { IStore } from "./type";

const queryClient = new QueryClient();
function App() {
	const { isDark } = useSelector((state: IStore) => state.darkMode);
	const dispatch = useDispatch();
	useEffect(() => {
		onUserStateChange((user) => {
			dispatch(updateUser(user));
		});
	}, []);
	return (
		<div className="relative flex flex-col items-center px-8 h-screen ">
			<HeaderScroll height={100}>
				<Header />
			</HeaderScroll>
			<HelmetProvider>
				<Helmet>
					<html
						className={isDark ? "dark" : "light"}
						data-color-mode={isDark ? "dark" : "light"}
					/>
					<body className="flex h-full flex-col" />
				</Helmet>
			</HelmetProvider>
			<div className="main w-full h-full sm:px-8 mt-20 sm:mt-32 ">
				<div className="mx-auto max-w-7xl lg:px-8  h-full ">
					<div className="mx-auto max-w-2xl lg:max-w-5xl text-white h-full ">
						<QueryClientProvider client={queryClient}>
							<Outlet />
						</QueryClientProvider>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
