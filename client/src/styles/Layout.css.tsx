import { styled } from "styled-components"

const FlexCont = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Container = styled.div`
    height: 100vh;
`

export const Wrapper = styled(FlexCont)`
    height: 100%;
    & > *:first-child {
        flex: 1;
    }
    & > *:last-child {
        flex: 5;
    }
`

