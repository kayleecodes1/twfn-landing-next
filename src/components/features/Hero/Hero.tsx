'use client';

import twfnBostonSkylinePng from '@assets/twfn-boston-skyline.png';
import Container from '@components/ui/Container';
import { Root, Content, Title, Description, Image } from './Hero.styles';

const Header: React.FC = () => {
    return (
        <Root>
            <Container>
                <Content>
                    <Title>Trans Woman and<br />Fem(me) Network</Title>
                    <Description>The Trans Woman and Fem(me) Network (TWFN) is a community for trans, nonbinary, gender non-conforming, and questioning AMAB (assigned male at birth) folks.</Description>
                    <Image alt="TWFN Hero" src={twfnBostonSkylinePng} />
                </Content>
            </Container>
        </Root>
    );
};

export default Header;
