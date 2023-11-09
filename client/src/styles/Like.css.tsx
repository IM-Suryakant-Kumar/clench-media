import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    gap: 1em;
    & > * {
        /* flex: 1 1 300px; */
        width: 300px;
    }
`