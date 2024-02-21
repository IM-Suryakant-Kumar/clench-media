import { styled } from "styled-components";
import { media } from "..";

export const Header = styled.header`
	background-color: var(--white-cl);
	width: 100%;
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.625em;
	padding: 0 0.25em;
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 3;
	${media.lg`
        padding: 1em;
    `}
`;

export const Left = styled.div`
	display: flex;
	align-items: center;
`;

export const Logo = styled.img`
	margin-right: 0.3125em;
	width: 30px;
	height: 30px;

	@media (min-width: 400px) {
		width: 35px;
		height: 35px;
	}
`;

export const LogoText = styled.h1`
	color: var(--primary-color);
	font-size: 0.875rem;
	font-weight: 600;

	@media (min-width: 400px) and (max-width: 500px) {
		font-size: medium;
	}
	@media (min-width: 501px) {
		font-size: large;
	}
`;

export const Right = styled.div`
	display: flex;
	align-items: center;
	& > :last-child {
		color: var(--primary-color);
		margin-left: 0.3125em;
		cursor: pointer;
	}
`;

export const SearchForm = styled.form`
	width: 7.5rem;
	height: 2rem;
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

	@media (min-width: 400px) {
		width: 100%;
		width: 13.5rem;
	}
`;

export const Input = styled.input`
	width: calc(100% - 2rem);
	font-size: 0.875rem;
	padding-left: 0.3125em;
	color: inherit;
`;

export const Button = styled.button`
	height: 100%;
	width: 2rem;
	color: var(--icon-color);
	&:hover {
		background-color: var(--hover-icon-bg);
		color: var(--search-bg);
	}
`;

export const LogCont = styled.span``;
