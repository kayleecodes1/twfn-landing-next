'use client';

import checkmarkSvg from '@assets/checkmark.svg';
import { Root, Icon, Heading, Description } from './ConfirmationOverlay.styles';

interface ButtonProps {
    description?: string;
    isVisible?: boolean;
    title?: string;
}

const Button: React.FC<ButtonProps> = ({ description, isVisible = true, title }) => {
    return (
        <Root isVisible={isVisible}>
            <Icon alt="Checkmark" src={checkmarkSvg} />
            <Heading>{title}</Heading>
            <Description>{description}</Description>
        </Root>
    );
};

export default Button;
