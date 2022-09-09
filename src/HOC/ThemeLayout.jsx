import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
export default function ThemeLayout({ Component }) {
    return (
        <div>
            <Header />
            <Component />
            <Footer />
        </div>
    );
}
