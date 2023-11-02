import { styled } from "styled-components";

export const Container = styled.div`
	height: 100vh;
	position: relative;
`;

export const Main = styled.main`
	background-color: var(--primary-bg);
	display: flex;
	justify-content: space-between;
	height: 100%;
	position: relative;
    &:nth-child(2) {
        padding: 4em 0 0 9.5em;
    }
`;
