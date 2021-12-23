import { css } from "@linaria/core";

export const general = css`
	:global() {
		html {
			box-sizing: border-box;
			height: 100%;
			width: 100%;
		}

		body {
			width: 100%;
			height: 100%;
		}

		// @font-face {
		// 	font-family: "MaterialIcons";
		// 	src: url(../assets/fonts/MaterialIcons.ttf) format("truetype");
		// }
	}
`;
