import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            quatenary: string;
            quintenary: string;

            white: string;
            black: string;
            gray: string;

            success: string;
            info: string;
            warning: string;

            yellowpokemon: string;
            bluepokemon: string;
        },
    };
}