import { styled } from "@linaria/react";
import React from "react";
import colors from "../styles/constants/colors";
import CharachterCard from "./CharachterCard";

const CharachtersSubMenu = () => (
	<Wrapper>
		<ul>
			<li>
				<a href="http">All Characters</a>
			</li>
			<li>
				<a href="http">Terms & Groups</a>
			</li>
			<li>
				<a href="http">Explore All</a>
			</li>
		</ul>
		<h1>Trending in the universe</h1>
		<div>
			<CharachterCard
				className="card"
				title="Friendly Neighborhood Spider-Man"
				decs="Peter Parker"
				photo="spidey02_ons_crd_01.jpg"
			/>
			<CharachterCard className="card" title="Green Goblin" decs="Norman Osborn" photo="104gno_ons_crd_01.jpg" />
			<CharachterCard
				className="card"
				title="The Amazing Spider-Man"
				decs="Peter Parker"
				photo="spidey03_ons_crd_01.jpg"
			/>
			<CharachterCard className="card" title="Daredevil" decs="Matt Murdock" photo="026ddm_com_crd_01.jpg" />
			<CharachterCard className="card" title="Spider-Man" decs="Peter Parker" photo="005smp_ons_crd_02.jpg" />
			<CharachterCard className="card" title="Doc Ock" decs="Dr. Otto Octavius" photo="226ock_ons_crd_01.jpg" />
		</div>
	</Wrapper>
);

const Wrapper = styled.div`
	background-color: ${colors.white()};
	/* display: grid;
	grid-template-rows: auto-fit; */
	padding-inline: 5rem;
	color: ${colors.black()};

	ul {
		/* grid-row: 1; */
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin-inline: auto;
		padding-block: 1.25em;

		li {
			padding-inline: 1em;
			font-weight: bold;
			text-transform: uppercase;
			color: ${colors.black()} !important;

			a {
				&::after {
					visibility: hidden !important;
					opacity: 0 !important;
				}
				&:hover {
					color: ${colors.maximum_red()};
				}
			}
		}
	}

	h1 {
		/* grid-row: 2; */
		text-align: center;
		font-weight: bolder;
		font-size: 2.5em;
		text-transform: uppercase;
	}

	div {
		/* grid-row: 3; */
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
		column-gap: 20px;
		color: ${colors.white()};
	}
`;

export default CharachtersSubMenu;
