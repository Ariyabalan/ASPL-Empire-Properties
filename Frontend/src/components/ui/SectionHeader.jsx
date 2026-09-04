import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Reusable premium section header with eyebrow, heading, optional subtitle + View All link
function SectionHeader({ eyebrow, heading, subtitle, viewAllTo, viewAllLabel = "View all", center = false }) {
    return (
        <div className={`section-head${center ? " text-center" : ""}`}
            style={center ? { flexDirection: "column", alignItems: "center" } : {}}
        >
            <div>
                {eyebrow && (
                    <motion.p
                        className="eyebrow"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        {eyebrow}
                    </motion.p>
                )}
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                >
                    {heading}
                </motion.h2>
                {subtitle && (
                    <motion.p
                        style={{ marginTop: 12, maxWidth: 540 }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
            {viewAllTo && (
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    whileHover={{ x: 4 }}
                >
                    <Link className="view-all" to={viewAllTo}>
                        {viewAllLabel} ?
                    </Link>
                </motion.div>
            )}
        </div>
    );
}

export default SectionHeader;
