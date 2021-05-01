import styled from 'styled-components';

interface IPokeType {
    typeColor: string;
}

export const Container = styled.div`
    min-height: calc(12.68rem+1.81rem);
    width: 14rem;

    background: transparent;
    margin: 2rem;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
`

export const NumberContainer = styled.div`
    width: 4rem;
    height: 4rem;
    
    display: flex;
    align-items: center;
    justify-content:center;

    position: absolute;
    left: -.5rem;
    top: -.1rem;
    z-index: 4;

    background-color: transparent;

    width: 2.91rem;
    height: 2.91rem;

    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.tertiary};
    font-size: 1.375rem;
`

export const PokeNumber = styled.div`
    height: 2.793rem;
    width: 2.793rem;

    background: ${props => props.theme.colors.quintenary};

    position: absolute;
    left: -.4rem;
    top: -.1rem;
    z-index: 3;

    border: 2px solid ${props => props.theme.colors.black};
    border-radius: 1rem;

    display: block;

    transform: rotate(45deg);
`

export const PokeType = styled.div<IPokeType>`
    height: 1.87rem;
    width: 3.25rem;

    background-color: ${props => props.typeColor};

    position: absolute;
    right: 1.6rem;
    top: .2rem;
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

export const PokeName = styled.div`
    height: 3.44rem;
    width: 9.06rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: -.7em;

    background-color: ${props => props.theme.colors.quatenary};

    border: 2px solid #000;
    border-radius: .7rem;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${props => props.theme.colors.white};

    overflow-x: hidden;
    overflow-y: hidden;
    text-overflow: ellipsis;
`

export const PokebuttonContainer = styled.div`
    position: absolute;
    z-index: 10;

    display: none;

    transition: all .3s;
`

export const PreviewButton = styled.div`
    width: 2.81rem;
    height: 2.81rem;

    margin: 1.31rem;

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

export const AddButton = styled(PreviewButton)`
    background-color: ${props => props.theme.colors.success};

`

export const ImageContainer = styled.div`
    height: 100%;
    width: 100%;

    background: ${props => props.theme.colors.gray};

    transition: all .3s;

    img{
        width: 100%;
        height: 100%; 
    }

`

export const PokeImage = styled.div`
    height: 12.68rem;
    width: 14rem;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    
    border: 2px solid ${props => props.theme.colors.black};
    border-radius: .5rem;

    z-index:0;

    &:hover{
        ${ImageContainer}{
            filter: brightness(.6);

            img {
                filter: brightness(.6);
            }
        }

        ${PokebuttonContainer}{
            display: flex !important;
        }

    }
`