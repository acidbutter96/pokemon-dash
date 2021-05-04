import styled from 'styled-components'

export const TableRow = styled.tr`
    height: 4rem;

    margin: 1rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    border-radius: .4rem;

    background-color: ${props => props.theme.colors.white};

    transition: all .3s;

    &:hover {
        transform: translateX(-2px)
    }
    
    td{
        display: flex;
        max-height: 4rem;

        flex-direction: column;
        justify-content: center;
        align-items: start;
    }
`

export const ImageContainer = styled.tr`
    height: 4.87rem;
    width: 5.43rem;
`

export const ActionContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const PreviewButton = styled.a`
    width: 2.81rem;
    height: 2.81rem;

    margin: 1.1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 5;

    border-radius: 10rem;

    background-color: ${props => props.theme.colors.info};

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

export const DeleteButton = styled(PreviewButton)`
    background-color: ${props => props.theme.colors.warning};

`