import NextImage from 'next/image';
import styled from 'styled-components';

export const Root = styled.div<{ isVisible: boolean }>(({ isVisible }) => ({
    position: 'absolute',
    inset: '0 0 0 0',
    display: isVisible ? 'flex' : 'none',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
}));

export const Icon = styled(NextImage)({
    width: 48,
    height: 'auto',
    margin: '0 0 16px',
});

export const Heading = styled.h3({
    fontWeight: 900,
    fontSize: '24px',
    margin: 0,
});

export const Description = styled.p({
    margin: 0,
});
