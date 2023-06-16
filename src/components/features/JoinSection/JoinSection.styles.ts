import Image from 'next/image';
import styled from 'styled-components';
import Section from '@components/ui/Section/Section';

export const Root = styled(Section)({
    //
});

export const Icon = styled(Image)({
    width: 48,
    height: 'auto',
    margin: '0 0 8px',
});

export const Heading = styled.h2({
    fontWeight: 900,
    fontSize: '34px',
});

export const Description = styled.div({
    //
});
