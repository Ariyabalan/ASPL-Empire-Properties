import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SITE_IMAGES } from "../data/constants/siteImages";
import { WHY_ASPL } from "../data/constants/homeData.js";
import {
    CheckCircleOutlined,
    SafetyCertificateOutlined,
    BankOutlined,
    StarOutlined,
    TeamOutlined,
    EnvironmentOutlined,
    ArrowRightOutlined,
    CalendarOutlined,
    TrophyOutlined,
} from "@ant-design/icons";

/* =====================================================
   ICON MAP
===================================================== */
const iconMap = {
    CheckCircleOutlined: <CheckCircleOutlined />,
    SafetyOutlined: <SafetyCertificateOutlined />,
    BankOutlined: <BankOutlined />,
    StarOutlined: <StarOutlined />,
    TeamOutlined: <TeamOutlined />,
    EnvironmentOutlined: <EnvironmentOutlined />,
};

/* =====================================================
   ANIMATIONS
===================================================== */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: "easeOut" },
    },
};

const stagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

function About() {
    return (
        <main className="about-page">
            {/* ─── 1. HERO BANNER (SYNCED WITH HOME & CONTACT) ─── */}
            <section className="about-hero">
                <div
                    className="about-hero-bg"
                    style={{ backgroundImage: `url(${SITE_IMAGES.ABOUT_HERO})` }}
                />
                <div className="about-hero-overlay" />
                <div className="about-hero-glow about-hero-glow-one" />
                <div className="about-hero-glow about-hero-glow-two" />

                <div className="about-container">
                    <motion.div
                        className="about-hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        <motion.div variants={itemAnimation} className="about-hero-badge">
                            <span className="about-badge-dot" />
                            BUILDING BENGALURU SINCE 2009
                        </motion.div>

                        <motion.h1 variants={itemAnimation}>
                            Building places people are{" "}
                            <span className="logo-gradient-text">
                                proud to call home.
                            </span>
                        </motion.h1>

                        <motion.p variants={itemAnimation} className="about-hero-desc">
                            ASPL Empire Properties combines strategic growth corridors,
                            meticulous engineering, and verified legal transparency to
                            create lasting value and vibrant communities across Bengaluru.
                        </motion.p>

                        <motion.div variants={itemAnimation} className="about-hero-stats">
                            <div className="about-stat-pill">
                                <strong>15+ Years</strong>
                                <span>Industry Excellence</span>
                            </div>
                            <div className="about-stat-pill">
                                <strong>6+ Developments</strong>
                                <span>Prime Corridors</span>
                            </div>
                            <div className="about-stat-pill">
                                <strong>1,200+ Families</strong>
                                <span>Happy Homeowners</span>
                            </div>
                            <div className="about-stat-pill">
                                <strong>100% RERA</strong>
                                <span>Verified Clear Titles</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─── 2. INTRO / MISSION ─────────────────────────── */}
            <section className="about-intro-section">
                <div className="about-container">
                    <div className="about-intro-grid">
                        <motion.div
                            className="about-intro-heading"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                        >
                            <span className="about-kicker">OUR MISSION</span>
                            <h2>
                                We build more
                                <br />
                                <span>than just structures.</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            className="about-intro-content"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                        >
                            <p className="about-lead">
                                ASPL Empire Properties was founded with a clear
                                belief: buying a home should feel exciting,
                                transparent, and empowering — never stressful or uncertain.
                            </p>
                            <p>
                                We design living spaces around the way modern families
                                live. From handpicking growth corridors near Bengaluru's
                                major tech hubs to engineering energy-efficient floor plans,
                                our focus is creating long-term personal and financial value.
                            </p>
                            <p>
                                Every apartment, villa, and plotted development is
                                carefully considered for its connectivity, livability,
                                structural durability, and community atmosphere.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── 3. BRAND STATEMENT ─────────────────────────── */}
            <section className="about-statement-section">
                <div className="about-container">
                    <motion.div
                        className="about-statement-card"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="about-statement-quote">“</span>
                        <h2>
                            A home is not simply an investment.
                            <br />
                            <span className="logo-gradient-text">
                                It is where your life unfolds.
                            </span>
                        </h2>
                        <p>
                            That is why we place people, integrity, and uncompromising
                            quality at the heart of everything we construct.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── 4. OUR VALUES (THE ASPL DIFFERENCE) ────────── */}
            <section className="about-values-section">
                <div className="about-container">
                    <div className="about-section-head text-center">
                        <span className="about-kicker">WHAT WE STAND FOR</span>
                        <h2>The ASPL Quality Benchmark</h2>
                        <p>
                            The core principles engineered into every project we build
                            and every client relationship we foster.
                        </p>
                    </div>

                    <motion.div
                        className="about-values-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={stagger}
                    >
                        {WHY_ASPL.map((item, index) => (
                            <motion.article
                                key={item.id}
                                variants={itemAnimation}
                                className="about-value-card"
                            >
                                <div className="about-value-top">
                                    <div className="about-value-icon">
                                        {iconMap[item.icon]}
                                    </div>
                                    <span className="about-value-num">0{index + 1}</span>
                                </div>
                                <h3>{item.heading}</h3>
                                <p>{item.description}</p>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── 5. OUR JOURNEY (2009 TO TODAY) ─────────────── */}
            <section className="about-journey-section">
                <div className="about-container">
                    <div className="about-journey-grid">
                        <motion.div
                            className="about-journey-copy"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.25 }}
                            variants={fadeUp}
                        >
                            <span className="about-kicker">OUR EVOLUTION</span>
                            <h2>
                                From a single vision
                                <br />
                                <span>to Bengaluru's trusted brand.</span>
                            </h2>
                            <p>
                                Founded in 2009, ASPL Empire Properties began with
                                a boutique residential enclave in Whitefield. Over the
                                past 15 years, our footprint has expanded in tandem
                                with Bengaluru's most sought-after corridors.
                            </p>
                            <p>
                                Today, our portfolio includes landmark high-rises,
                                gated villa communities, and plotted developments in
                                Whitefield, Hebbal, Electronic City, Sarjapur Road,
                                and Devanahalli.
                            </p>

                            <Link to="/properties" className="btn-primary" style={{ marginTop: 24 }}>
                                Explore Our Portfolio <ArrowRightOutlined />
                            </Link>
                        </motion.div>

                        <motion.div
                            className="about-timeline-cards"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={stagger}
                        >
                            <motion.div className="about-timeline-item" variants={itemAnimation}>
                                <div className="timeline-badge">2009</div>
                                <div>
                                    <h3>The Foundation</h3>
                                    <p>
                                        Inception of ASPL Empire Properties with our first
                                        residential enclave in Whitefield, pioneering zero-compromise construction.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div className="about-timeline-item" variants={itemAnimation}>
                                <div className="timeline-badge">2016</div>
                                <div>
                                    <h3>Corridor Expansion</h3>
                                    <p>
                                        Expanded into North and South Bengaluru, launching premium
                                        apartment towers in Hebbal and plotted communities in Devanahalli.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div className="about-timeline-item" variants={itemAnimation}>
                                <div className="timeline-badge">TODAY</div>
                                <div>
                                    <h3>Landmark Living</h3>
                                    <p>
                                        Developing 1.8M+ sq. ft. of residential and commercial spaces
                                        with 100% RERA compliance and over 1,200 proud homeowner families.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── 6. TRACK RECORD & PROMISE ──────────────────── */}
            <section className="about-human-section">
                <div className="about-container">
                    <div className="about-human-grid">
                        <motion.div
                            className="about-human-image"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <img
                                src={SITE_IMAGES.ABOUT_HERO}
                                alt="ASPL Empire Properties"
                                loading="lazy"
                            />
                            <div className="about-image-label">
                                <span>ASPL EMPIRE PROPERTIES</span>
                                <strong>Engineered with Integrity.</strong>
                            </div>
                        </motion.div>

                        <motion.div
                            className="about-human-content"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.25 }}
                            variants={fadeUp}
                        >
                            <span className="about-kicker">OUR PROMISE</span>
                            <h2>Real estate built on genuine transparency.</h2>
                            <p>
                                We believe long-lasting trust is never won through marketing.
                                It is proven through verified land titles, clear payment
                                timelines, and delivering ahead of schedule.
                            </p>

                            <div className="about-promise-grid">
                                <div className="promise-item">
                                    <CheckCircleOutlined className="promise-icon" />
                                    <span>100% Clear Titles & RERA Disclosures</span>
                                </div>
                                <div className="promise-item">
                                    <CheckCircleOutlined className="promise-icon" />
                                    <span>Zero Hidden Charges & Transparent Pricing</span>
                                </div>
                                <div className="promise-item">
                                    <CheckCircleOutlined className="promise-icon" />
                                    <span>Grade-A Construction Materials & Testing</span>
                                </div>
                                <div className="promise-item">
                                    <CheckCircleOutlined className="promise-icon" />
                                    <span>Dedicated Post-Handover Facility Support</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── 7. FINAL CALLOUT (SYNCED FULL WIDTH) ───────── */}
            <section className="about-cta-section">
                <div className="about-container">
                    <motion.div
                        className="about-cta-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                    >
                        <motion.span variants={itemAnimation} className="about-kicker">
                            READY TO BEGIN?
                        </motion.span>
                        <motion.h2 variants={itemAnimation}>
                            Your next chapter starts with ASPL.
                        </motion.h2>
                        <motion.p variants={itemAnimation}>
                            Explore our ongoing projects across Bengaluru or book a
                            complimentary VIP site visit with our senior consultants.
                        </motion.p>
                        <motion.div variants={itemAnimation} className="about-cta-actions">
                            <Link to="/properties" className="btn-primary" style={{ padding: "16px 32px" }}>
                                Explore Properties <ArrowRightOutlined />
                            </Link>
                            <Link to="/site-visit" className="btn-secondary" style={{ padding: "15px 28px" }}>
                                Book a Site Visit
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default About;
