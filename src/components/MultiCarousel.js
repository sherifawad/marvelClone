import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@linaria/react";
import colors from "../styles/constants/colors";
import CarouselSlideGrid from "./CarouselSlideGrid";
import {
	AiFillFacebook,
	AiOutlineInstagram,
	AiOutlineTwitter
} from "react-icons/ai";

const MultiCarousel = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		}
	};

	return (
		<Container>
			<div className="promo__wrapper">
				<div className="promo__content">
					<div className="promo__logo">
						<img
							src={require("../images/disneybtn_asset2x_4.png")}
							alt="disney logo"
						/>
					</div>
					<div className="promo__content__main">
						<div className="promo__title">
							STREAM HAWKEYE EXCLUSIVELY ON{" "}
						</div>
					</div>
					<a className="promo__content__btn" href="http">
						{" "}
					</a>
				</div>
			</div>
			<Carousel
				customDot={<CustomDot />}
				// renderDotsOutside
				swipeable={false}
				draggable={false}
				showDots={true}
				responsive={responsive}
				ssr={false} // means to render carousel on server-side.
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={5000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={500}
				arrows={false}
				// removeArrowOnDeviceType={["tablet", "mobile"]}
				// deviceType={this.props.deviceType}
				containerClass="carousel-container"
				sliderClass="custom-sliderClass"
				itemClass="carousel-item"
				dotListClass="custom-dot-list-style"
			>
				<CarouselSlideGrid
					backgroundImage="xmenred_mas_dsk.jpg"
					logoText="Marvel Comics"
					title="X-Men Red"
					desc="This April, Storm, Magneto, Sunspot, and more strive to maintain peace on mutantkind’s new world."
				/>
				<CarouselSlideGrid
					backgroundImage="newcomics1522_mas_dsk.jpg"
					logoText="Marvel Comics"
					title="This Week's New Comics"
					desc="Jonathan Hickman’s time with the X-Men ends with the dramatic conclusion of 'Inferno'! And so much more!"
				/>
				<CarouselSlideGrid
					backgroundImage="wastelanderswidow_mas_dsk.jpg"
					darken
					logo="wlbw_lob_log_eye_01.png"
					title="Coming January 10"
					desc="Listen to Marvel's Wastelanders: Black Widow starring Susan Sarandon starting January 10 on SiriusXM!"
				/>
				<CarouselSlideGrid
					backgroundImage="mu2021_mas_dsk.jpg"
					logo="mu_lob_log_eye_01.png"
					title="Your 2021 Favorites"
					desc="The top series, characters, and events you were reading (and following) this year!"
				/>
				<CarouselSlideGrid
					backgroundImage="momteaser_mas_dsk.jpg"
					logo="drstrangemm_lob_log_eye_01_0.png"
					title="Watch the Teaser"
					desc="The Multiverse is a concept about which we know frighteningly little. The first teaser and poster for Marvel Studios' 'Doctor Strange in the Multiverse of Madness' has arrived!"
				/>
			</Carousel>

			<div className="socialWrapper">
				<div className="social-content">
					<AiFillFacebook />
					<AiOutlineInstagram />
					<AiOutlineTwitter />
				</div>
			</div>
		</Container>
	);
};

const CustomDot = ({ index, onClick, active }) => (
	<button
		onClick={e => {
			onClick();
			e.preventDefault();
		}}
		// className={classNames("custom-dot", {
		// 	"custom-dot--active": active
		// })}
		className={`dotBtn ${active ? "active" : "inactive"}`}
	>
		{React.Children.toArray(dotsGroup)[index]}
	</button>
);

const dotsGroup = [
	"X-Men Red",
	"This Week's New Comics",
	"Coming January 10",
	"Your 2021 Favorites",
	"Multiverse of Madness Teaser"
];
// .map((name, index) => (
// 	<li key={index} className="dotItme">
// 		<div className="dot">{name}</div>
// 	</li>
// ));

const Container = styled.div`
	position: relative;
	height: 80%;

	.promo__wrapper {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: calc(30px + 0.2em);
		background-color: ${colors.black()};
		z-index: 1;
		padding-bottom: 0.2em;
		font-size: 14px;
		.promo__content {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: row-reverse;
			.promo__content__main {
				margin-inline: 1em;
			}
			.promo__content__btn {
				position: absolute;
				inset: 0;
				color: ${colors.white()};
			}
		}
	}
	.socialWrapper {
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 3;
		color: black;
		.social-content {
			padding: 0.5em;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.social-content > * {
		margin-left: 0.4em;
	}

	.carousel-container {
		background-color: ${colors.black()};
		height: 100%;
		position: relative;
		&::before {
			content: "";
			position: absolute;
			left: 0;
			bottom: 0;
			width: 50%;
			height: 2rem;
			background-color: white;
			z-index: 1;
		}
		&::after {
			content: "";
			position: absolute;
			left: 50%;
			bottom: 0;
			width: 50%;
			height: 2.5rem;
			background-color: white;
		}

		.custom-sliderClass {
			height: 100%;
			position: relative;
			&::before {
				content: "aa";
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 30px;
				color: white;
			}

			.carousel-item {
				padding-top: 30px;
				padding-bottom: 60px;
			}
		}
	}
	.custom-dot-list-style {
		z-index: 2;
		background-color: ${colors.white()};
		margin-inline: 5rem;
		width: 70vw;
		color: ${colors.black()};
		display: flex;
		align-content: center;
		justify-content: space-between;

		.dotBtn {
			outline: none;
			border: none;
			font-weight: bold;
			background-color: transparent;
			position: relative;
			cursor: pointer;
			padding: 20px;
			overflow: hidden;
			:last-of-type {
				padding-top: 30px;
			}
			&::before {
				content: "";
				position: absolute;
				left: 0;
				top: 0;
				width: calc(100% + 2rem);
				padding: 0;
				margin: 0;
				height: 0.175rem;
				background-color: red;
				opacity: 0;
				transform: scale(0, 1);
				transform-origin: left bottom;
			}

			&.active {
				color: ${colors.maximum_red()};
				:before {
					animation: progress 6s linear;
				}
			}
		}
	}
	@keyframes progress {
		from {
			transform: scale(0, 1);
			opacity: 1;
		}

		to {
			transform: scale(1, 1);
			opacity: 1;
		}
	}
`;

export default MultiCarousel;
