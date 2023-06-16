'use client';

import { useContext } from 'react';
import FormContext from '@contexts/FormContext';
import { Root } from './Button.styles';

interface ButtonProps {
    children?: React.ReactNode;
    disabled?: boolean;
    isLoading?: boolean;
    type?: 'button' | 'submit';
    variant?: 'primary' | 'discord';
}

const Button: React.FC<ButtonProps> = ({ children, disabled = false, isLoading = false, type = 'button', variant }) => {
    const formContext = useContext(FormContext);

    return (
        <Root
            disabled={disabled || isLoading}
            isLoading={isLoading}
            type={type}
            variant={variant || formContext.variant}
        >
            {children}
        </Root>
    );
};

export default Button;
