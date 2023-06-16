'use client';

import twfnLogoPng from '@assets/twfn-logo.png';
import Container from '@components/ui/Container';
import { Root, Image } from './Header.styles';

const Header: React.FC = () => {
    return (
        <Root>
            <Container>
                <Image alt="TWFN Logo" src={twfnLogoPng} />
            </Container>
        </Root>
    );
};

export default Header;
