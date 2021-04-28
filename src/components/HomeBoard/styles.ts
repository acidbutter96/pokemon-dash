import styled from 'styled-components';

export const Container = styled.div`
    height: 48rem;
    width: 80rem;

    padding: 1rem 0;

    border-radius: 0 0 1rem 1rem;

    background-color:${props => props.theme.colors.secondary};
`

export const Filters = styled.div`
    border-bottom: 1px solid black;

    padding: 0 2rem;

`

export const Selector = styled.select`
    width: 12.75rem;
    height: 2.8rem;

    border: 1px solid ${props => props.theme.colors.black};
    border-radius: .5rem;

    margin: .5rem 0;

    cursor: pointer;

    transition: all .3s;

    font-family: 'Poppins', sans-serif;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.quintenary};

    option[disabled] {
        color: ${props => props.theme.colors.black};
        text-shadow: none;
        border: none;
    }

    &:focus,
    &:hover {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }

`;

export const PokemonContainer = styled.div`
`;