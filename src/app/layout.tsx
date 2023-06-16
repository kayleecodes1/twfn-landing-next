import { Roboto } from 'next/font/google';
import StylesProvider from '@styles/StylesProvider';

const roboto = Roboto({
    weight: ['400', '500', '700', '900'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'Trans Woman and Fem(me) Network (TWFN)',
    description: 'A community for trans, nonbinary, gender non-conforming, and questioning AMAB folks.',
    colorScheme: 'light',
    authors: [{ name: 'Kaylee', url: 'https://kayleecodes.dev' }],
    openGraph: {
        type: 'website',
        title: '',
        description: 'A community for trans, nonbinary, gender non-conforming, and questioning AMAB folks.',
        url: process.env.VERCEL_URL,
        images: '/twfn-logo.png',
    },
    icons: {
        icon: [
            { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
        ],
        other: [
            { rel: 'apple-touch-icon', url: '/favicon/apple-touch-icon.png' },
        ],
    },
    manifest: '/site.webmanifest',
    twitter: {
        card: 'summary_large_image',
        title: '',
        description: 'A community for trans, nonbinary, gender non-conforming, and questioning AMAB folks.',
        url: process.env.VERCEL_URL,
        images: '/twfn-logo.png',
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <StylesProvider>{children}</StylesProvider>
            </body>
        </html>
    );
}
