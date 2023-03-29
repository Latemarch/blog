import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollHeader from "./components/ScrollHeader";

function App() {
	return (
		<div className="relative flex flex-col items-center">
			<ScrollHeader height={100}>
				<Header />
			</ScrollHeader>
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
