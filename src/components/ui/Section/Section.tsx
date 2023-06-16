'use client';

import { Root } from './Section.styles';

interface SectionProps {
    children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
    return <Root>{children}</Root>;
};

export default Section;
