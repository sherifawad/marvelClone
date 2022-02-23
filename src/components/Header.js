import React from "react";
// import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
// import { ImYoutube2 } from "react-icons/im";
import { styled } from "@linaria/react";
import SiteLogo from "../images/marvelLogo.svg";
import Avatar from "../images/avatar.svg";
import SubscribeImage from "../images/icon-mu-shield.png";
// import flexify from "../styles/utils/flexify";
import colors from "../styles/constants/colors";
import PhotosSubMenu from "./PhotosSubMenu";
import { useStateValue } from "../js/StateProvider";

const Header = () => {
	const [{ videos, charachter, comics, movies, tv, games, news }, dispatch] =
		useStateValue();

	return (
		<SiteHeader>
			<UpperHeader>
				<User>
					<div>{/* <img src={Avatar} alt="user avatar" /> */}</div>
					<a href="http">sign In</a>
					<span>|</span>
					<a href="http">join</a>
				</User>
				<Logo src={SiteLogo}></Logo>
				<Subscribe>
					<img src={SubscribeImage} alt="subscribe logo" />
					<div>
						<p>Marvel Unlimited</p>
						<span>Subscribe</span>
					</div>
				</Subscribe>
				<div className="searchWrapper">
					<AiOutlineSearch className="searchIcon" />
				</div>
			</UpperHeader>

			<LowerHeader>
				<ul className="MainMenu-List">
					<li className="MainMenu-List__item">
						<a className="MainMenu-link" href="http">
							VIDEOS
						</a>
						<SubMenu>
							<PhotosSubMenu
								title={videos.title}
								headerList={videos.headerList}
								cardList={videos.cardList}
								footerTitle={videos.footerTitle}
								footerList={videos.footerList}
								videos={true}
								reverse={true}
							/>
						</SubMenu>
					</li>
					<li className="MainMenu-List__item">
						<a className="MainMenu-link" href="http">
							Characters
						</a>
						<SubMenu>
							<PhotosSubMenu
								title={charachter.title}
								headerList={charachter.headerList}
								cardList={charachter.cardList}
								footerTitle={charachter.footerTitle}
								footerList={charachter.footerList}
								photoCard={false}
							/>
						</SubMenu>
					</li>
					<li className="MainMenu-List__item">
						<a className="MainMenu-link" href="http">
							Comics
						</a>
						<SubMenu>
							<PhotosSubMenu
								title={comics.title}
								headerList={comics.headerList}
								cardList={comics.cardList}
								footerTitle={comics.footerTitle}
								footerList={comics.footerList}
							/>
						</SubMenu>
					</li>
					<li className="MainMenu-List__item">
						<a className="MainMenu-link" href="http">
							Movies
						</a>
						<SubMenu>
							<PhotosSubMenu
								title={movies.title}
								headerList={movies.headerList}
								cardList={movies.cardList}
								footerTitle={movies.footerTitle}
								footerList={movies.footerList}
							/>
						</SubMenu>
					</li>
					<li className="MainMenu-List__item">
						<a className="MainMenu-link" href="http">
							TV Showes
						</a>
						<SubMenu>
							<PhotosSubMenu
								title={tv.title}
								headerList={tv.headerList}
								cardList={tv.cardList}
								footerTitle={tv.footerTitle}
								footerList={tv.footerList}
							/>
						</SubMenu>
					</li>
					<li className="MainMenu-List__item">
						<a className="MainMenu-link" href="http">
							Games
						</a>
						<SubMenu>
							<PhotosSubMenu
								title={games.title}
								headerList={games.headerList}
								cardList={games.cardList}
								footerTitle={games.footerTitle}
								footerList={games.footerList}
							/>
						</SubMenu>
					</li>
					<li className="MainMenu-List__item">
						<a className="MainMenu-link" href="http">
							News
						</a>
						<SubMenu>
							<PhotosSubMenu
								title={news.title}
								headerList={news.headerList}
								cardList={news.cardList}
								footerTitle={news.footerTitle}
								footerList={news.footerList}
								reverse={true}
							/>
						</SubMenu>
					</li>
					<li className="MainMenu-List__item">
						<a className="MainMenu-link" href="http">
							More
						</a>
					</li>
				</ul>
			</LowerHeader>
		</SiteHeader>
	);
};

