import React from "react";
import { styled } from "@linaria/react";
import SlideData from "./SlideData";
import CustomLinkBtn from "./CustomLinkBtn";

const CarouselSlideGrid = ({
	backgroundImage = "",
	logoText = "",
	logo = "",
	title = "",
	desc = "",
	darken = false,
	className = ""
}) => (
	<Wrapper className={className} darken={darken}>
		<div className="slideContent">
			<div className="slide__heroImage">
				<img src={require(`../images/${backgroundImage}`)} alt="" />
			</div>
			<div className="slide__heroData">
				<SlideData
					logoText={logoText}
					logo={logo}
					title={title}
					desc={desc}
				/>
				<CustomLinkBtn
					text="Learn More"
					textColor="white"
					btnBackColor="red"
					btnBorderColor="red"
				/>
			</div>
		</div>
	</Wrapper>
);

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;

	.slideContent {
		height: 100%;
		width: 100%;
		display: grid;
		& > * {
			grid-row: 1;
			grid-column: 1;
		}
		.slide__heroImage {
			height: 100%;
			width: 100%;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.slide__heroData {
			width: 55%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding-left: 2rem;
		}
	}
`;

export default CarouselSlideGrid;
