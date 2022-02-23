import React from "react";
import { styled } from "@linaria/react";
import colors from "../styles/constants/colors";
const CharachterCard = ({ title = "", decs = "", photo = "", link = "http" }) => (
	<Conrainer className="charachterCard">
		<a className="charachterCard__link" href={link}>
			<div className="charachterCard__photoWrapper">
				{/* <img src={require(`${photo}`)} alt="Spider man Hero" /> */}
				<img className="charachterCard__photo" src={require(`../images/${photo}`)} alt="Spider man Hero" />
			</div>
			<div className="charachterCard__text">
				<div className="charachterCard__text-header">
					<p>{title}</p>
				</div>
				<div className="charachterCard__text-footer">
					<p>{decs}</p>
				</div>
			</div>
		</a>
	</Conrainer>
);

const Conrainer = styled.div`
	position: relative;
	overflow: hidden;
	background-color: ${colors.raisin_black()};

	.charachterCard__link {
		&:hover {
			.charachterCard__text:before {
				transform: scale(1.1, 1);
				/* transform: translate3d(0, 100%, 0); */
			}

			img {
				transform: scale(1.1);
			}
		}
	}

	&::after {
		border-bottom-color: transparent;
		border-left-color: transparent;
		border-right-color: #fff;
		border-style: solid;
		border-top-color: transparent;
		border-width: 12px 12px 0 0;
		bottom: 0;
		content: "";
		position: absolute;
		right: 0;
		top: auto;
		z-index: 40;
	}

	.charachterCard__photoWrapper {
		position: relative;
		overflow: hidden;
		img {
			width: 100%;
			aspect-ratio: 1 / 1;
			object-fit: cover;
			transition: transform 0.2s;
		}
		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 0.175rem;
			background-color: ${colors.maximum_red()};
		}
	}

	.charachterCard__text {
		position: relative;
		height: 145px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-inline: 1rem;
		padding-block: 0.1em 1em;
		text-transform: uppercase;

		&::before {
			content: "";
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
			background-color: ${colors.maximum_red()};
			transform: scale(1, 0);
			transform-origin: top;
			transition: transform 0.2s;
		}

		.charachterCard__text-header {
			position: relative;
			text-align: center;
			font-size: 0.9rem;
			padding-top: 0.5em;
			line-height: 1.25em;
		}

		.charachterCard__text-footer {
			position: relative;
			p {
				font-size: 0.8rem;
				color: ${colors.taupe_gray()};
			}
		}
	}
`;

export default CharachterCard;