const SiteHeader = styled.header`
	background-color: ${colors.dark()};
	display: grid;
	position: relative;
	.card {
		position: absolute;
		z-index: -1;
		left: 0;
		display: grid;
		width: 100%;
		background-color: #fff;
		grid-template-columns: 100%;
		grid-template-rows: 100%;
		top: 100%;
		margin-inline: 20px;
	}
`;

const SubMenu = styled.div`
	z-index: 10;
	position: absolute;
	left: 0;
	width: 100vw;
	visibility: hidden;
	opacity: 0;
	transition: all 150ms ease-in;
`;

const UpperHeader = styled.div`
	grid-row: 1;
	display: flex;
	/* align-items: center; */
	align-content: space-between;
	justify-content: center;
	border-bottom: 1px solid ${colors.white(0.5)};
	height: 3rem;
	padding-inline: 2rem;

	.searchWrapper {
		border-right: 1px solid ${colors.white(0.5)};
		display: flex;
		align-items: center;
		.searchIcon {
			width: 1em;
			height: 1em;
			margin: 20px;
			font-weight: bold;
			font-size: 1.15rem;
		}
	}
`;
const LowerHeader = styled.nav`
	grid-row: 2;
	.MainMenu-List {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin-inline: auto;

		.MainMenu-List__item {
			font-weight: bold;
			padding-inline: 1em;
			font-size: 0.8rem;

			&:last-child {
				color: ${colors.taupe_gray()};
			}
			&:hover {
				${SubMenu} {
					visibility: visible;
					opacity: 1;
				}
			}

			.MainMenu-link {
				position: relative;
				padding-block: 1em;
				white-space: nowrap;

				&::after {
					content: "";
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					height: 0.175rem;
					background-color: red;
					transform: scale(0, 1);
					transform-origin: left bottom;
					transition: 100ms ease-in;
				}

				&:hover:after {
					transform: scale(1, 1);
				}
			}
		}
	}
`;
const Logo = styled.img`
	margin-inline: auto;
	/* width: 130px; */
	/* transition: width 0.15s 0.5s; */
`;
const User = styled.div`
	display: flex;
	border-left: 1px solid ${colors.white(0.5)};
	border-right: 1px solid ${colors.white(0.5)};
	align-items: center;
	padding-inline: 1rem;

	div {
		margin-inline: 5px;
		/* background-color: ${colors.white()}; */
		width: 1.25rem;
		aspect-ratio: 1 / 1;
		border-radius: 50%;
		background-image: url(${Avatar});
	}

	span {
		margin-inline: 5px;
		font-weight: bold;
		font-size: 1.15rem;
	}
`;
const Subscribe = styled.div`
	border-left: 1px solid ${colors.white(0.5)};
	border-right: 1px solid ${colors.white(0.5)};
	display: flex;
	align-items: center;
	justify-content: center;
	padding-inline: 5px;
	img {
		width: 1.15em;
		aspect-ratio: 1 / 1.5;
		margin-inline: 5px;
	}
	div {
		display: grid;
		font-size: 0.85rem;
		span {
			display: block;
			margin-inline: auto;
		}
	}
`;

// const Social = styled.div`
// 	display: flex;
// 	align-items: space-between;
// `;
// const MenuBar = styled.div``;

// const Icons = styled.div`
// 	display: flex;
// 	align-items: center;
// 	align-content: space-between;
// 	flex: 1;
// `;

// const Link = styled.a`
// 	color: ${colors.grayColor()};
// `;

export default Header;
