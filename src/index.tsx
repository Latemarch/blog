import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./redux/store";
import EditContainer from "./containers/EditContainer";
import About from "./pages/About";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "/about", element: <About /> },
			{ path: "/Projects", element: <Projects /> },
			{ path: "/articles", element: <Posts /> },
			{ path: "/articles/:id", element: <Post /> },
			{ path: "/edit", element: <EditContainer /> },
			{ path: "/edit/:id", element: <EditContainer /> },
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<Helmet>
				<html className="dark" data-color-mode="dark" />
				<body className="flex h-full flex-col bg-red-200 dark:bg-Dbg" />
			</Helmet>
		</HelmetProvider>
		<div className="fixed inset-0 flex justify-center bg-zinc-00 sm:px-8">
			<div className="flex w-full max-w-7xl lg:px-8">
				<div className="w-full bg-red-100 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
			</div>
		</div>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
