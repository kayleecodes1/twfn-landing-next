import styled from 'styled-components';

export const Root = styled.input<{ variant: 'primary' | 'discord' }>(({ theme, variant }) => ({
    display: 'block',
    width: '100%',
    height: 44,
    fontWeight: 400,
    fontSize: '14px',
    color: theme.colors.text.body,
    background: '#F6F6FA',
    padding: '0 14px',
    borderRadius: 8,
    border: '2px solid #F6F6FA',
    '&:focus': {
        outline: `2px solid var(${
            {
                primary: theme.colors.primary,
                discord: theme.colors.discord,
            }[variant]
        })`,
    },
    '&:placeholder': {
        fontWeight: 400,
        fontSize: '14px',
        color: '#AAA',
    },
}));
