import styled from 'styled-components'

interface ITypeBadgeContainer {
    typeColor: string;
}

export const TypeBadgeContainer = styled.div<ITypeBadgeContainer>`
    height: 1.87rem;
    width: 3.25rem;

    background-color: ${props => props.typeColor};

    z-index: 8;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: .3rem;

    font-size: .75rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.white};
`