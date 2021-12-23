// export const breakPoints = {
// 	tablet: "(min-width: 769px) and (max-width: 1199px)",
// 	mobile: "(min-width: 376px) and (max-width: 768px)",
// 	phone: "(max-width: 375px)"
// };
import { BREAKPOINTS } from "../constants/breakpoints";

/**
 * Use breakpoints in your styled
 * 	${media.small} {
 *        color: red;
 * 	}
 */

export const mediaMin = Object.keys(BREAKPOINTS).reduce((acc, item) => {
	acc[item] = `@media screen and (min-width: ${BREAKPOINTS[item]})`;
	return acc;
}, {});

export const mediaMax = Object.keys(BREAKPOINTS).reduce((acc, item) => {
	acc[item] = `@media screen and (max-width: ${BREAKPOINTS[item]})`;
	return acc;
}, {});
