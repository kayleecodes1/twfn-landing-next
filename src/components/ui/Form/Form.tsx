'use client';

import FormContext from '@contexts/FormContext';
import Item from './Item';
import { Root } from './Form.styles';

interface FormProps {
    children?: React.ReactNode;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    variant?: 'primary' | 'discord';
}

interface FormChildComponents {
    Item: typeof Item;
}

const Form: React.FC<FormProps> & FormChildComponents = ({ children, onSubmit, variant = 'primary' }) => {
    return (
        <Root onSubmit={onSubmit}>
            <FormContext.Provider value={{ variant }}>{children}</FormContext.Provider>
        </Root>
    );
};

Form.Item = Item;
Form.Item.displayName = 'Form.Item';

export default Form;
