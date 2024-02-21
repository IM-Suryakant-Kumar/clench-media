import styled from "styled-components";

export const EmptyCont = styled.div`
	width: 100%;
	height: calc(100vh - 4rem);
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
export const EmptyWrapper = styled.div`
	& > *:last-child {
		display: inline-block;
		background-color: var(--play-btn-bg);
		color: var(--primary-bg);
		margin-top: 1em;
		padding: 0.625em 1.5em;
		font-size: medium;
		border-radius: 0.3125em;
	}
`;
export const EmptyTitle = styled.p`
	color: var(--grey-cl);
	font-size: large;
`;
