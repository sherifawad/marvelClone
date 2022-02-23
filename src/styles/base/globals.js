import { css } from "@linaria/core";
import { reset } from "./reset";

export const globals = css`
	:global() {
		${reset}
		html {
			box-sizing: border-box;
			height: 100%;
			width: 100%;
		}

		body {
			width: 100%;
			height: 100%;
			font-family: "Noto Naskh Arabic", serif;
			color: white;
			background-color: cyan;
			overflow-x: hidden;
			scroll-behavior: smooth;
		}

		.header__Icons > * {
			color: red;
			font-size: 2rem;
			padding-inline-end: 15px;
		}

		img {
			max-width: 100%;
		}

		a {
			text-decoration: none;
			display: block;
			color: inherit;
		}

		ul,
		ol,
		li {
			list-style: none;
		}

		.visually-hidden {
			border: 0;
			clip: rect(0 0 0 0);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute;
			width: 1px;
		}

		*,
		*:before,
		*:after {
			box-sizing: inherit;
			padding: 0px;
			margin: 0px;
		}

		@font-face {
			font-family: "Noto Naskh Arabic", serif;
			src: url("https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500&display=swap");
			/* src: url(../assets/fonts/MaterialIcons.ttf) format("truetype"); */
		}
	}
`;
