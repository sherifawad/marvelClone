import React from "react";
import colors from "../styles/constants/colors";
import { styled } from "@linaria/react";

const SlideData = ({ logoText = "", logo = "", title = "", desc = "" }) => (
	<Wrapper>
		<div className="slide__data">
			<div className="slide__header">
				{logo && (
					<img
						className="header__photo"
						src={require(`../images/${logo}`)}
						alt=""
					/>
				)}
				{logoText && <div className="header__text">{logoText}</div>}
			</div>
			<div className="slide__Body">
				{title && <h1 className="slide__title">{title}</h1>}
				{desc && <p className="slide__desc">{desc}</p>}
			</div>
		</div>
	</Wrapper>
);

const Wrapper = styled.div`
	color: ${colors.white()};
	display: flex;
	align-items: centre;
	justify-content: centre;
	.slide__data {
		display: flex;
		flex-direction: column;
		justify-content: center;
		.slide__header {
			width: 100%;
			margin-bottom: 3rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: centre;
			.header__photo {
				width: 5em;
				aspect-ratio: 1 / 1.5;
				padding-bottom: 3em;
			}
			.header__text {
				position: relative;
				text-transform: uppercase;
				font: 500 18px/19px RobotoCondensed Bold;
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
                font:800 40px/1 RobotoCondensed,Trebuchet MS,Helvetica,Arial,sans-serif;
				/* font-size: 1.5rem; */
				text-transform: uppercase;
				font-weight: bold;
				white-space: nowrap;
				letter-spacing: 0;
			}
			.slide__desc {
				font:400 16px/1.3 Roboto,Trebuchet MS,Helvetica,Arial,sans-serif;
				padding-top: 1em;
			}
		}
	}
`;

export default SlideData;
