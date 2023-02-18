import React from 'react'
import "./assets/style/global.scss";
import HomePage from './layout/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App() {
    return (
        <>
            <Header />
            <HomePage />
            <Footer />
        </>
    )
}