import { styled } from "styled-components";

export const Container = styled.div`
	height: 100vh;
    position: relative;
`;

export const Main = styled.main`
	display: flex;
	justify-content: space-between;
	height: 100%;
	& > *:first-child {
		flex: 1;
	}
	& > *:last-child {
		flex: 6;
	}
`;
