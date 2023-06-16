
import AboutSection from '@components/features/AboutSection';
import Footer from '@components/features/Footer';
import Header from '@components/features/Header';
import Hero from '@components/features/Hero';
import JoinSection from '@components/features/JoinSection';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <AboutSection />
            <JoinSection />
            <Footer />
        </>
    );
};

export default Home;
