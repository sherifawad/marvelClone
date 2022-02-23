import React from "react";
import { styled } from "@linaria/react";
import { mediaMax } from "../styles/utils/media";
import colors from "../styles/constants/colors";
import { useStateValue } from "../js/StateProvider";
import { LOGOUT, SET_USER } from "../js/reducer";

export const Loading = () => {
	const [{ user }, dispatch] = useStateValue();
	const loginToApp = () => {
		dispatch({
			type: SET_USER,
			payload: "Sherif"
		});
	};
	const logOut = () => {
		dispatch({
			type: LOGOUT
		});
	};
	return (
		<>
			<h3>{user ? `Hello ${user}` : "No user is logged in"}</h3>
			<div style={{zIndex: 10000}}>
				{!user && <button onClick={loginToApp}>Log In</button>}
				{user && <button onClick={logOut}>Log Out</button>}
			</div>
            
			{/* <Page>Loading...</Page> */}
		</>
	);
};

const Page = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	color: green;
	${mediaMax.small} {
		color: ${colors.maximum_red(0.5)};
	}
`;
