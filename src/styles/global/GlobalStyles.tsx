import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle(
    ({ theme }) => ({
        'html, body': {
            fontFamily: theme.typefaces.body,
            fontSize: '17px',
            lineHeight: '24px',
            color: theme.colors.text.body,
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            background: theme.colors.background,
            padding: 0,
            margin: 0,
        },
        '*': {
            boxSizing: 'border-box',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
        },
        'h1, h2, h3, h4, h5, h6': {
            fontWeight: 900,
            lineHeight: 1.166,
            color: theme.colors.text.heading,
            margin: '0 0 24px',
        },
        p: {
            margin: '0 0 24px',
        },
        'p:last-child': {
            marginBottom: 0,
        },
        ul: {
            padding: '0 0 0 24px',
            margin: '0 0 24px',
        },
        'ul:last-child': {
            marginBottom: 0,
        },
        'ul li': {
            margin: '0 0 8px',
        },
        'ul li:last-child': {
            marginBottom: 0,
        },
    }),
);

export default GlobalStyles;
