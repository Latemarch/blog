import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollHeader from "./components/ScrollHeader";

function App() {
	return (
		<div className="relative flex flex-col items-center px-8">
			<ScrollHeader height={100}>
				<Header />
			</ScrollHeader>
			<div className="sm:px-8 mt-20 sm:mt-32 ">
				<div className="mx-auto max-w-7xl lg:px-8 ">
					<div className="mx-auto max-w-2xl lg:max-w-5xl text-white">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
