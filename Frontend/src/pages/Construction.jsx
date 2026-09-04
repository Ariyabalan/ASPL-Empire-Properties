import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowRightOutlined,
    CalendarOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    EnvironmentOutlined,
    BuildOutlined,
} from "@ant-design/icons";
import { projectsIndex } from "../data/projects/projectsIndex";

function Construction() {
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

    const getProgressLabel = (percent) => {
        if (percent >= 100) return "Completed";
        if (percent >= 75) return "Finishing Stage";
        if (percent >= 50) return "Construction in Progress";
        if (percent >= 25) return "Development Stage";
        return "Early Construction";
    };

    const completedProjects = projectsIndex.filter(
        (project) => project.construction.percentComplete >= 100
    ).length;

    const activeProjects = projectsIndex.length - completedProjects;

    return (
        <motion.main
            className="construction-page"
            initial="hidden"
            animate="visible"
            variants={container}
        >
            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="construction-hero">
                <div className="construction-hero-overlay" />

                <div className="construction-container construction-hero-content">
                    <motion.div
                        className="construction-eyebrow"
                        variants={item}
                    >
                        <BuildOutlined />
                        <span>BUILDING WITH PURPOSE</span>
                    </motion.div>

                    <motion.h1 variants={item}>
                        Construction
                        <span> Updates</span>
                    </motion.h1>

                    <motion.p variants={item}>
                        Follow the progress of our developments as we turn
                        carefully planned communities into places you can
                        call home.
                    </motion.p>

                    <motion.div
                        className="construction-hero-actions"
                        variants={item}
                    >
                        <Link
                            to="/properties"
                            className="construction-primary-btn"
                        >
                            Explore Properties
                            <ArrowRightOutlined />
                        </Link>

                        <Link
                            to="/site-visit"
                            className="construction-secondary-btn"
                        >
                            Schedule a Visit
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                INTRO
            ===================================================== */}
            <section className="construction-intro">
                <div className="construction-container">
                    <div className="construction-intro-grid">
                        <motion.div variants={item}>
                            <span className="construction-section-label">
                                PROJECT PROGRESS
                            </span>

                            <h2>
                                Transparency at
                                <span> every stage.</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            className="construction-intro-copy"
                            variants={item}
                        >
                            <p>
                                From groundwork to final finishing, we keep
                                our project progress visible so you can stay
                                informed about the journey behind your future
                                home.
                            </p>
                        </motion.div>
                    </div>

                    {/* =================================================
                        STATS
                    ================================================= */}
                    <motion.div
                        className="construction-stats"
                        variants={container}
                    >
                        <motion.div
                            className="construction-stat"
                            variants={item}
                        >
                            <span className="construction-stat-number">
                                {projectsIndex.length}
                            </span>

                            <span className="construction-stat-label">
                                Total Projects
                            </span>
                        </motion.div>

                        <motion.div
                            className="construction-stat"
                            variants={item}
                        >
                            <span className="construction-stat-number">
                                {activeProjects}
                            </span>

                            <span className="construction-stat-label">
                                Ongoing Projects
                            </span>
                        </motion.div>

                        <motion.div
                            className="construction-stat"
                            variants={item}
                        >
                            <span className="construction-stat-number">
                                {completedProjects}
                            </span>

                            <span className="construction-stat-label">
                                Completed Projects
                            </span>
                        </motion.div>

                        <motion.div
                            className="construction-stat"
                            variants={item}
                        >
                            <span className="construction-stat-number">
                                100%
                            </span>

                            <span className="construction-stat-label">
                                Progress Visibility
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                PROJECTS
            ===================================================== */}
            <section className="construction-projects">
                <div className="construction-container">
                    <motion.div
                        className="construction-section-heading"
                        variants={item}
                    >
                        <div>
                            <span className="construction-section-label">
                                LIVE DEVELOPMENTS
                            </span>

                            <h2>
                                Track our
                                <span> progress.</span>
                            </h2>
                        </div>

                        <p>
                            Explore the latest construction status of our
                            residential developments.
                        </p>
                    </motion.div>

                    <motion.div
                        className="construction-grid"
                        variants={container}
                    >
                        {projectsIndex.map((project, index) => {
                            const progress =
                                project.construction.percentComplete;

                            const stage = getProgressLabel(progress);

                            return (
                                <motion.article
                                    className="construction-card"
                                    key={project.id}
                                    variants={item}
                                    whileHover={{
                                        y: -8,
                                    }}
                                >
                                    {/* Card Top */}
                                    <div className="construction-card-top">
                                        <span className="construction-card-number">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span
                                            className={`construction-status ${
                                                progress >= 100
                                                    ? "completed"
                                                    : "ongoing"
                                            }`}
                                        >
                                            {progress >= 100 ? (
                                                <CheckCircleOutlined />
                                            ) : (
                                                <ClockCircleOutlined />
                                            )}

                                            {stage}
                                        </span>
                                    </div>

                                    {/* Project Name */}
                                    <h3>{project.name}</h3>

                                    {/* Location */}
                                    {project.location && (
                                        <div className="construction-location">
                                            <EnvironmentOutlined />
                                            <span>{project.location}</span>
                                        </div>
                                    )}

                                    {/* Current Stage */}
                                    <div className="construction-stage">
                                        <span>Current Stage</span>

                                        <strong>
                                            {project.construction.currentStage}
                                        </strong>
                                    </div>

                                    {/* Progress */}
                                    <div className="construction-progress-wrapper">
                                        <div className="construction-progress-header">
                                            <span>Construction Progress</span>

                                            <strong>{progress}%</strong>
                                        </div>

                                        <div className="construction-progress">
                                            <motion.span
                                                initial={{
                                                    width: 0,
                                                }}
                                                whileInView={{
                                                    width: `${progress}%`,
                                                }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.4,
                                                }}
                                                transition={{
                                                    duration: 1.2,
                                                    delay: 0.15,
                                                    ease: "easeOut",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Completion */}
                                    <div className="construction-completion">
                                        <div>
                                            <CalendarOutlined />

                                            <span>
                                                Expected Completion
                                            </span>
                                        </div>

                                        <strong>
                                            {
                                                project.construction
                                                    .expectedCompletion
                                            }
                                        </strong>
                                    </div>

                                    {/* Link */}
                                    <Link
                                        to={`/properties/${project.slug}`}
                                        className="construction-view-link"
                                    >
                                        <span>View Project</span>

                                        <ArrowRightOutlined />
                                    </Link>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                PROCESS
            ===================================================== */}
            <section className="construction-process">
                <div className="construction-container">
                    <motion.div
                        className="construction-section-heading centered"
                        variants={item}
                    >
                        <span className="construction-section-label">
                            OUR APPROACH
                        </span>

                        <h2>
                            Built through
                            <span> every milestone.</span>
                        </h2>

                        <p>
                            Every project moves through a carefully monitored
                            journey from planning to completion.
                        </p>
                    </motion.div>

                    <motion.div
                        className="construction-milestones"
                        variants={container}
                    >
                        <motion.div
                            className="construction-milestone"
                            variants={item}
                        >
                            <span>01</span>

                            <div>
                                <h3>Planning</h3>
                                <p>
                                    Detailed planning, approvals and
                                    development preparation.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="construction-milestone"
                            variants={item}
                        >
                            <span>02</span>

                            <div>
                                <h3>Structure</h3>
                                <p>
                                    Strong foundations and structural
                                    development take shape.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="construction-milestone"
                            variants={item}
                        >
                            <span>03</span>

                            <div>
                                <h3>Finishing</h3>
                                <p>
                                    Interior, exterior and community details
                                    are completed.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="construction-milestone"
                            variants={item}
                        >
                            <span>04</span>

                            <div>
                                <h3>Handover</h3>
                                <p>
                                    Final checks are completed before your new
                                    home is ready.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                CTA
            ===================================================== */}
            <section className="construction-cta">
                <div className="construction-container">
                    <motion.div
                        className="construction-cta-content"
                        variants={item}
                    >
                        <span className="construction-section-label">
                            FIND YOUR NEXT HOME
                        </span>

                        <h2>
                            Interested in one of
                            <span> our projects?</span>
                        </h2>

                        <p>
                            Explore project details, compare properties or
                            schedule a site visit with our team.
                        </p>

                        <div className="construction-cta-actions">
                            <Link
                                to="/properties"
                                className="construction-primary-btn"
                            >
                                View Properties
                                <ArrowRightOutlined />
                            </Link>

                            <Link
                                to="/contact"
                                className="construction-cta-contact"
                            >
                                Talk to our team
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.main>
    );
}

export default Construction;

