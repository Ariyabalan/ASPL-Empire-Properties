import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
    return (
        <motion.section
            className="center"
            initial={{
                opacity: 0,
                y: 40,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
        >
            <motion.h1
                initial={{
                    opacity: 0,
                    scale: 0.7,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.15,
                    type: "spring",
                    stiffness: 150,
                }}
            >
                404
            </motion.h1>

            <motion.p
                initial={{
                    opacity: 0,
                    y: 15,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.4,
                    delay: 0.3,
                }}
            >
                Page not found.
            </motion.p>

            <motion.div
                initial={{
                    opacity: 0,
                    y: 15,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.4,
                    delay: 0.4,
                }}
                whileHover={{
                    scale: 1.05,
                }}
                whileTap={{
                    scale: 0.95,
                }}
            >
                <Link className="button" to="/">
                    Go Home
                </Link>
            </motion.div>
        </motion.section>
    );
}

export default NotFound;
