import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    position: absolute;
    left: 0;
    top: 3.4rem;

    width: 100vw;
    min-height: calc(100vh - 3.49rem);
`

export const BoardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    min-height: calc(100vh - 6.49rem)
`