import { MdPlaylistPlay } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div`
	position: relative;
`;

export const CardMedia = styled.img`
	border-radius: 0.3125em;
	object-fit: cover;
	width: 100%;
	height: 100%;
`;

export const Wrapper = styled.div`
	background-color: #0000006f;
	color: #ffffff;
	position: absolute;
	left: 50%;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
    &:last-child {
        font-size: 1.5rem;
    }
`;

export const PlaylistIcon = styled(MdPlaylistPlay)``;
