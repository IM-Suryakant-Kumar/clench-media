import { media } from "..";
import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
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
