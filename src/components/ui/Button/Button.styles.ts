import styled from 'styled-components';
import loadingSvg from '@assets/loading.svg';

export const Root = styled.button<{ isLoading: boolean; variant: 'primary' | 'discord' }>(
    ({ isLoading, theme, variant }) => ({
        display: 'block',
        width: '100%',
        height: 44,
        fontWeight: 500,
        fontSize: '14px',
        color: '#FFF',
        background: {
            primary: theme.colors.primary,
            discord: theme.colors.discord,
        }[variant],
        borderRadius: 8,
        border: 0,
        cursor: 'pointer',
        '&:disabled': {
            cursor: 'default',
            opacity: 0.7,
        },
        ...(isLoading && {
            color: 'rgba(255, 255, 255, 0)',
            backgroundImage: `url(${loadingSvg.src})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            opacity: '1 !important',
        }),
    }),
);
