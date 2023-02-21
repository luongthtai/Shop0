import React from 'react'
import "./assets/style/global.scss";
import HomePage from './layout/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Discount from './layout/Section/Discount/Discount';

export default function App() {
    const location = useLocation()

    return (
        <>
            <Header />
            {
                location.pathname === "/" ? <HomePage /> : <Outlet />
            }
            <Discount />

            <Footer />
        </>
    )
}