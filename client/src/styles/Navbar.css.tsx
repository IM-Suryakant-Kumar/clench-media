import { styled } from "styled-components";
import { media } from "./Responsive.css";

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

export const Right = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchForm = styled.form`
	width: 220px;
	height: 35px;
	background-color: var(--search-bg);
	color: var(--grey-cl);
	border-radius: 0.25em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	& > * {
		border: none;
		outline: none;
		background-color: var(--search-bg);
	}
`;

export const Input = styled.input`
	color: var(--input-cl);
	font-size: 0.875rem;
    font-size: medium;
    padding-left: 0.625em;
    color: inherit;
`;

export const Button = styled.button`
	height: 100%;
    width: 35px;
	color: var(--icon-color);
	&:hover {
		background-color: var(--hover-icon-bg);
		color: var(--search-bg);
	}
`;

export const LogCont = styled.span``;
