import styled from "styled-components";
import {
	MdOutlineLibraryAdd,
	MdOutlineLibraryAddCheck,
	MdPlaylistAdd,
	MdThumbDownAlt,
	MdThumbUpAlt,
} from "react-icons/md";
import { media } from "../../components";

export const Container = styled.div`
	position: relative;
`;

export const VideoCont = styled.div`
	background-color: #ffffff;
	position: fixed;
	left: 0;
	right: 0;
	top: 4em;
	z-index: 1;
	& > *:nth-child(3) {
		padding-left: 0;
	}

	${media.lg`
        left: 9em;
        top: 4em;
    `}
	@media (min-width: 800px) {
		right: 34%;
	}
	@media (min-width: 1100px) {
		bottom: 25%;
	}
`;

export const VideoPlayer = styled.iframe`
	width: 100%;

	@media (min-width: 350px) and (max-width: 500px) {
		height: 15rem;
	}
	@media (min-width: 501px) and (max-width: 768px) {
		height: 18rem;
	}
	${media.lg`
        height: 20rem;
    `}
	@media (min-width: 1100px) {
		height: 100%;
	}
`;

export const Title = styled.p`
	font-size: medium;
`;

export const Text = styled.span`
	display: inline-block;
	font-size: small;
	padding-left: 1em;
	padding-top: 0.5em;
`;
export const Desc = styled.p`
	display: none;
	padding-top: 1em;
	padding-left: 0.2em;
	font-size: medium;
	color: var(--grey-cl);
	@media (min-width: 800px) {
		display: block;
	}
`;

export const ActionBtnCont = styled.div`
	padding: 1em 0;
	position: relative;
	& > * {
		color: #716c6c;
		cursor: pointer;
		margin-right: 1em;
		position: absolute;
		top: 0.6125em;
	}
`;

export const Like = styled(MdThumbUpAlt)`
	left: 0.3125em;
`;
export const Dislike = styled(MdThumbDownAlt)`
	left: 2.5em;
`;

export const AddToWatch = styled(MdOutlineLibraryAdd)`
	right: 2.5em;
`;
export const RemoveFromWatch = styled(MdOutlineLibraryAddCheck)`
	right: 2.5em;
`;

export const AddToList = styled(MdPlaylistAdd)`
	right: 0.25em;
`;

export const RelatedVideoCont = styled.div`
	width: 100%;
	padding-top: 16em;
	padding-bottom: 5em;

	@media (min-width: 350px) and (max-width: 500px) {
		padding-top: 21.5em;
	}
	@media (min-width: 500px) and (max-width: 768px) {
		padding-top: 23.5em;
	}
	${media.lg`
        padding-top: 25.5em;
        padding-bottom: 0;
    `}
	@media (min-width: 800px) {
		width: 34%;
		padding-right: 1.5em;
		position: absolute;
		right: 0;
		top: -25.25em;
		bottom: 0;
	}
`;
