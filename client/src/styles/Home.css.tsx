import styled from "styled-components";
import { media } from "./Responsive.css";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1em;
	padding: 1em 1em 5.5em 1em;
	& > * {
		flex: 1 1 300px;
	}

	${media.lg`
        padding-bottom: 1em;
    `}
`;

export const CatCont = styled.div`
	display: flex;
	margin-top: 1em;
	& > * {
		background-color: var(--white-cl);
		margin-left: 1.5em;
		padding: 1em 2em;
		cursor: pointer;
	}
`;

export const FilterTitle = styled.span``;
