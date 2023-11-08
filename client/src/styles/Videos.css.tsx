import styled from "styled-components";
import { media } from "./Responsive.css";

export const Container = styled.div`
	background-color: var(--primary-bg);
	padding: 0.2em 0.2em 6em 0.2em;

	${media.lg`
        padding-bottom: 1em;
    `}
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1em;
	& > * {
		flex: 1 1 300px;
	}
`;

export const CatCont = styled.div`
	padding: 1em 0;
	& > a {
		display: inline-block;
		background-color: var(--white-cl);
		color: #333;
		padding: 0.3125em 2em;
		margin: 0.3125em;
		border-radius: 0.3125em;
        box-shadow: -0.1em 0.1em 0.3125em 0.1em #3333335c;
	}
	& > a.active,
	& > a:hover {
		background-color: #333;
		color: var(--primary-bg);
	}
`;
