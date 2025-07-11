import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import NavMenu from '@/components/NavMenu/NavMenu';
import Footer from '@/components/Footer/Footer';
import React from 'react';

// TODO: figure out why Geist isn't actually being used
const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-mono',
    weight: '100 900',
});

const superclarendon = localFont({
    src: [
        {
            path: './fonts/superclarendon-lt.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/superclarendon-lt-italic.woff',
            weight: '400',
            style: 'italic',
        },
        {
            path: './fonts/superclarendon-rg.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/superclarendon-rg-italic.woff',
            weight: '500',
            style: 'italic',
        },
        {
            path: './fonts/superclarendon-rg-bold.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/superclarendon-rg-bold-italic.woff',
            weight: '700',
            style: 'italic',
        },
        {
            path: './fonts/superclarendon-bl.woff',
            weight: '900',
            style: 'normal',
        },
        {
            path: './fonts/superclarendon-bl-italic.woff',
            weight: '900',
            style: 'italic',
        },
    ],
    variable: '--font-serif',
});

export const metadata: Metadata = {
    title: 'Mansfield Cat Rescue',
    description: 'Mansfield Cat Rescue is a volunteer only, UK-registered charity operating Mansfield, Nottinghamshire',
    // TODO: "og:image" thumbnail? "twitter:card" social media links?
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* TODO: on tablet there seems to be big empty space after the footer? */}
            <body className={`${superclarendon.variable} flex min-h-screen flex-col font-serif antialiased`}>
                <NavMenu />
                <div className="flex-auto">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
