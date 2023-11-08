import styled from "styled-components";

export const Container = styled.div`
	background-color: var(--primary-color);
	& > * {
		padding: 1em;
	}
`;

export const InfoCont = styled.div`
	height: 11rem;
	color: var(--primary-bg);
	background-image: url("/banner.svg");
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;

	@media (min-width: 500px) {
		height: 16rem;
	}
	@media (min-width: 900px) {
		height: 20rem;
	}
`;

export const Title = styled.h1`
	margin-top: 8.7em;
	text-align: center;
	font-size: large;
	font-family: Cinzel;
	text-shadow: 0.1em 0.1em 0.3125em #333;

	@media (min-width: 400px) {
		margin-top: 7.6em;
		font-size: 1.3rem;
	}
	@media (min-width: 500px) {
		margin-top: 9.8em;
		font-size: x-large;
	}
	@media (min-width: 900px) {
		margin-top: 12.5em;
	}
	@media (min-width: 1240px) {
		margin-top: 9.4em;
		font-size: xx-large;
	}
`;

export const CardCont = styled.div`
	padding-bottom: 5.5em;
	margin-top: 2em;

	@media (min-width: 400px) {
		margin-top: 3em;
	}
	@media (min-width: 900px) {
		display: flex;
		justify-content: space-evenly;
		gap: 1em;
		margin-top: 1em;
		padding: 2.6em 2em;
	}
	@media (min-width: 1240px) {
		margin-top: 2em;
		padding: 1.1em 2em;
		gap: 2em;
	}
`;

export const Card = styled.div`
	background-color: #ffffff;
	margin: 1em 0;
	border-radius: 0.3125em;
	border: 0.3215em solid var(--primary-color);
	box-shadow: -0.1em 0.1em 0.4em #333;
	height: 9rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	&:first-child {
		background-image: url("/js.jpg");
	}
	&:nth-child(2) {
		background-image: url("/ts.jpg");
	}
	&:last-child {
		background-image: url("/react.jpg");
	}
	& > * {
		width: 7.5rem;
		height: 2.3125rem;
		border-radius: 0.3125em;
		background-color: var(--primary-color);
		color: #ffffff;
		box-shadow: -0.1em 0.1em 0.4em #333;
		display: flex;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
		font-size: small;
	}

	@media (min-width: 350px) and (max-width: 500px) {
		height: 11rem;
	}
	@media (min-width: 500px) and (max-width: 900px) {
		height: 15rem;
	}
	@media (min-width: 900px) {
		flex: 1;
		height: 12rem;
	}
	@media (min-width: 1240px) {
		height: 14rem;
	}
`;
