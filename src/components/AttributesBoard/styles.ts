import styled from 'styled-components'

export const Container = styled.div`
    min-height: 80vh;
    width: 71.25rem;

    display: flex;
    justify-content: center;
    align-items: center;
    
    border: 0 2px solid ${props => props.theme.colors.black};

    background-color:${props => props.theme.colors.primary};
`

export const NameBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1rem;

    color: ${props => props.theme.colors.secondary};
`

export const PokemonAttributeContainer = styled.div`
    width: 60rem;

    align-items: center;
    justify-content: space-around;

    display: flex;
`

export const ChartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AttributesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const PokemonImage = styled.div`
    height: 7.25rem;
    width: 7.25rem;

    margin-bottom: 1rem;

    background-color: ${props => props.theme.colors.quatenary};
    border-radius: 1rem;
    border: 2px solid ${props => props.theme.colors.black};

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 10rem;
        height: 10rem;
    }
`

export const AddButton = styled.div`
    width: 2.81rem;
    height: 2.81rem;

    margin: 1.31rem;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 5;

    border-radius: 10rem;

    background-color: ${props => props.theme.colors.success};

    font-size: 1.7rem;
    font-weight: 800;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.white};

    cursor: pointer;

    transition: all .3s;

    &:hover{
        filter: brightness(1.2);
    }
`