import styled from "styled-components";

export const Container = styled.div`
	height: calc(100vh - 4em);
	display: flex;
	justify-content: center;
	align-items: center;
	& > .login-form {
		background-color: var(--secondary-cl);
		width: 100%;
		height: 100%;
		margin-bottom: 10em;
        padding: 1em 0;
		border-radius: 0.3125em;
		max-width: 280px;
		max-height: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.875em;
        & > button {
            cursor: pointer;
        }
	}
`;

export const Title = styled.h2`
	text-align: center;
	color: var(--form-head-cl);
	font-size: large;
	margin-bottom: 1.5em;
`;

export const Message = styled.p`
    font-size: small;
    color: red;
`;

export const Input = styled.input`
	color: var(--input-cl);
	width: 250px;
	height: 30px;
	border: none;
	outline: none;
	border-radius: 0.3125em;
	border-bottom: 2px solid var(--primary-color);
	padding-left: 1em;
`;
export const Button = styled.button`
	margin-top: 1em;
	width: 250px;
	height: 28px;
	border: none;
	border-radius: 0.3125em;
	background-color: var(--login-bg);
	color: var(--white-cl);
`;

export const GuestButton = styled.button`
	margin-top: -0.5em;
	width: 250px;
	height: 28px;
	border: none;
	border-radius: 0.3125em;
	background-color: var(--guest-bg);
	color: var(--white-cl);
`;

export const SubTitle = styled.p`
    color: var(--grey-cl);
    font-size: 0.875rem;
    text-align: left;
    & > * {
        color: var(--link-cl);
    }
`