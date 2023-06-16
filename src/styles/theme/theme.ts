import type { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    interface DefaultTheme {
        colors: {
            background: string;
            discord: string;
            primary: string;
            text: {
                body: string;
                heading: string;
            };
        };
        typefaces: {
            body: string;
            heading: string;
        };
    }
}

const defaultTheme: DefaultTheme = {
    colors: {
        background: '#FFF',
        discord: '#5865F2',
        primary: '#2CB0FF',
        text: {
            body: '#5A6B7C',
            heading: '#1A4053',
        },
    },
    typefaces: {
        heading: '"Roboto", sans-serif',
        body: '"Roboto", sans-serif',
    },
};

export default defaultTheme;
