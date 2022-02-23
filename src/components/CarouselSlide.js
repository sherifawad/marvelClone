import React from "react";
import { styled } from "@linaria/react";
import colors from "../styles/constants/colors";
import CustomLinkBtn from "./CustomLinkBtn";

const CarouselSlide = ({
	backgroundImage = "",
	logoText = "",
	logo = "",
	title = "",
	desc = "",
	darken = false
}) => (
	<Wrapper bg={backgroundImage} darken={darken}>
		<div className="slideContent">
			<div className="slide__header">
				{logo && (
					<img
						className="slide__photo"
						src={require(`../images/${logo}`)}
						alt=""
					/>
				)}
				{logoText && <div className="header__text">{logoText}</div>}
			</div>
			<div className="slide__Body">
				<h1 className="slide__title">{title}</h1>
				<p className="slide__desc">{desc}</p>
			</div>
			<div className="slide__Footer">
				<CustomLinkBtn
					text="Learn More"
					textColor={colors.white()}
					btnBackColor={colors.maximum_red()}
					btnBorderColor={colors.maximum_red()}
				/>
			</div>
		</div>
	</Wrapper>
);

const Wrapper = styled.div`
	height: 100%;
	background-image: ${({ bg }) => bg && `url(${require(`../images/${bg}`)})`};
	box-shadow: ${({ darken }) =>
		darken &&
		`inset 0px 0px 400px 110px rgba(0, 0, 0, 0.4)`}; /* darken background image */
	box-shadow: inset 0px 0px 400px 110px rgba(0, 0, 0, 0.4);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top center;
	display: flex;
	align-items: center;
	.slideContent {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		color: ${colors.white()};
		padding-inline: 2em;
		width: 55%;

		.slide__header {
			width: 100%;
			.header__text {
				position: relative;
				text-transform: uppercase;
				&::before,
				&::after {
					background-color: #c6a972;
					content: "";
					display: block;
					height: 2px;
					position: absolute;
					transform: rotate(-45deg) skewX(45deg);
					width: 34px;
				}
				&::before {
					left: 53px;
					top: -8px;
					transform-origin: left bottom;
				}
				&::after {
					left: -6px;
					top: calc(100% + 3px);
					transform-origin: right top;
				}
			}
		}
		.slide__Body {
			.slide__title {
				font-size: 1.5rem;
				text-transform: uppercase;
				font-weight: bold;
				padding-top: 0.5em;
				white-space: nowrap;
				letter-spacing: 0;
			}
			.slide__desc {
				font-size: 1.2rem;
				padding-top: 1em;
			}
		}
	}
`;

export default CarouselSlide;
