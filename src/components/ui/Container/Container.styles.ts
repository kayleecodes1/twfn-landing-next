import styled from 'styled-components';

export const Root = styled.div({
    maxWidth: 900,
    padding: '0 48px',
    margin: '0 auto',
    '@media screen and (max-width: 768px)': {
        padding: '0 24px',
    },
});
