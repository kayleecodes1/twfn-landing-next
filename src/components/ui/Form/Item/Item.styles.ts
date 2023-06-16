import styled from 'styled-components';

export const Root = styled.div<{ size: 'small' | 'medium' | 'large' }>(({ size }) => ({
    gridColumn: `span ${
        {
            small: 1,
            medium: 2,
            large: 3,
        }[size]
    }`,
}));
