import React from "react";
import { motion } from "framer-motion";

// Simple page layout wrapper — used by About, Blog, FAQ, etc.
// Renders a cream page-hero style header followed by a content section.
function Simple({ title, subtitle, eyebrow, heroBg, children }) {
    return (
        <>
            {/* Page Hero */}
            <div className="page-hero" style={{ minHeight: 300 }}>
                {heroBg && <div className="page-hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />}
                {!heroBg && <div className="page-hero-bg" style={{ background: "var(--navy)" }} />}
                <motion.div
                    className="page-hero-content"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
                    <h1>{title}</h1>
                    {subtitle && <p>{subtitle}</p>}
                </motion.div>
            </div>

            {/* Content */}
            <motion.section
                className="section"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            >
                {children}
            </motion.section>
        </>
    );
}

export default Simple;
