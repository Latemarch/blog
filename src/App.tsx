import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Headroom from "react-headroom";
import { Helmet } from "react-helmet";

const outLine = "outline";
function App() {
	return (
		<div className="relative flex flex-col items-center">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
