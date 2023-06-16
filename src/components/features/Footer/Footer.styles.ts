import styled from 'styled-components';

export const Root = styled.footer({
    padding: '24px 0',
    '@media screen and (max-width: 768px)': {
        marginTop: '72px',
    },
});

export const Copyright = styled.p({
    fontSize: '14px',
    textAlign: 'center',
    color: '#AAA',
});
