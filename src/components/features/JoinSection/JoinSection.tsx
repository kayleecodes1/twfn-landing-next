'use client';

import discordSvg from '@assets/discord.svg';
import JoinForm from '@components/features/JoinForm';
import Container from '@components/ui/Container';
import Layout from '@components/ui/Layout';
import { Root, Icon, Heading, Description } from './JoinSection.styles';

const Column = Layout.Column;

const AboutSection: React.FC = () => {
    return (
        <Root>
            <Container>
                <Layout>
                    <Layout.Column span={6} spanMobile={12}>
                        <Icon alt="Discord Logo" src={discordSvg} />
                        <Heading>Join Our Community</Heading>
                        <Description>
                            <p>If you meet the above criteria and would like to join our Discord server, please fill out the this form and we’ll get back to you as quickly as possible.</p>
                            <p>We require a social media link or a photo as proof of identity to keep our community safe. This information will not be shared outside of the moderation team.</p>
                        </Description>
                    </Layout.Column>
                    <Layout.Column span={6} spanMobile={12}>
                        <JoinForm />
                    </Layout.Column>
                </Layout>
            </Container>
        </Root>
    );
};

export default AboutSection;
