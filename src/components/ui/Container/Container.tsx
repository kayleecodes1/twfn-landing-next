'use client';

import { Root } from './Container.styles';

interface ContainerProps {
    children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <Root>{children}</Root>;
};

export default Container;
