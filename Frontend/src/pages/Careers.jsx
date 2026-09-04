import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowRightOutlined,
    EnvironmentOutlined,
    ClockCircleOutlined,
    TeamOutlined,
    RiseOutlined,
    SafetyCertificateOutlined,
    CheckOutlined,
} from "@ant-design/icons";
import { careers } from "../data/contents/careers";

function Careers() {
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.55,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.main
            className="careers-page"
            initial="hidden"
            animate="visible"
            variants={container}
        >
            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="careers-hero">
                <div className="careers-hero-pattern" />

                <div className="careers-container careers-hero-content">
                    <motion.div
                        className="careers-eyebrow"
                        variants={item}
                    >
                        <TeamOutlined />
                        <span>JOIN THE ASPL TEAM</span>
                    </motion.div>

                    <motion.h1 variants={item}>
                        Build a career
                        <span> with purpose.</span>
                    </motion.h1>

                    <motion.p variants={item}>
                        Join a team that believes great places begin with
                        great people. Explore opportunities to grow, create
                        and make an impact with ASPL.
                    </motion.p>

                    <motion.a
                        href="#open-positions"
                        className="careers-hero-btn"
                        variants={item}
                    >
                        View Open Positions
                        <ArrowRightOutlined />
                    </motion.a>
                </div>
            </section>

            {/* =====================================================
                INTRO
            ===================================================== */}
            <section className="careers-intro">
                <div className="careers-container">
                    <div className="careers-intro-grid">
                        <motion.div variants={item}>
                            <span className="careers-section-label">
                                LIFE AT ASPL
                            </span>

                            <h2>
                                Grow with a team
                                <span> that builds.</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            className="careers-intro-copy"
                            variants={item}
                        >
                            <p>
                                Real estate is about more than buildings. It
                                is about people, ideas and the determination
                                to create something meaningful.
                            </p>

                            <p>
                                At ASPL, we encourage ownership, collaboration
                                and continuous learning while giving our
                                people the opportunity to grow alongside the
                                business.
                            </p>
                        </motion.div>
                    </div>

                    {/* =================================================
                        VALUES
                    ================================================= */}
                    <motion.div
                        className="careers-values"
                        variants={container}
                    >
                        <motion.div
                            className="careers-value"
                            variants={item}
                        >
                            <div className="careers-value-icon">
                                <RiseOutlined />
                            </div>

                            <h3>Grow</h3>

                            <p>
                                Build your skills through meaningful
                                responsibilities and continuous learning.
                            </p>
                        </motion.div>

                        <motion.div
                            className="careers-value"
                            variants={item}
                        >
                            <div className="careers-value-icon">
                                <TeamOutlined />
                            </div>

                            <h3>Collaborate</h3>

                            <p>
                                Work alongside talented people who value
                                ideas, teamwork and shared success.
                            </p>
                        </motion.div>

                        <motion.div
                            className="careers-value"
                            variants={item}
                        >
                            <div className="careers-value-icon">
                                <SafetyCertificateOutlined />
                            </div>

                            <h3>Make an Impact</h3>

                            <p>
                                Contribute to projects that shape communities
                                and create lasting value.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                OPEN POSITIONS
            ===================================================== */}
            <section
                className="careers-positions"
                id="open-positions"
            >
                <div className="careers-container">
                    <motion.div
                        className="careers-section-heading"
                        variants={item}
                    >
                        <div>
                            <span className="careers-section-label">
                                OPPORTUNITIES
                            </span>

                            <h2>
                                Find your next
                                <span> opportunity.</span>
                            </h2>
                        </div>

                        <p>
                            Explore our current openings and discover where
                            your skills can make a difference.
                        </p>
                    </motion.div>

                    <motion.div
                        className="careers-list"
                        variants={container}
                    >
                        {careers.map((career, index) => (
                            <motion.article
                                className="career-job"
                                key={career.id}
                                variants={item}
                                whileHover={{
                                    y: -5,
                                }}
                            >
                                <div className="career-job-number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="career-job-main">
                                    <div className="career-job-category">
                                        {career.category}
                                    </div>

                                    <h3>{career.title}</h3>

                                    <div className="career-job-meta">
                                        <span>
                                            <EnvironmentOutlined />
                                            {career.location}
                                        </span>

                                        <span>
                                            <ClockCircleOutlined />
                                            {career.type}
                                        </span>
                                    </div>

                                    <p>{career.description}</p>
                                </div>

                                <div className="career-job-action">
                                    <button
                                        type="button"
                                        className="career-apply-btn"
                                    >
                                        Apply Now
                                        <ArrowRightOutlined />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {careers.length === 0 && (
                        <motion.div
                            className="careers-empty"
                            variants={item}
                        >
                            <TeamOutlined />

                            <h3>No open positions right now</h3>

                            <p>
                                We don't have any active openings at the
                                moment. Please check back soon.
                            </p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* =====================================================
                BENEFITS
            ===================================================== */}
            <section className="careers-benefits">
                <div className="careers-container">
                    <motion.div
                        className="careers-benefits-grid"
                        variants={container}
                    >
                        <motion.div
                            className="careers-benefits-intro"
                            variants={item}
                        >
                            <span className="careers-section-label">
                                WHY ASPL
                            </span>

                            <h2>
                                More than a job.
                                <span> A place to grow.</span>
                            </h2>

                            <p>
                                We want our people to feel challenged,
                                supported and proud of the work they do.
                            </p>
                        </motion.div>

                        <motion.div
                            className="careers-benefit-list"
                            variants={container}
                        >
                            <motion.div
                                className="careers-benefit"
                                variants={item}
                            >
                                <CheckOutlined />
                                <div>
                                    <h3>Meaningful Work</h3>
                                    <p>
                                        Work on projects with real-world
                                        impact.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="careers-benefit"
                                variants={item}
                            >
                                <CheckOutlined />
                                <div>
                                    <h3>Learning & Growth</h3>
                                    <p>
                                        Develop your expertise through
                                        hands-on experience.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="careers-benefit"
                                variants={item}
                            >
                                <CheckOutlined />
                                <div>
                                    <h3>Collaborative Culture</h3>
                                    <p>
                                        Be part of a team where ideas and
                                        contribution matter.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="careers-benefit"
                                variants={item}
                            >
                                <CheckOutlined />
                                <div>
                                    <h3>Long-Term Opportunity</h3>
                                    <p>
                                        Build a career with room to evolve
                                        and grow.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                CTA
            ===================================================== */}
            <section className="careers-cta">
                <div className="careers-container">
                    <motion.div
                        className="careers-cta-content"
                        variants={item}
                    >
                        <span className="careers-section-label">
                            DON'T SEE THE RIGHT ROLE?
                        </span>

                        <h2>
                            We are always looking for
                            <span> great people.</span>
                        </h2>

                        <p>
                            Even if your ideal position isn't listed, we'd
                            still love to hear from talented people who want
                            to build something meaningful.
                        </p>

                        <Link
                            to="/contact"
                            className="careers-primary-btn"
                        >
                            Get in Touch
                            <ArrowRightOutlined />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </motion.main>
    );
}

export default Careers;

