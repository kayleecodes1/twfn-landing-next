'use client';

import { useContext } from 'react';
import FormContext from '@contexts/FormContext';
import { Root } from './Input.styles';

interface InputProps {
    variant?: 'primary' | 'discord';
}

const Input: React.FC<InputProps & React.HTMLProps<HTMLInputElement>> = ({ variant, ...inputProps }) => {
    const formContext = useContext(FormContext);

    return <Root variant={variant || formContext.variant} {...inputProps} />;
};

export default Input;
