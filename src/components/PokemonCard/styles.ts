import styled from 'styled-components';

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
    left: -.4rem;
    top: -.3rem;
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
    top: -.3rem;
    z-index: 3;

    border: 2px solid ${props => props.theme.colors.black};
    border-radius: 1rem;

    display: block;

    transform: rotate(45deg); 
`

export const PokeType = styled.div`
    height: 1.87rem;
    width: 3.25rem;

    background-color: ${props => props.theme.colors.fire};

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

export const PokeImage = styled.div`
    height: 12.68rem;
    width: 14rem;

    background: ${props => props.theme.colors.gray};

    display: flex;
    justify-content: center;
    align-items: center;
    
    border: 2px solid ${props => props.theme.colors.black};
    border-radius: .5rem;

    z-index:0;
`

export const PokeName = styled.div`
    height: 3.44rem;
    width: 9.06rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;

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
