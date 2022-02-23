import React, { forwardRef } from "react";
import { styled } from "@linaria/react";
import colors from "../styles/constants/colors";
import { BiPlay } from "react-icons/bi";
const PhotoCard = forwardRef(
	(
		{
			title = "",
			decs = "",
			photo = "",
			link = "http",
			reverse = false,
			video = false
		},
		ref
	) => (
		<Conrainer className="photoCard" reverse={reverse} ref={ref}>
			<a className="photoCard__link" href={link}>
				<div className="photoCard__photoWrapper">
					<img
						className="photoCard__photo"
						src={require(`../images/${photo}`)}
						alt="Spider man Hero"
					/>
					{video && (
						<span className="videoIcon">
							<BiPlay />
						</span>
					)}
				</div>
				<div className="photoCard__text">
					<div className="photoCard__text-header">
						<p>{title}</p>
					</div>
					<div className="photoCard__text-footer">
						<p>{decs}</p>
					</div>
				</div>
			</a>
		</Conrainer>
	)
);

const Conrainer = styled.div`
	overflow: hidden;
	color: ${colors.black()};

	.photoCard__link {
		&:hover {
			.photoCard__text-header {
				p {
					color: ${({ reverse }) =>
						!reverse && `${colors.maximum_red()}`};
				}
			}

			.photoCard__photo {
				transform: ${({ reverse }) =>
					!reverse && `translate3d(0, -5%, 0)`};
			}
		}

		.photoCard__photoWrapper {
			position: relative;
			&:hover .videoIcon {
				opacity: 1;
			}

			.photoCard__photo {
				box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
					0 6px 20px 0 rgba(0, 0, 0, 0.19);
			}
			.videoIcon {
				position: absolute;
				width: 30px;
				height: 30px;
				left: calc(50% - 15px);
				top: calc(50% - 15px);
				background-color: #fff;
				color: #fff;
				opacity: 0.7;
				box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
					0 6px 20px 0 rgba(0, 0, 0, 0.19);

				svg {
					color: red;
					font-size: 2rem;
				}
			}
		}

		.photoCard__text {
			width: 100%;
			padding-top: 1.5em;
			display: flex;
			flex-direction: ${props =>
				props.reverse ? "column-reverse" : "column"};
			.photoCard__text-header {
				text-transform: uppercase;
				padding-bottom: 0.5em;
				width: 100%;
				&:hover {
					color: ${colors.maximum_red()};
				}
				P {
					font-weight: bold;
				}
			}

			.photoCard__text-footer {
				text-transform: uppercase;
				width: 100%;
				padding-bottom: 0.5em;

				p {
					font-size: 0.8rem;
					color: ${colors.taupe_gray()};
				}
			}
		}
	}
`;

PhotoCard.displayName = "PhotoCardHello";
export default PhotoCard;
