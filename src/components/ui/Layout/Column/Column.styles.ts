import styled from 'styled-components';

export const Root = styled.div<{
    span: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    spanMobile: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}>(({ span, spanMobile }) => ({
    gridColumn: `span ${span}`,
    '@media screen and (max-width: 768px)': {
        gridColumn: `span ${spanMobile}`,
    },
}));
