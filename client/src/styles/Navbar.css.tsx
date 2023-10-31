import { styled } from "styled-components";
import { media } from "./responsive.css";

export const Header = styled.header`
	height: 4rem;
	display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.25em;

	/* ${media.lg`
        position: fixed;
        width: 100%;
        z-index: 3;
    `} */
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    margin-right: 0.625em;
`;

export const LogoText = styled.h1`
    color: var(--primary-color);
    font-size: 1.25rem;
    font-weight: 600;
`;


export const Right = styled.div``;

export const SearchForm = styled.form``;
