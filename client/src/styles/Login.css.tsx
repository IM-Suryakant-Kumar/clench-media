import { Form } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Wrapper = styled.div`
	width: 280px;
	height: 150px;
`;

export const SForm = styled(Form)`
	background-color: var(--secondary-cl);
	width: 100%;
	height: 100%;
    margin-bottom: 10em;
	border-radius: 0.3125em;
	max-width: 280px;
	max-height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1em;
`;

export const Title = styled.h2`
	text-align: center;
	margin-bottom: 1em;
	color: var(--form-head-cl);
	font-size: large;
	margin-bottom: 2em;
`;

export const Message = styled.p``;

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
