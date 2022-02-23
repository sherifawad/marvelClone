import { styled } from "@linaria/react";
import React from "react";
import colors from "../styles/constants/colors";
import PhotoCard from "./PhotoCard";
import CharachterCard from "./CharachterCard";

const PhotosSubMenu = ({
	headerList = [],
	title = "",
	cardList = [],
	footerTitle = "",
	footerList = [],
	reverse = false,
	photoCard = true,
	videos = false
}) => (
	<Wrapper className="Comics-Wrapper">
		<div className="comics__header">
			<ul className="header_list">
				{headerList.map((item, index) => (
					<li className="header__listItem" key={index}>
						<a className="listItem__link" href={item.link}>
							{item.name}
						</a>
					</li>
				))}
			</ul>
			<h1 className="Comics__title">{title}</h1>
		</div>
		<div className="Comics__body">
			{cardList.map((card, index) => {
				if (photoCard) {
					return (
						<PhotoCard
							key={index}
							className="card"
							title={card.title}
							decs={card.decs}
							photo={card.photo}
							reverse={reverse}
							video={videos}
						/>
					);
				}
				return (
					<CharachterCard
						key={index}
						className="card"
						title={card.title}
						decs={card.decs}
						photo={card.photo}
					/>
				);
			})}
		</div>
		{footerTitle && (
			<div className="Comics__footer">
				<h3 className="footer__title">{footerTitle}</h3>
				<ul className="footer__list">
					{footerList.map((item, index) => (
						<li key={index} className="footer__listItem">
							<a className="listItem__link" href={item.link}>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		)}
	</Wrapper>
);

const Wrapper = styled.div`
	background-color: ${colors.white()};
	padding-inline: 5rem;
	color: ${colors.black()};
	padding-inline: 15%;
	.comics__header {
		.header_list {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-inline: auto;
			padding-top: 1.25em;

			.header__listItem {
				font-weight: bold;
				text-transform: uppercase;
				color: ${colors.black()};
				padding-left: 1em;

				&:hover {
					color: ${colors.maximum_red()};
				}
			}
		}

		.Comics__title {
			text-align: center;
			font-weight: bolder;
			font-size: 2.5em;
			text-transform: uppercase;
			padding-block: 0.5em;
		}
	}

	.Comics__body {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
		column-gap: 20px;
		color: ${colors.white()};
		padding-bottom: 2em;
	}

	.Comics__footer {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 2em;

		.footer__title {
			color: ${colors.spanish_gray()};
			padding-inline: 1em;
		}

		.footer__list {
			display: flex;
			align-items: center;
			justify-content: center;

			.footer__listItem {
				padding-inline: 1em;
				&:hover {
					color: ${colors.maximum_red()};
				}
			}
		}
	}
`;

export default PhotosSubMenu;
