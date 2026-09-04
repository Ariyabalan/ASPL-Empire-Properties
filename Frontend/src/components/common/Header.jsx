import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../../assets/assets";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const navItems = [
    ["Home", "/"],
    ["About", "/about"],

    ["Properties", "/properties"],
    ["Compare", "/compare"],
    ["EMI", "/emi"],
    ["Updates", "/construction"],
    ["Blog", "/blog"],
    ["Careers", "/careers"],
    ["Contact", "/contact"],
];

function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => { setOpen(false); }, [location.pathname]);

    return (
        <motion.header
            className={`header${scrolled ? " scrolled" : ""}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
        >
            <Link className="header-brand" to="/">
                <img src={assets.logo} alt="ASPL Empire Properties" />
            </Link>

            <nav className="header-nav">
                {navItems.map(([name, path]) => (
                    <Link key={path} to={path}>{name}</Link>
                ))}
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                    <Link className="header-cta" to="/site-visit">Plan a Visit</Link>
                </motion.div>
            </nav>

            <button
                className="menu-btn"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle navigation"
            >
                <motion.span
                    key={open ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "flex", fontSize: 22 }}
                >
                    {open ? <CloseOutlined /> : <MenuOutlined />}
                </motion.span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        className="mobile-nav"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                        {navItems.map(([name, path], i) => (
                            <motion.div
                                key={path}
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.04, duration: 0.2 }}
                            >
                                <Link to={path}>{name}</Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: navItems.length * 0.04, duration: 0.2 }}
                            style={{ paddingTop: 8 }}
                        >
                            <Link className="btn-primary" to="/site-visit" style={{ display: "inline-flex" }}>
                                Plan a Visit
                            </Link>
                        </motion.div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default Header;
