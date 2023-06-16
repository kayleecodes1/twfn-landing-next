'use client';

import Column from './Column';
import { Root } from './Layout.styles';

interface GridProps {
    children?: React.ReactNode;
}

interface GridChildComponents {
    Column: typeof Column;
}

const Grid: React.FC<GridProps> & GridChildComponents = ({ children }) => {
    return <Root>{children}</Root>;
};

Grid.Column = Column;
Grid.Column.displayName = 'Grid.Column';

export default Grid;
