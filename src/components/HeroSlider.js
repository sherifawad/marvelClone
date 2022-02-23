import React, { useState, useEffect, useRef } from "react";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@linaria/react";
import colors from "../styles/constants/colors";
import CarouselSlideGrid from "./CarouselSlideGrid";
import { useStateValue } from "../js/StateProvider";
import {
	AiFillFacebook,
	AiOutlineInstagram,
	AiOutlineTwitter
} from "react-icons/ai";

const HeroSlider = () => {
	const [slideIndex, setSlideIndex] = useState(1);
	const [{ HeroSlides }, dispatch] = useStateValue();
	const timeoutRef = useRef(null);

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	useEffect(() => {
		timeoutRef.current = setTimeout(() => {
			moveDot(slideIndex === HeroSlides.length ? 1 : slideIndex + 1);
		}, 5000);

		return () => {
			resetTimeout();
		};
	}, [HeroSlides.length, slideIndex]);

	const moveDot = index => {
		setSlideIndex(index);
	};

	return (
		<Container>
			<div className="promo__wrapper slide__header">
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
			<div className="slides slide__body">
				{HeroSlides.map((slide, index) => (
					<CarouselSlideGrid
						key={index}
						className={
							slideIndex === index + 1
								? "slide active-anim"
								: "slide"
						}
						backgroundImage={slide.backgroundImage}
						darken={slide.darken}
						logo={slide.logo}
						logoText={slide.logoText}
						title={slide.title}
						desc={slide.desc}
					/>
				))}
			</div>
			<div className="slide__footer">
				<ul className="custom-dot-list">
					{HeroSlides.map((item, index) => (
						// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
						<li
							key={index}
							onClick={() => moveDot(index + 1)}
							className={
								slideIndex === index + 1
									? "dotBtn active"
									: "dotBtn"
							}
						>
							{item.title}
						</li>
					))}
				</ul>

				<div className="socialWrapper">
					<div className="social-content">
						<AiFillFacebook />
						<AiOutlineInstagram />
						<AiOutlineTwitter />
					</div>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	height: 80%;
    background-color: ${colors.black()};

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

	.slides {
		height: 96%;
		position: relative;
		overflow: hidden;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
		padding-bottom: 5em;
		.slide {
			width: 100%;
			height: 100%;
			position: absolute;
			opacity: 0;
			transition: opacity ease-in-out 0.4s;
		}
		.active-anim {
			opacity: 1;
		}
	}

	.slide__footer {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3rem;
		.socialWrapper {
			background-color: ${colors.white()};
			clip-path: polygon(0 81%, 100% 0, 100% 100%, 0% 100%);
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 3rem;
			color: ${colors.black(0.6)};
			.social-content {
				padding-block: 0.5em;
				padding-right: 3em;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				font-size: 1.5rem;
			}
		}
		.social-content > * {
			margin-left: 0.4em;
		}

		.custom-dot-list {
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
			position: absolute;
			bottom: 0;
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
					padding-top: 20px;
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

export default HeroSlider;
