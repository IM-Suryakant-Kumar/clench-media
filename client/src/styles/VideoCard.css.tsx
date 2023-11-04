import { MdPlayArrow } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div`
	/* padding: ; */
`;

export const CardCont = styled.div`
	height: 80%;
	position: relative;
`;

export const CardMedia = styled.img`
	border-radius: 0.3125em;
	object-fit: cover;
	width: 100%;
	height: 100%;
`;

export const Duration = styled.span`
	position: absolute;
	bottom: 0.5em;
	right: 0.5em;
	background-color: var(--duration-bg);
	color: var(--white-cl);
	padding: 0.3125em 0.875em;
	border-radius: 0.3125em;
    `;

export const PlayButton = styled(MdPlayArrow)`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	background-color: var(--play-btn-bg);
	color: var(--white-cl);
    width: 4rem;
    height: 2rem;
    border-radius: 0.3125em;
`;

export const InfoCont = styled.div`
	height: 20%;
	padding: 0.25em 0 0.3125em 0.3125em;
	background-color: red;
`;

export const Title = styled.p`
	font-size: medium;
`;

export const CreatorName = styled.p`
	font-size: small;
    padding-top: 0.5em;
`;
