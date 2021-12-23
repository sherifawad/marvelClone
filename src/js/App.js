// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "../pages/HomePage";
// import AboutPage from "../pages/AboutPage";
// import Header from "../components/Header";
import React from "react";
import "../styles";
import { Loading } from "../components/Loading";

const App = () => (
	// <Router>
	// 	{/* <nav style={{ margin: 10 }}>
	// 		<Link to="/" style={{ padding: 5 }}>
	// 			Home
	// 		</Link>
	// 		<Link to="/about" style={{ padding: 5 }}>
	// 			About
	// 		</Link>
	// 	</nav> */}
	// 	<Header />
	// 	<Routes>
	// 		<Route path="/" element={<HomePage />} />

	// 		<Route path="/about" element={<AboutPage />} />
	// 	</Routes>
	// </Router>

	<Loading />
);

export default App;
