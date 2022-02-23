// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "../pages/HomePage";
// import AboutPage from "../pages/AboutPage";
// import Header from "../components/Header";
import React from "react";
// import Carousel from "../components/Carousel";
// import "../styles";
// import { Loading } from "../components/Loading";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroSlider from "../components/HeroSlider";
// import MultiCarousel from "../components/MultiCarousel";
// import MultiCarouselWithScroll from "../components/MultiCarouselWithScroll";
import ScrollSection from "../components/ScrollSection";
import colors from "../styles/constants/colors";

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

	// <Loading />
	<>
		<Header />
		{/* <Carousel /> */}
		{/* <MultiCarousel /> */}
		<HeroSlider />
		<Hero
			btns={[
				{
					text: "Learn More",
					link: "http",
					textColor: colors.white(),
					btnBackColor: colors.white(),
					btnBorderColor: colors.white(),
					light: true
				},
				{
					text: "Watch Now",
					link: "http",
					textColor: colors.white(),
					btnBackColor: colors.white(),
					btnBorderColor: colors.white(),
					light: true
				}
			]}
		/>
		<ScrollSection />
		{/* <MultiCarouselWithScroll /> */}
	</>
);

export default App;
