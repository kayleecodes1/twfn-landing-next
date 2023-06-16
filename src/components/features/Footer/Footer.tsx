'use client';

import Container from '@components/ui/Container';
import { Root, Copyright } from './Footer.styles';

const Footer: React.FC = () => {
    return (
        <Root>
            <Container>
                <Copyright>&copy; 2023 Trans Woman and Fem(me) Network. All rights reserved.</Copyright>
            </Container>
        </Root>
    );
};

export default Footer;
