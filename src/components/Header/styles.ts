import styled from 'styled-components';

export const Container = styled.nav`
    position: fixed;
    right:0;
    top: 0;

    height: 3.4rem;
    width: 100vw;

    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 2rem;

    background-color: ${props => props.theme.colors.primary};
`

export const SearchBar = styled.input`
    width: 67vw;
    height: 2.4rem;

    margin: 1rem;

    padding: 0 1rem;

    background-color: white;

    border: 1.5px solid ${props => props.theme.colors.black};
    border-radius: 5px;

    font-size: 1.25rem;
    font-family: 'Poppins', sans-serif;
    //color: rgba(0,0,0,.65);
`

export const LoginButton = styled.button`
    width: 7.06rem;
    height: 2.63rem;

    margin:0 1rem;

    border: 3px solid ${props => props.theme.colors.black};
    border-radius: .6rem;

    color: ${props => props.theme.colors.white};
    font-size: 1.2rem;

    transition: all .3s;

    &:hover{
        filter: brightness(1.1);
        transform: translateX(1px);        
    }
    
    background-color: ${props => props.theme.colors.quintenary};
`