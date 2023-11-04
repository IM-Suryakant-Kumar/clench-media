import styled from "styled-components";
import { media } from "./Responsive.css";

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
		right: 38%;
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
`

export const Text = styled.span`
    display: inline-block;
    font-size: small;
    padding-left: 1em;
    padding-top: 0.5em;
`
export const Desc = styled.p`
    display: none;
    padding-top: 1em;
    padding-left: 0.2em;
    font-size: medium;
    color: var(--grey-cl);
    @media (min-width: 800px) {
        display: block;
    }
`

export const RelatedVideoCont = styled.div`
	width: 100%;
	margin-top: 14em;
    padding-bottom: 5em;

	@media (min-width: 350px) and (max-width: 500px) {
		margin-top: 19em;
	}
	@media (min-width: 501px) and (max-width: 767px) {
		margin-top: 21em;
	}
	${media.lg`
        margin-top: 23em;
        padding-bottom: 0;
    `}
	@media (min-width: 800px) {
		width: calc(38% + 3em);
		position: absolute;
		right: 0;
		top: -23em;
		bottom: 0;
	}
`;
