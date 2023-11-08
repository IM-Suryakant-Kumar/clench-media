import styled from "styled-components";

const Container = styled.div<{ $display: string }>`
	display: ${(props) => props.$display};
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 6;
	background-color: #33333392;
`;

const Wrapper = styled.div`
	width: 35%;
	height: 35%;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
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
