'use client';

import Container from '@components/ui/Container';
import Layout from '@components/ui/Layout';
import { Root, Heading, Description } from './AboutSection.styles';

const Column = Layout.Column;

const AboutSection: React.FC = () => {
    return (
        <Root>
            <Container>
                <Layout>
                    <Layout.Column span={6} spanMobile={12}>
                        <Heading>About</Heading>
                        <Description>
                            <p>We are an active Discord community with daily chatter. We are a space for sharing resources, asking questions, celebrating successes, venting over challenges, building community, and forming friendships.</p>
                            <p>We also have weekly video hangouts on our Discord server and arrange occasional (8+ times a year) in-person hangouts as well.</p>
                        </Description>
                    </Layout.Column>
                    <Layout.Column span={6} spanMobile={12}>
                        <Heading>Membership Criteria</Heading>
                        <Description>
                            <ul>
                                <li>AMAB (assigned male at birth) and trans, nonbinary, gender non-conforming, or questioning</li>
                                <li>18+ years old</li>
                                <li>Reside in the Boston area or New England</li>
                            </ul>
                        </Description>
                    </Layout.Column>
                </Layout>
            </Container>
        </Root>
    );
};

export default AboutSection;
