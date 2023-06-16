import { createContext } from 'react';

interface FormContextValue {
    variant: 'primary' | 'discord';
}

const FormContext = createContext<FormContextValue>({ variant: 'primary' });

export default FormContext;
