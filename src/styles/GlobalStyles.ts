import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @import url(//db.onlinewebfonts.com/c/f4d1593471d222ddebd973210265762a?family=Pokemon);

    @font-face {
      font-family: 'Pokemon';
      src: url('//db.onlinewebfonts.com/t/f4d1593471d222ddebd973210265762a.eot');
      src: url('//db.onlinewebfonts.com/t/f4d1593471d222ddebd973210265762a.eot?#iefix') format('embedded-opentype'), url('//db.onlinewebfonts.com/t/f4d1593471d222ddebd973210265762a.woff2') format('woff2'), url('//db.onlinewebfonts.com/t/f4d1593471d222ddebd973210265762a.woff') format('woff'), url('//db.onlinewebfonts.com/t/f4d1593471d222ddebd973210265762a.ttf') format('truetype'), url('//db.onlinewebfonts.com/t/f4d1593471d222ddebd973210265762a.svg#Pokemon') format('svg');
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