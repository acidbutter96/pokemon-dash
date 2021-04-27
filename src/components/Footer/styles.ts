import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 3.06rem;

    position: absolute;
    bottom: 0px;
    right: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props => props.theme.colors.white};

    background-color: ${props => props.theme.colors.primary};
`