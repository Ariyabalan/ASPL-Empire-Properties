import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Simple from "../components/ui/Simple";

function FAQ() {
    const [open, setOpen] = useState(null);

    return (
        <Simple title="Frequently Asked Questions">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.1,
                        },
                    },
                }}
            >
                {faqs.map((faq, index) => (
                    <motion.div
                        className="faq"
                        key={faq.id || index}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 20,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.4,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    >
                        <motion.button
                            onClick={() =>
                                setOpen(open === index ? null : index)
                            }
                            whileTap={{ scale: 0.98 }}
                        >
                            {faq.question}

                            <motion.span
                                animate={{
                                    rotate: open === index ? 45 : 0,
                                }}
                                transition={{
                                    duration: 0.25,
                                    ease: "easeInOut",
                                }}
                            >
                                +
                            </motion.span>
                        </motion.button>

                        <AnimatePresence initial={false}>
                            {open === index && (
                                <motion.p
                                    initial={{
                                        opacity: 0,
                                        height: 0,
                                        y: -10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        height: "auto",
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        height: 0,
                                        y: -10,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </motion.div>
        </Simple>
    );
}

export default FAQ;

