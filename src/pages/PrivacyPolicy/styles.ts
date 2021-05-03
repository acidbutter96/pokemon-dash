import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 4rem;

    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    
`

export const BoardContainer = styled.div`
    width: 100vw;

    display: flex;
    justify-content: center;
`

export const HeaderRow = styled.div`
    height: 10rem;
    width: 100%;

    display: flex;
    justify-content: center;

    .textContainer {
        display: flex;
        align-items: center;

        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        color: ${props => props.theme.colors.primary};
    }

    .pokemonContainer{
        width: auto;

        display: flex;
        justify-content: center;
    }
`

export const TextColumn = styled.div`
    h2,h3,h4 {
        margin: .5rem 0;

        font-family: 'Poppins', sans-serif;
        color: ${props => props.theme.colors.primary};
    }

    a {
        font-family: 'Poppins', sans-serif;
        color: ${props => props.theme.colors.black};

        transition: all .3s;

        &:hover {
            color: ${props => props.theme.colors.quintenary};
        }
    }

    p {
        font-family: 'Poppins', sans-serif;
        color: ${props => props.theme.colors.black};
    }

    ul{
        list-style-type: none;
        margin: 0 .5rem;

        li {
            
            
            font-family: 'Poppins', sans-serif;
        }
    }

`