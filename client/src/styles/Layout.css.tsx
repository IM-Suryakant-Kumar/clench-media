import styled from "styled-components";
import { media } from "./Responsive.css";

export const Container = styled.div`
	background-color: var(--primary-color);
	/* height: 100vh; */
	position: relative;
`;

export const Main = styled.main`
	height: 100%;
	position: relative;
    padding-top: 4em;

	${media.lg`    
        &:nth-child(2) {
            padding: 4em 0 0 9em;
        }
    `}
`;
