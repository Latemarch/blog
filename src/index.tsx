import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Posts from "./pages/Posts";
import { Provider } from "react-redux";
import store from "./redux/store";
import EditPostContainer from "./containers/EditPostContainer";
import EditProjectContainer from "./containers/EditProjectContainer";
import Project from "./pages/Project";
import PostContainer from "./containers/PostContainer";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			// { path: "/about", element: <About /> },
			{ path: "/projects", element: <Projects /> },
			{ path: "/projects/:id", element: <Project /> },
			{ path: "/Posts", element: <Posts /> },
			{ path: "/posts/:id", element: <PostContainer /> },
			{ path: "/edit/post", element: <EditPostContainer /> },
			{ path: "/edit/post/:id", element: <EditPostContainer /> },
			{ path: "/edit/project/", element: <EditProjectContainer /> },
			{ path: "/edit/project/:id", element: <EditProjectContainer /> },
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
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
