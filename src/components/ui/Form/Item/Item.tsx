'use client';

import { Root } from './Item.styles';

interface ItemProps {
    children?: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
}

const Item: React.FC<ItemProps> = ({ children, size = 'large' }) => {
    return <Root size={size}>{children}</Root>;
};

export default Item;
