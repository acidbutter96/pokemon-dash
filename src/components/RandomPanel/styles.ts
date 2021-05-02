import styled from 'styled-components';

export const Container = styled.div`
    height: 29rem;
    width: calc(100vw - 1rem);

    display: flex;
    justify-content: center;
    align-items: center;

    margin: .25rem;
    padding: 1rem;
`;

export const Button = styled.button`
    width: 2.5rem;
    height: 2.5rem; 

    background: ${props => props.theme.colors.primary};

    border-radius: 6.25rem;
    border: 2px solid ${props => props.theme.colors.black};

    margin: auto;

    font-size: 1.7rem;
    color: ${props => props.theme.colors.white};
    
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all .3s;

    &:hover{
        filter: brightness(1.1);
        transform: translateX(-.5px);
    }

    &:disabled{
        opacity: .5;
        cursor: default;
    }
`

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PaginationBtn = styled.button`
    height: 1.37rem;
    width: 1.37rem;

    margin: 0 .2rem;

    border-radius: 6.25rem;
    border: 2px solid ${props => props.theme.colors.black};

    background-color: ${props => props.theme.colors.quatenary};

    &:hover{
        filter: brightness(1.1);
    }

    &:disabled {
        background: ${props => props.theme.colors.quintenary};
    }
`