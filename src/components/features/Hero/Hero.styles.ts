import NextImage from 'next/image';
import styled from 'styled-components';

export const Root = styled.section({
    //
});

export const Content = styled.div({
    maxWidth: 500,
    textAlign: 'center',
    margin: '0 auto',
});

export const Title = styled.h1(({ theme }) => ({
    fontWeight: 900,
    fontSize: '36px',
    color: theme.colors.text.heading,
}));

export const Description = styled.p({
    maxWidth: 500,
});

export const Image = styled(NextImage)({
    maxWidth: 500,
});
