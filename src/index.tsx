import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import { Helmet } from "react-helmet";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "/Projects", element: <Projects /> },
			{ path: "/articles", element: <Articles /> },
			{ path: "/articles/:id", element: <Article /> },
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<Helmet>
			<html className="dark" />
			<body className="flex h-full flex-col bg-red-200 dark:bg-Dbg" />
		</Helmet>
		<div className="fixed inset-0 flex justify-center bg-zinc-00 sm:px-8">
			<div className="flex w-full max-w-7xl lg:px-8">
				<div className="w-full bg-red-100 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
			</div>
		</div>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
