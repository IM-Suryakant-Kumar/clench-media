import styled from "styled-components";
import { media } from "./Responsive.css";

export const Container = styled.div`
	background-color: var(--primary-bg);
	height: 100vh;
	position: relative;
`;

export const Main = styled.main`
	height: 100%;
	position: relative;

	${media.lg`    
        &:nth-child(2) {
            padding: 4em 0 0 9em;
        }
    `}
`;
