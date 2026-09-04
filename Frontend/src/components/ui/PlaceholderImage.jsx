import React from "react";
import { motion } from "framer-motion";

// Enhanced PlaceholderImage:
// - If src prop is a real URL (starts with http), renders an <img>
// - Otherwise renders the styled placeholder div (backward compatible)
function PlaceholderImage({ label, src, alt, className = "", style = {} }) {
    const isReal = src && src.startsWith("http");

    if (isReal) {
        return (
            <motion.img
                src={src}
                alt={alt || label || "Property image"}
                className={className}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...style }}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                loading="lazy"
            />
        );
    }

    return (
        <motion.div
            className={`placeholder-img ${className}`}
            style={style}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <span>ASPL</span>
            <small>{label || "IMAGE PLACEHOLDER"}</small>
        </motion.div>
    );
}

export default PlaceholderImage;
