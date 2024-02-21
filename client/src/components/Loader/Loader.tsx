import styled from "styled-components";

const Container = styled.div<{ $display: string }>`
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 6;
	background-color: #33333392;
	display: ${(props) => props.$display};
`;

const Wrapper = styled.div`
	width: 10rem;
	height: 10rem;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

type Props = {
	display: boolean;
};

const Loader: React.FC<Props> = ({ display }) => {
	return (
		<Container $display={display ? "block" : "none"}>
			<Wrapper>
				<div className="lds-roller">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</Wrapper>
		</Container>
	);
};

export default Loader;
