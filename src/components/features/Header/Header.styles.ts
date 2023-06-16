import NextImage from 'next/image';
import styled from 'styled-components';

export const Root = styled.header({
    padding: '24px 0',
});

export const Image = styled(NextImage)({
    display: 'block',
    width: 96,
    height: 'auto',
    margin: '0 auto',
});
