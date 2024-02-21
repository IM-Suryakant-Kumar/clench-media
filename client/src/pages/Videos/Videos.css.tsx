import styled from "styled-components";
import { media } from "../../components";

export const Container = styled.div`
	padding: 0.2em 0.625em 6em 0.625em;

	${media.lg`
        padding-bottom: 1em;
    `}
`;

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
	gap: 1em;
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
