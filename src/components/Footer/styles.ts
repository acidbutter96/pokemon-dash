import styled from 'styled-components';

export const Container = styled.footer`
    width: 100vw;
    height: 3.06rem;

    position: relative;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props => props.theme.colors.white};

    background-color: ${props => props.theme.colors.primary};
`