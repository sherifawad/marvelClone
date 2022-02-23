import { styled } from "@linaria/react";
import React from "react";
import colors from "../styles/constants/colors";
import CustomLinkBtn from "./CustomLinkBtn";
import SlideData from "./SlideData";

const Hero = ({
	backgroundImage = "newtomu_base_set_dsk_relaunch.jpg",
	logoText = "Available Now",
	logo = "mu_lob_log_eye_01.png",
	title = "New on Marvel Unlimited",
	desc = "Read these plus 29,000+ digital comics for $9.99 a month!",
	darken = false,
	btns = []
}) => (
	<Wrapper darken={darken}>
		<div className="hero__content">
			<div className="hero__Image">
				<img src={require(`../images/${backgroundImage}`)} alt="" />
			</div>
			<div className="hero__text">
				<SlideData
					logo={logo}
					logoText={logoText}
					title={title}
					desc={desc}
				/>

				<div className="hero__btns">
					{btns.map((btn, index) => (
						<CustomLinkBtn
							key={index}
							text={btn.text}
							textColor={btn.textColor}
							btnBackColor={btn.btnBackColor}
							btnBorderColor={btn.btnBorderColor}
							light={btn.light}
						/>
					))}
				</div>
			</div>
		</div>
	</Wrapper>
);

const Wrapper = styled.div`
	--hero-height: 560px;
	width: 100%;
	height: var(--hero-height);
	background-color: ${colors.black()};

	.hero__content {
		display: flex;
		flex-direction: row-reverse;

		height: 100%;
		.hero__Image {
			width: 55%;
			height: 100%;
			position: relative;
			img {
				height: 100%;
				width: 100%;
				object-fit: cover;
			}

			&::before {
				content: "";
				position: absolute;
				inset: 0;
				right: 95%;
				border-top: var(--hero-height) solid transparent;
				border-left: 160px solid ${colors.black()};
			}
		}

		.hero__text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding-left: 2rem;

			.hero__btns {
				display: flex;
				align-items: center;
				margin-block: 2em;
			}
		}
	}
`;

export default Hero;
