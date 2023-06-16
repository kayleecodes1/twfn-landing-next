'use client';

import { Root } from './Column.styles';

interface ColumnProps {
    children?: React.ReactNode;
    span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    spanMobile?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const Column: React.FC<ColumnProps> = ({ children, span = 1, spanMobile = span }) => {
    return <Root span={span} spanMobile={spanMobile}>{children}</Root>;
};

export default Column;
