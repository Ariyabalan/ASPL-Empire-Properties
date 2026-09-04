import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    CalculatorOutlined,
    HomeOutlined,
    SafetyCertificateOutlined,
    ArrowRightOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons";

import EmiResult from "../components/ui/EmiResult";

function EmiPage() {
    const [price, setPrice] = useState(6800000);

    const formatPrice = (value) => {
        if (!value) return "₹0";

        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(value);
    };

    const handlePriceChange = (e) => {
        const value = Number(e.target.value);

        setPrice(Number.isFinite(value) ? value : 0);
    };

    return (
        <main className="emi-page">

            {/* =====================================================
                HERO
            ====================================================== */}
            <section className="emi-hero">
                <div className="emi-hero-decoration emi-decoration-one" />
                <div className="emi-hero-decoration emi-decoration-two" />

                <motion.div
                    className="emi-hero-content"
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                >
                    <div className="emi-hero-icon">
                        <CalculatorOutlined />
                    </div>

                    <span className="emi-kicker">
                        FINANCIAL PLANNING
                    </span>

                    <h1>
                        Know your EMI.
                        <br />
                        <span>Plan with confidence.</span>
                    </h1>

                    <p>
                        Estimate your monthly home-loan repayment and
                        understand what your property purchase could look
                        like financially.
                    </p>
                </motion.div>
            </section>

            {/* =====================================================
                CALCULATOR
            ====================================================== */}
            <section className="emi-calculator-section">

                <motion.div
                    className="emi-calculator-card"
                    initial={{
                        opacity: 0,
                        y: 35,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.65,
                    }}
                >

                    {/* LEFT - INPUT */}
                    <div className="emi-input-panel">

                        <div className="emi-panel-heading">
                            <div className="emi-panel-icon">
                                <HomeOutlined />
                            </div>

                            <div>
                                <span>PROPERTY DETAILS</span>
                                <h2>Estimate your loan</h2>
                            </div>
                        </div>

                        <div className="emi-input-group">
                            <label htmlFor="property-price">
                                Property price
                            </label>

                            <div className="emi-price-input">
                                <span>₹</span>

                                <input
                                    id="property-price"
                                    type="number"
                                    min="0"
                                    value={price}
                                    onChange={handlePriceChange}
                                    placeholder="Enter property price"
                                />
                            </div>

                            <p className="emi-input-helper">
                                Enter the approximate price of the
                                property you are considering.
                            </p>
                        </div>

                        {/* Price preview */}
                        <div className="emi-price-preview">
                            <span>Selected property value</span>

                            <strong>
                                {formatPrice(price)}
                            </strong>
                        </div>

                        {/* Information */}
                        <div className="emi-info-box">
                            <InfoCircleOutlined />

                            <p>
                                This calculator provides an estimated
                                repayment amount. Actual EMI may vary
                                depending on your lender, interest rate,
                                loan tenure and eligibility.
                            </p>
                        </div>

                    </div>

                    {/* RIGHT - RESULT */}
                    <motion.div
                        className="emi-result-panel"
                        initial={{
                            opacity: 0,
                            x: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.15,
                        }}
                    >
                        <div className="emi-result-heading">
                            <span>YOUR ESTIMATE</span>

                            <div>
                                <CalculatorOutlined />
                            </div>
                        </div>

                        <EmiResult price={price} />
                    </motion.div>

                </motion.div>

                {/* =================================================
                    DISCLAIMER
                ================================================== */}
                <motion.p
                    className="emi-disclaimer"
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    <SafetyCertificateOutlined />
                    Indicative calculation only. Please confirm loan
                    terms and eligibility with your financial institution.
                </motion.p>

            </section>

            {/* =====================================================
                FINANCIAL GUIDANCE
            ====================================================== */}
            <section className="emi-guidance">

                <motion.div
                    className="emi-guidance-heading"
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                >
                    <span className="emi-section-kicker">
                        BEFORE YOU BUY
                    </span>

                    <h2>
                        Make the numbers
                        <br />
                        <span>work for you.</span>
                    </h2>

                    <p>
                        A comfortable home purchase is about more than
                        the property price. Consider your monthly budget,
                        upfront costs and long-term financial plans before
                        making a decision.
                    </p>
                </motion.div>

                <div className="emi-guidance-grid">

                    <motion.article
                        className="emi-guidance-card"
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.05,
                        }}
                    >
                        <span>01</span>

                        <h3>
                            Know your budget
                        </h3>

                        <p>
                            Start with a monthly repayment that fits
                            comfortably within your regular income and
                            expenses.
                        </p>
                    </motion.article>

                    <motion.article
                        className="emi-guidance-card"
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.12,
                        }}
                    >
                        <span>02</span>

                        <h3>
                            Consider upfront costs
                        </h3>

                        <p>
                            Remember that your purchase may also involve
                            registration, taxes, deposits and other
                            associated costs.
                        </p>
                    </motion.article>

                    <motion.article
                        className="emi-guidance-card"
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.19,
                        }}
                    >
                        <span>03</span>

                        <h3>
                            Think long term
                        </h3>

                        <p>
                            Choose a property and repayment plan that
                            continues to work for your financial goals
                            over the years ahead.
                        </p>
                    </motion.article>

                </div>
            </section>

            {/* =====================================================
                CTA
            ====================================================== */}
            <section className="emi-cta">

                <motion.div
                    className="emi-cta-content"
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.65,
                    }}
                >
                    <span className="emi-kicker">
                        READY TO EXPLORE?
                    </span>

                    <h2>
                        Find a property that
                        <br />
                        <span>fits your plans.</span>
                    </h2>

                    <p>
                        Explore ASPL properties across Bengaluru and
                        shortlist a home that matches your lifestyle
                        and budget.
                    </p>

                    <Link
                        to="/properties"
                        className="emi-cta-button"
                    >
                        Explore Properties
                        <ArrowRightOutlined />
                    </Link>
                </motion.div>

            </section>

        </main>
    );
}

export default EmiPage;

