import styled from 'styled-components';

export const Root = styled.div({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: 44,
    '@media screen and (max-width: 768px)': {
        columnGap: 0,
    },
});
