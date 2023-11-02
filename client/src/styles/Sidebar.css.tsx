import { styled } from "styled-components";

export const Container = styled.aside`
	background-color: var(--white-cl);
    color: var(--side-icon-cl);
	width: 9.5rem;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	padding-top: 4em;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
    & > * {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Text = styled.p`
    font-size: 0.875rem;
    margin-top: 0.625em;
`
