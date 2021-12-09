import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

export const App = () => (
	<Router>
		<nav style={{ margin: 10 }}>
			<Link to="/" style={{ padding: 5 }}>
				Home
			</Link>
			<Link to="/about" style={{ padding: 5 }}>
				About
			</Link>
		</nav>
		<Routes>
			<Route path="/" element={<HomePage />} />

			<Route path="/about" element={<AboutPage />} />
		</Routes>
	</Router>
);
