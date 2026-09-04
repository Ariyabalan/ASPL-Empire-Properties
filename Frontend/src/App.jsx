import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import { CompareProvider } from "./context/CompareContext";
import PageRouter from "./router/PageRouter";

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export default function App() {
    return (
        <CompareProvider>
            <ScrollToTop />
            <Header />

            <main>
                <PageRouter />
            </main>

            <Footer />
        </CompareProvider>
    );
}