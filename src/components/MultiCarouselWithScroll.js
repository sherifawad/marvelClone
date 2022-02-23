import { styled } from "@linaria/react";
import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import { useStateValue } from "../js/StateProvider";
import colors from "../styles/constants/colors";
import PhotoCard from "./PhotoCard";
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 6
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 4
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 2
	}
};

const MultiCarouselWithScroll = () => {
	const [{ firstCollection }, dispatch] = useStateValue();
	const carsouelRef = useRef();
	// const [transformState, settransformState] = useState({
	// 	additionalTransfrom: 0
	// });
	const [transformState, settransformState] = useState(0);
	const [isAnimationAllowed, setisAnimationAllowed] = useState(false);
	const CustomButtonGroup = ({ goToSlide, carouselState }) => {
		// const { totalItems, itemWidth, transform, slidesToShow } =
		// 	carouselState;

		// let value = 0;
		let carouselItemWidth = 0;
		// if (carsouelRef) {
		// 	carouselItemWidth = itemWidth;
		// 	const maxTranslateX = Math.round(
		// 		// so that we don't over-slide
		// 		carouselItemWidth * (totalItems - slidesToShow) + 150
		// 	);
		// 	value = maxTranslateX / 100; // calculate the unit of transform for the slider
		// }

		return (
			<div className="custom-slider">
				<input
					type="range"
					min="0"
					value={transformState}
					// value={Math.round(Math.abs(transform) / value)}
					// defaultValue={0}
					// max={
					// 	(carouselItemWidth *
					// 		(carouselState.totalItems -
					// 			carouselState.slidesToShow) +
					// 		(transformState === 150 ? 0 : 150)) /
					// 	value
					// }
					max={
						(carouselItemWidth *
							(carouselState.totalItems -
								carouselState.slidesToShow)) 
					}
					onChange={e => settransformState(e.target.value)}
					// {
					// 	if (isAnimationAllowed) {
					// 		setisAnimationAllowed(false);
					// 	}
					// 	const nextTransform = e.target.value * value;
					// 	const nextSlide = Math.round(
					// 		nextTransform / carouselItemWidth
					// 	);
					// 	if (e.target.value === 0 && transformState === 150) {
					// 		setisAnimationAllowed(true);
					// 		settransformState({ additionalTransfrom: 0 });
					// 	}
					// 	goToSlide(nextSlide);
					// }
					// }
					className="custom__slider__input"
				/>
			</div>
		);
	};
	return (
		<CarouselWithScrollWrapper totalLength={firstCollection.length}>
			<Carousel
				swipeable={true}
				draggable={true}
				ssr={false}
				ref={carsouelRef}
				partialVisbile={false}
				customButtonGroup={<CustomButtonGroup />}
				itemClass="slider__item"
				responsive={responsive}
				// customTransition="all .5"
				// transitionDuration={500}
				arrows={false}
				containerClass="carousel__containerwith_scrollbar"
				// additionalTransfrom={-transformState}
				// beforeChange={nextSlide => {
				// 	if (nextSlide !== 0 && transformState !== 150) {
				// 		settransformState({ additionalTransfrom: 150 });
				// 	}
				// 	if (nextSlide === 0 && transformState === 150) {
				// 		settransformState({ additionalTransfrom: 0 });
				// 	}
				// }}
			>
				{firstCollection.map((card, index) => (
					<PhotoCard
						key={index}
						className="card"
						title={card.title}
						decs={card.decs}
						photo={card.photo}
					/>
				))}
			</Carousel>
		</CarouselWithScrollWrapper>
	);
};

const CarouselWithScrollWrapper = styled.div`
	background-color: ${colors.white()};
	--thumb-width: ${({ totalLength }) => totalLength};
	.carousel__containerwith_scrollbar {
		padding-block: 20px;
		max-width: 1240px;
		margin-inline: auto;
		overflow: hidden;

		/* Special styling for WebKit/Blink */
		input[type="range"]::-webkit-slider-thumb {
			-webkit-appearance: none;
			outline: none;
			/* border: 1px solid #000000; */
			height: 3px;
			width: calc(100% / var(--thumb-width));
			border: none;
			background: red;
			cursor: pointer;
			margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
			/* Add cool effects to your sliders! */
			/* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
		}

		/* All the same stuff for Firefox */
		input[type="range"]::-moz-range-thumb {
			/* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
			/* border: 1px solid #000000; */
			/* border-radius: 3px; */
			height: 3px;
			outline: none;
			width: calc(100% / var(--thumb-width));
			border: none;
			background: red;
			cursor: pointer;
		}

		/* All the same stuff for IE */
		input[type="range"]::-ms-thumb {
			/* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
			/* border: 1px solid #000000; */
			height: 2px;
			width: calc(100% / var(--thumb-width));
			border: none;
			background: red;
			cursor: pointer;
		}
		/* input[type="range"] {
			width: 300px;
			height: 2px;
			background: #ddd;
			border: none;
			border-radius: 3px;
		} */

		input[type="range"] {
			border: none;
			height: 2px;
			width: 100%;
			background: ${colors.taupe_gray(0.4)};
			margin-top: -4px;
		}

		input[type="range"]:focus {
			outline: none;
		}

		input[type="range"]:focus::-webkit-slider-runnable-track {
			background: green;
		}
		.custom-slider {
			position: absolute;
			bottom: 0;
			width: 100%;
			margin-top: 10px;
			padding: 0 20px 20px;
		}
		.custom-slider__input {
			width: 100%;
		}
		.slider__item {
			padding-inline: 0.5rem;
			width: ${({ items }) => `calc(100% / ${items})`};
		}
	}
`;

export default MultiCarouselWithScroll;
