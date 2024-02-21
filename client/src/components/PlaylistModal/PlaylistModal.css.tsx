import { MdClose } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div<{ $toggle: string }>`
	height: 100vh;
	width: 100vw;
	background-color: #0000009e;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 4;
	display: ${(props) => (props.$toggle === "true" ? "flex" : "none")};
	justify-content: center;
	align-items: center;
`;

export const Modal = styled.div`
	background-color: white;
	box-shadow: -0.3125em 0.3125em 0.3125em 0.01em #0000007f;
	width: 18.125rem;
	/* height: 9rem; */
	position: relative;
    @media (min-width: 425px) {
        width: 22rem;
    }
`;

export const CloseBtn = styled(MdClose)`
	cursor: pointer;
	color: red;
	position: absolute;
	top: 0;
	right: 0;

	&:hover {
		background-color: red;
		color: var(--white-cl);
	}
`;

export const Form = styled.form`
	text-align: right;
	padding: 2.5em 2em;
`;

export const Input = styled.input`
	width: 100%;
	display: inline-block;
	padding: 0.6125em 0 0.6125em 0.3125em;
	border: none;
	outline: none;
	border-bottom: 1px solid var(--grey-cl);
	color: var(--grey-cl);
`;

export const ModalButton = styled.button`
	display: inline-block;
	outline: none;
	border: none;
	color: var(--grey-cl);
	margin-top: 1em;
	&:nth-child(3) {
		margin-left: 2em;
	}
`;

export const ListCont = styled.ul`
	padding: 0;
	margin-top: 1.5em;
`;

export const ListItem = styled.li`
	list-style: none;
    margin-top: 0.625em;
`;

export const Label = styled.label`
	text-align: left;
	display: block;
    font-size: small;
`;

export const CheckBox = styled.input.attrs(() => ({
	type: "checkbox",
}))``;
