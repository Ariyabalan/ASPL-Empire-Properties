import React, { useState } from "react";
import { motion } from "framer-motion";
import { money } from "../../context/CompareContext";

function EmiResult({ price }) {
    const [rate, setRate] = useState(8.5);
    const [years, setYears] = useState(20);
    const [down, setDown] = useState(20);

    const principal = price * (1 - down / 100);
    const r = rate / 1200;
    const n = years * 12;

    const emi = r
        ? (principal * r * Math.pow(1 + r, n)) /
          (Math.pow(1 + r, n) - 1)
        : principal / n;

    const formattedEmi = money(isFinite(emi) ? emi : 0);

    return (
        <motion.div
            className="emi"
            initial={{
                opacity: 0,
                y: 30,
                scale: 0.98,
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}
        >
            <motion.label
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                Interest rate

                <motion.input
                    type="number"
                    value={rate}
                    onChange={(e) =>
                        setRate(Number(e.target.value))
                    }
                    whileFocus={{ scale: 1.02 }}
                />
            </motion.label>

            <motion.label
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                Tenure (years)

                <motion.input
                    type="number"
                    value={years}
                    onChange={(e) =>
                        setYears(Number(e.target.value))
                    }
                    whileFocus={{ scale: 1.02 }}
                />
            </motion.label>

            <motion.label
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
            >
                Down payment %

                <motion.input
                    type="number"
                    value={down}
                    onChange={(e) =>
                        setDown(Number(e.target.value))
                    }
                    whileFocus={{ scale: 1.02 }}
                />
            </motion.label>

            <motion.h2
                key={formattedEmi}
                initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.95,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    duration: 0.3,
                }}
            >
                Estimated EMI: {formattedEmi}/month
            </motion.h2>
        </motion.div>
    );
}

export default EmiResult;

