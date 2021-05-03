import styled from 'styled-components'

export const Container = styled.div`
    height: 30rem;
    width: 30rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 2px solid ${props => props.theme.colors.black};
    border-radius: 1rem;

    background-color: ${props => props.theme.colors.secondary};
`

export const FormItemContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.5rem;


`

export const FormLabel = styled.div`
    font-family: 'Poppins', sans-serif;

    padding-bottom: .5rem;
    
`

export const FormInput = styled.input`
    height: 2.63rem; 
    width: 20rem;

    border: 2px solid ${props => props.theme.colors.black};
    border-radius: .6rem;

    font-family: 'Poppins', sans-serif;

    padding: 0 .5rem;

    transition: all .3s;
    
    &.error {
        border-color: red;
    }
`

export const ButtonContainer = styled.div`
    min-width: 20rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 1rem 0;
`

export const LoginButton = styled.button`
    height: 2.63rem;
    width: 17rem;

    display: flex;
    align-items: center;


    margin:0 1rem;

    border: 3px solid ${props => props.theme.colors.black};
    border-radius: .6rem;

    color: ${props => props.theme.colors.white};
    font-size: 1.2rem;

    transition: all .3s;

    svg {
        width: 2rem;
    }

    &:hover{
        filter: brightness(1.1);
        transform: translateX(1px);        
    }

    .content {
        width: 12rem;

        display: flex;
        align-items: center;
        justify-content: center;

    }
    
    background-color: ${props => props.theme.colors.quintenary};
`