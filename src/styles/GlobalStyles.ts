import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100vh;
        width: 100vw;

        overflow-x: hidden;
        ${window.location.href.split('/')[3] === 'login' ? 'overflow-y: hidden;' : ''}
        background-color: ${props => props.theme.colors.tertiary};

        ::-webkit-scrollbar {
            width: .6rem;
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${props => props.theme.colors.primary};
            border-radius: .6rem;
        }

        ::-webkit-scrollbar-track {
            background-color: ${props => props.theme.colors.quatenary};
        }
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: sans-serif;
    }

    button {
        cursor: pointer;
    }

    

    overflow-x:hidden
`