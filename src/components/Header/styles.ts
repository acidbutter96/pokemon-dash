import styled from 'styled-components';

interface ISearchBar {
    loggedBar: boolean;
}

interface ILoggedContainer {
    displayed: boolean;
}

export const Container = styled.nav`
    position: fixed;
    right:0;
    top: 0;
    z-index: 10;

    height: 3.4rem;
    width: 100vw;

    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 2rem;

    background-color: ${props => props.theme.colors.primary};
`

export const LoggedContainer = styled.div<ILoggedContainer>`
    ${props => props.displayed ? 'display: none;' : 'display: flex;'}

    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.white};

    transition: all .3s;
`

export const SearchBar = styled.input<ISearchBar>`
    ${props => props.loggedBar ? 'width: 37vw;' : 'width: 67vw;'}
    
    height: 2.4rem;

    margin: 1rem;

    padding: 0 1rem;

    background-color: white;

    border: 1.5px solid ${props => props.theme.colors.black};
    border-radius: 5px;

    font-size: 1.25rem;
    font-family: 'Poppins', sans-serif;

    transition: all .3s;

    &:focus{
        width: 67vw;
    }
`

export const LoginButton = styled.a`
    width: 7.06rem;
    height: 2.63rem;

    margin:0 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 3px solid ${props => props.theme.colors.black};
    border-radius: .6rem;

    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.white};
    text-decoration: none;

    transition: all .3s;

    cursor: pointer;

    &:hover{
        filter: brightness(1.1);
        transform: translateX(1px);        
    }
    
    background-color: ${props => props.theme.colors.quintenary};
`

export const DisplayName = styled.div`
    padding-right: 1rem;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none; 
`

export const LoggedButton = styled.a`
    text-decoration: none;

    padding: 0 .5rem;

    color: ${props => props.theme.colors.white};

    cursor: pointer;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none; 

    &:hover{
        color: ${props => props.theme.colors.secondary};
    }
`
