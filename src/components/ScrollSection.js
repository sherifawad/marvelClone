import React, {
	useState,
	useEffect,
	useRef,
	useLayoutEffect,
	useMemo,
	createRef
} from "react";
import { styled } from "@linaria/react";
import { useStateValue } from "../js/StateProvider";
import colors from "../styles/constants/colors";
import PhotoCard from "./PhotoCard";

const ScrollSection = () => {
	const [{ firstCollection }, dispatch] = useStateValue();
	const [tranformValue, settranformValue] = useState(1);
	const [maxValue, setmaxValue] = useState(1);
	const prevtranformValue = useRef(0);
	const sliderRef = useRef();
	const childrenRefs = useMemo(
		() =>
			Array(firstCollection.length)
				.fill()
				.map(() => createRef()),
		[firstCollection.length]
	);
	const scroll = () => {
		childrenRefs[10].current.scrollIntoView();
	};
	// const handler = idx => e => {
	// 	const next = inputRef.current[idx + 1];
	// 	if (next) {
	// 		next.focus();
	// 	}
	// };

	const setMaxvalue = () => {
		setmaxValue(
			sliderRef.current.scrollWidth - sliderRef.current.clientWidth
		);
		// console.log(`Max: ${maxValue.current}`);
	};

	useLayoutEffect(() => {
		window.addEventListener("resize", setMaxvalue);

		return () => window.removeEventListener("resize", setMaxvalue);
	}, [window.innerWidth]);

	useLayoutEffect(() => {
		// console.log("=====================");
		// console.log(`prev: ${prevtranformValue.current}`);
		// console.log(`tranformValue: ${tranformValue}`);
		// const scrollValue = tranformValue - prevtranformValue.current;

		const scrollValue =
			tranformValue - prevtranformValue.current < 0
				? prevtranformValue.current
				: tranformValue;
		prevtranformValue.current = tranformValue;

		// for (let index = 0; index < sliderRef.current.children.length; index++) {
		//     sliderRef.current.children[index].style.transform = `translateX(-${scrollValue}px)`;

		// }

		for (let index = 0; index < childrenRefs.length; index++) {
			childrenRefs[
				index
			].current.style.transform = `translateX(-${scrollValue}px)`;
		}
	}, [tranformValue, childrenRefs]);

	useEffect(() => {
		setMaxvalue();
		prevtranformValue.current = 0;
		sliderRef.current.scrollTo({
			top: 0,
			left: 0
		});
	}, []);
	return (
		<CarouselWrapper
			itemsLength={firstCollection.length}
			scrollas={tranformValue}
		>
			<div className="carousel__content">
				<div className="carousel__content-slider" ref={sliderRef}>
					{firstCollection.map((card, index) => (
						<PhotoCard
							ref={childrenRefs[index]}
							key={index}
							title={card.title}
							decs={card.decs}
							photo={card.photo}
						/>
					))}
				</div>
				<div className="slidecontainer">
					<input
						type="range"
						min="1"
						max={maxValue}
						value={tranformValue}
						step={1}
						onChange={e => settranformValue(e.target.value)}
						className="slider"
						id="myRange"
					/>
				</div>
				{/* <button type="button" onClick={scroll}>
					{maxValue}
				</button> */}
			</div>
		</CarouselWrapper>
	);
};

const CarouselWrapper = styled.div`
	--no-of-items: ${({ itemsLength }) => itemsLength};
	--max-no-visible-items: 6;
	--item-width: 180px;
	--item-padding: 1em;
	background-color: ${colors.white()};

	--slider-height: 1.5px;
	--slider-color: ${colors.black(0.4)};
	--thumb-height: 3px;
	--thumb-color: red;

	.carousel__content {
		position: relative;
		scrollbar-color: red ${colors.taupe_gray(0.1)};
		scrollbar-width: thin;
		max-width: calc(
			(var(--item-width) + (var(--item-padding) * 2)) *
				(var(--max-no-visible-items) - (var(--item-padding) * 2))
		);
		padding-inline: 5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-wrap: nowrap;

		.carousel__content-slider {
			overflow-x: hidden;
			width: 100%;
			display: grid;
			gap: var(--item-padding);
			grid-auto-flow: column;
			grid-auto-columns: 180px;
			padding: var(--item-padding);
			/* transform: ${({ scrollas }) => `translateX(-${scrollas}%)`} */
			/* display: flex;
			align-items: center;
			justify-content: flex-start; */
			.photoCard {
				flex: 0 0 180px;
			}

			&::-webkit-scrollbar {
				width: 2px;
				height: 3px;
			}

			&::-webkit-scrollbar-track {
				background: ${colors.taupe_gray(0.1)};
				margin-block: 0.5em;
				width: 2px;
			}

			&::-webkit-scrollbar-thumb {
				background: red;
				height: 3px;
				width: 2px;
			}
		}

		.slidecontainer {
			padding-top: 0.5em;
			width: 100%;
			/* The slider itself */
			.slider {
				-webkit-appearance: none; /* Override default CSS styles */
				appearance: none;
				width: 100%; /* Full-width */
				height: var(--slider-height); /* Specified height */
				background: var(--slider-color); /* Grey background */
				outline: none; /* Remove outline */
				opacity: 1; /* Set transparency (for mouse-over effects on hover) */
				-webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
				transition: opacity 0.2s;
			}

			/* Mouse-over effects */
			.slider:hover {
				opacity: 0.7; /* Fully shown on mouse-over */
			}

			/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
			.slider::-webkit-slider-thumb {
				-webkit-appearance: none; /* Override default look */
				appearance: none;
				width: var(--item-width); /* Set a specific slider handle width */
				height: var(--thumb-height); /* Slider handle height */
				background: var(--thumb-color); /* Green background */
				cursor: pointer; /* Cursor on hover */
				border: none;
			}

			.slider::-moz-range-thumb {
				width: var(--item-width); /* Set a specific slider handle width */
				height: var(--thumb-height); /* Slider handle height */
				background: var(--thumb-color); /* Green background */
				cursor: pointer; /* Cursor on hover */
				border: none;
			}
		}
	}
`;

export default ScrollSection;
