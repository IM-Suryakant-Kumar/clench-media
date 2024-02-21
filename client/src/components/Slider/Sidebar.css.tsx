import { styled } from "styled-components";
import { media } from "..";

export const Container = styled.aside`
	background-color: var(--white-cl);
	color: var(--grey-cl);
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 1em 0;
	& > a.active,
	& > a:hover {
		color: var(--active-cl);
	}
	& > * {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	${media.lg`
        width: 9rem;
        top: 2em;
        left: 0;
        flex-direction: column;
    `}
`;

export const Text = styled.p`
	font-size: 0.6rem;
	margin-top: 0.75em;

	@media (min-width: 400px) {
		font-size: 0.875rem;
	}
`;
