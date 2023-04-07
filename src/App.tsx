import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { onUserStateChange } from "./apis/Firebase";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderScroll from "./components/HeaderScroll";
import { updateUser } from "./redux/slices/userSlice";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();
function App() {
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
					<html className="dark" data-color-mode="dark" />
					<body className="flex h-full flex-col bg-red-200 dark:bg-Dbg" />
				</Helmet>
			</HelmetProvider>
			<div className="main w-full h-full  sm:px-8 mt-20 sm:mt-32 ">
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
