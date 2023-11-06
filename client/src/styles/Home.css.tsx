import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	& > * {
		padding: 1em;
	}
`;

export const InfoCont = styled.div`
	height: 11rem;
	background-color: var(--btn-bg);
	background-image: url("/banner.svg");
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	color: #06c4fe;
	display: flex;
	justify-content: center;
	align-items: flex-end;

    @media (min-width: 500px) {
        height: 16rem;
    }
    @media (min-width: 900px) {
        height: 20rem;
    }
`;

export const Title = styled.h1`
	text-align: center;
	font-size: large;
	font-family: Cinzel;
`;

export const CardCont = styled.div`
	padding-bottom: 5.5em;

    @media (min-width: 900px) {
        display: flex;
        justify-content: space-evenly;
        gap: 1em;
        margin-top: 3em;
        padding: 0 2em;
    }
    @media (min-width: 1240px) {
        margin-top: 2em;
        gap: 2em;
    }
`;

export const Card = styled.div`
	margin: 1em 0;
	border-radius: 0.3125em;
	border: 0.3215em solid #2a8eb5;
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
		background-color: var(--btn-bg);
		color: var(--btn-cl);
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
