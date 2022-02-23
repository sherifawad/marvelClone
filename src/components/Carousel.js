import React from "react";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { styled } from "@linaria/react";
import colors from "../styles/constants/colors";

const Carousel = () => (
	<Container>
		<CarouselProvider
			visibleSlides={1}
			totalSlides={5}
			step={1}
			// isIntrinsicHeight
			naturalSlideWidth={1}
			naturalSlideHeight={1}
			// hasMasterSpinner
			infinite
			interval={5000}
			isPlaying
		>
			<div className="sliderWrraper">
				<Slider className="slideList">
					<Slide className="slideItem" index={0}>
						<div>
							<img
								className="slide__image"
								src={require(`../images/newcomics1522_mas_mob.jpg`)}
								alt=""
							/>
						</div>
					</Slide>
					<Slide className="slideItem" index={1}>
						<img
							className="slide__image"
							src={require(`../images/wastelanderswidow_mas_mob.jpg`)}
							alt=""
						/>
					</Slide>
					<Slide className="slideItem" index={2}>
						<img
							className="slide__image"
							src={require(`../images/momteaser_mas_mob.jpg`)}
							alt=""
						/>
					</Slide>
					<Slide className="slideItem" index={3}>
						<img
							className="slide__image"
							src={require(`../images/hawkeye6_mas_mob.jpg`)}
							alt=""
						/>
					</Slide>
					<Slide className="slideItem" index={4}>
						<img
							className="slide__image"
							src={require(`../images/mu2021_mas_mob.jpg`)}
							alt=""
						/>
					</Slide>
				</Slider>
			</div>

			<div className="dotsWrapper">
				<ul className="dotList">
					<li className="dotItme">
						<Dot className="dot" slide={0}>
							X-Men Red
						</Dot>
					</li>
					<li className="dotItme">
						<Dot className="dot" slide={1}>
							This Week&apos;s New Comics
						</Dot>
					</li>
					<li className="dotItme">
						<Dot className="dot" slide={2}>
							Coming January 10
						</Dot>
					</li>
					<li className="dotItme">
						<Dot className="dot" slide={3}>
							Your 2021 Favorites
						</Dot>
					</li>
					<li className="dotItme">
						<Dot className="dot" slide={4}>
							Multiverse of Madness Teaser
						</Dot>
					</li>
				</ul>
			</div>
		</CarouselProvider>
	</Container>
);

const Container = styled.div`
	position: relative;
	background-color: ${colors.black()};
	height: 70vh;

	.sliderWrraper {
		background-color: ${colors.white()};

		/* position: relative; */
		.slide__image {
			/* position: absolute;
			left: 0;
			bottom: 0;
			width: 100%; */
		}
	}

	.dotsWrapper {
		position: absolute;
		bottom: 0;
		overflow: hidden;
		.dotList {
			background-color: ${colors.white()};
			margin-inline: 5rem;
			width: 70vw;
			color: ${colors.black()};
			display: flex;
			align-content: center;
			justify-content: space-between;

			.dotItme {
				.dot {
					outline: none;
					border: none;
					background-color: transparent;
					position: relative;
					cursor: pointer;
					padding: 2rem;
					overflow: hidden;
					&::after {
						content: "";
						position: absolute;
						left: 0;
						bottom: 0;
						width: calc(100% + 2rem);
						padding: 0;
						margin: 0;
						height: 0.175rem;
						background-color: red;
						opacity: 0;
						transform: scale(0, 1);
						transform-origin: left bottom;
					}

					&.carousel__dot--selected {
						color: ${colors.maximum_red()};
						:after {
							animation: progress 6s linear;
						}
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

export default Carousel;
