/*
 *How to use
 *colors.maximum_red(.5)
 */

const colors = {
	black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // #000000

	raisin_black: (opacity = 1) => `rgba(38, 38, 38, ${opacity})`, // #262626

	jet: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`, // #333333

	maximum_red: (opacity = 1) => `rgba(222, 28, 40, ${opacity})`, // #DE1C28

	harlequin_green: (opacity = 1) => `rgba(110, 206, 26, ${opacity})`, // #6ECE1A

	blue_jeans: (opacity = 1) => `rgba(82, 175, 241, ${opacity})`, // #52AFF1

	spanish_gray: (opacity = 1) => `rgba(153, 153, 153, ${opacity})`, // #999999

	taupe_gray: (opacity = 1) => `rgba(135, 135, 135, ${opacity})`, // #878787

	gainsboro: (opacity = 1) => `rgba(222, 222, 222, ${opacity})`, // #DEDEDE

	platinum: (opacity = 1) => `rgba(228, 228, 228, ${opacity})`, // #E4E4E4

	light_platinum: (opacity = 1) => `rgba(231, 231, 231, ${opacity})`, // #E7E7E7

	white_smoke: (opacity = 1) => `rgba(244, 244, 244, ${opacity})`, // #F4F4F4

	snow: (opacity = 1) => `rgba(249, 249, 249, ${opacity})`, // #F9F9F9

	white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // #FFFFFF
	liteBlack: (opacity = 1) => `rgba(32, 32, 32, ${opacity})`, // #202020
	dark: (opacity = 1) => `rgba(21, 21, 21, ${opacity})`, // #151515

	primaryColor: (opacity = 1) => `rgba(55, 57, 149, ${opacity})`, // #373995
	secondaryColor: (opacity = 1) => `rgba(254, 242, 0, ${opacity})`, // #fef200
	grayColor: (opacity = 1) => `rgba(212, 212, 212), ${opacity})` // #d4d4d4
};

export default colors;
