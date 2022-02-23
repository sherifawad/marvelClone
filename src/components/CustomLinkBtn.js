import { styled } from "@linaria/react";
import React from "react";

const CustomLinkBtn = ({
	text = "",
	link = "http",
	textColor = "white",
	btnBackColor = "red",
	btnBorderColor = "red",
	light = false
}) => (
	<BtnWrapper
		textColor={textColor}
		btnBackColor={btnBackColor}
		btnBorderColor={btnBorderColor}
		width={16}
	>
		<a
			className={`slide__link-btn ${light && "slide__link-btn--light"}`}
			href={link}
		>
			<span className={`btn__text ${light && "btn__text--light"}`}>
				{text}
			</span>
		</a>
	</BtnWrapper>
);

const BtnWrapper = styled.div`
	--width-var: ${({ width }) => `${width}px`};
	--text-Color: ${({ textColor }) => textColor};
	--btn-BackColor: ${({ btnBackColor }) => btnBackColor};
	--btn-BorderColor: ${({ btnBorderColor }) => btnBorderColor};
	padding-right: 2em;
	.slide__link-btn {
		background-color: transparent;
		border-radius: 0;
		border: none;
		cursor: pointer;
		display: inline-block;
		margin: 15px auto;
		overflow: hidden;
		padding: 0;
		position: relative;
		width: auto;
		z-index: 10;

		&::before {
			content: "";
			border-width: 0 0 var(--width-var) var(--width-var);
			margin-left: var(--width-var);
			top: 0;
			border-style: solid;
			background-color: var(--btn-BackColor);
			border-color: var(--btn-BackColor);
			content: "";
			display: block;
			height: var(--width-var);
		}

		&::after {
			content: "";
			border-width: var(--width-var) var(--width-var) 0 0;
			bottom: 0;
			margin-right: var(--width-var);
			border-style: solid;
			background-color: var(--btn-BackColor);
			border-color: var(--btn-BackColor);
			content: "";
			display: block;
			height: var(--width-var);
		}

		.btn__text {
			display: block;
			padding: 0 35px;
			text-align: center;
			background-color: var(--btn-BackColor);
			color: var(--text-Color);
            font: 800 14px/1 Roboto Bold,Trebuchet MS,Helvetica,Arial,sans-serif;
			&::before {
				content: "";
				position: absolute;
				left: 0;
				top: 0;
				border-top: var(--width-var) solid transparent;
				border-right: var(--width-var) solid var(--btn-BackColor);
			}

			&::after {
				content: "";
				position: absolute;
				bottom: 0;
				right: 0;
				border-bottom: var(--width-var) solid transparent;
				border-left: var(--width-var) solid var(--btn-BackColor);
			}
		}
	}

	.slide__link-btn.slide__link-btn--light::before {
		border-width: 1px 1px 0 0;
		background: none;
	}

	.slide__link-btn.slide__link-btn--light::after {
		border-width: 0 0 1px 1px;
		background: none;
	}
	.btn__text.btn__text--light {
		background-color: transparent;
		border-left: 1px solid var(--btn-BorderColor);
		border-right: 1px solid var(--btn-BorderColor);
		color: var(--text-Color);
		opacity: 1;
		transition: none;
		text-align: center;

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: calc(var(--width-var) / 4);
			border: none;
			border-right: 2px solid var(--btn-BackColor);
			transform: skew(135deg);
			height: ${({ width }) => Math.sqrt(Math.pow(width, 2) * 2)}px;
		}
		&::after {
			content: "";
			position: absolute;
			bottom: 0;
			right: calc(var(--width-var) / 4);
			border: none;
			border-left: 2px solid var(--btn-BackColor);
			transform: skew(135deg);
			height: ${({ width }) => Math.sqrt(Math.pow(width, 2) * 2)}px;
		}
	}
`;
export default CustomLinkBtn;
