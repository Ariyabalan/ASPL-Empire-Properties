import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
    CheckCircleOutlined,
    SafetyCertificateOutlined,
    BankOutlined,
    StarOutlined,
    TeamOutlined,
    EnvironmentOutlined,
    ArrowRightOutlined,
    SearchOutlined,
    PlayCircleOutlined,
} from "@ant-design/icons";

import { getFeaturedProjects } from "../data/projects/projectsIndex";
import { FEATURED_LOCATIONS, LOCATIONS } from "../data/constants/locations";
import {
    HOME_CATEGORIES,COMPANY_STATS,WHY_ASPL,BUYING_JOURNEY
} from "../data/constants/homedata";
import { testimonials } from "../data/contents/testimonials";
import { SITE_IMAGES } from "../data/constants/siteImages";
import {
    PROPERTY_CATEGORIES,
    PROJECT_STATUS_OPTIONS,
} from "../data/constants/filterOptions";

import PropertyCard from "../components/ui/PropertyCard";

/* =====================================================
   ANIMATION CONFIG
===================================================== */

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: "easeOut",
        },
    },
};

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardAnimation = {
    hidden: {
        opacity: 0,
        y: 25,
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
   STAT COUNTER
===================================================== */

function StatCounter({ value }) {
    const ref = useRef(null);

    const inView = useInView(ref, {
        once: true,
        amount: 0.5,
    });

    return (
        <motion.span
            ref={ref}
            initial={{
                opacity: 0,
                y: 15,
            }}
            animate={
                inView
                    ? {
                          opacity: 1,
                          y: 0,
                      }
                    : {}
            }
            transition={{
                duration: 0.7,
                ease: "easeOut",
            }}
            className="home-stat-value"
        >
            {value}
        </motion.span>
    );
}

/* =====================================================
   HOME PAGE
===================================================== */

function Home() {
    const navigate = useNavigate();

    const [searchLocation, setSearchLocation] = useState("");
    const [searchCategory, setSearchCategory] = useState("");
    const [searchStatus, setSearchStatus] = useState("");
    const [activeCategory, setActiveCategory] = useState("");

    const featuredProjects = getFeaturedProjects().slice(0, 3);

    /* -------------------------------------------------
       SEARCH
    ------------------------------------------------- */

    const handleSearch = (e) => {
        e.preventDefault();

        const params = new URLSearchParams();

        if (searchLocation) {
            params.set("location", searchLocation);
        }

        if (searchCategory) {
            params.set("category", searchCategory);
        }

        if (searchStatus) {
            params.set("status", searchStatus);
        }

        navigate(
            `/properties${params.toString() ? `?${params.toString()}` : ""}`
        );
    };

    /* =================================================
       RENDER
    ================================================= */

    return (
        <main className="home-page">

            {/* =================================================
                1. HERO
            ================================================= */}

            <section className="home-hero">

                {/* Background */}
                <div
                    className="home-hero-bg"
                    style={{
                        backgroundImage: `url(${SITE_IMAGES.HOMEPAGE_HERO})`,
                    }}
                />

                <div className="home-hero-overlay" />

                {/* Decorative glow */}
                <div className="home-hero-glow home-hero-glow-one" />
                <div className="home-hero-glow home-hero-glow-two" />

                <div className="home-container home-hero-content">

                    <motion.div
                        className="home-hero-copy"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >

                        {/* Eyebrow */}
                        <motion.div
                            variants={cardAnimation}
                            className="home-hero-badge"
                        >
                            <span className="home-badge-dot" />
                            Bengaluru's Trusted Property Partner
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={cardAnimation}
                            className="home-hero-title"
                        >
                            Find a place
                            <br />
                            <span>love to call home.</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={cardAnimation}
                            className="home-hero-description"
                        >
                            Discover thoughtfully designed homes, premium
                            residences and high-growth investment properties
                            across Bengaluru.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            variants={cardAnimation}
                            className="home-hero-actions"
                        >
                            <Link
                                to="/properties"
                                className="home-btn home-btn-primary"
                            >
                                Explore Properties
                                <ArrowRightOutlined />
                            </Link>

                            <Link
                                to="/site-visit"
                                className="home-btn home-btn-glass"
                            >
                                <PlayCircleOutlined />
                                Book a Site Visit
                            </Link>
                        </motion.div>

                        {/* Trust line */}
                        <motion.div
                            variants={cardAnimation}
                            className="home-hero-trust"
                        >
                            <div className="home-trust-avatars">
                                <span>R</span>
                                <span>A</span>
                                <span>S</span>
                                <span>+</span>
                            </div>

                            <div>
                                <div className="home-trust-stars">
                                    ★★★★★
                                </div>
                                <p>
                                    Trusted by families & investors
                                </p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>

                {/* Scroll */}
                <motion.div
                    className="home-scroll-indicator"
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1.5,
                    }}
                >
                    <span>SCROLL</span>
                    <motion.i
                        animate={{
                            y: [0, 7, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                        }}
                    >
                        ↓
                    </motion.i>
                </motion.div>
            </section>

            {/* =================================================
                2. FLOATING SEARCH
            ================================================= */}

            <section className="home-search-wrapper">

                <div className="home-container">

                    <motion.div
                        className="home-search-card"
                        initial={{
                            opacity: 0,
                            y: 45,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                    >

                        <div className="home-search-header">
                            <div>
                                <span className="home-section-kicker">
                                    PROPERTY SEARCH
                                </span>

                                <h2>
                                    What are you looking for?
                                </h2>
                            </div>

                            <span className="home-search-location">
                                <EnvironmentOutlined />
                                Bengaluru
                            </span>
                        </div>

                        <form
                            onSubmit={handleSearch}
                            className="home-search-form"
                        >

                            <div className="home-search-field">
                                <label>Location</label>

                                <select
                                    value={searchLocation}
                                    onChange={(e) =>
                                        setSearchLocation(e.target.value)
                                    }
                                >
                                    <option value="">
                                        All Locations
                                    </option>

                                    {LOCATIONS.map((location) => (
                                        <option
                                            key={location}
                                            value={location}
                                        >
                                            {location}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="home-search-field">
                                <label>Property Type</label>

                                <select
                                    value={searchCategory}
                                    onChange={(e) =>
                                        setSearchCategory(e.target.value)
                                    }
                                >
                                    <option value="">
                                        All Types
                                    </option>

                                    {PROPERTY_CATEGORIES.map((category) => (
                                        <option
                                            key={category}
                                            value={category}
                                        >
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="home-search-field">
                                <label>Status</label>

                                <select
                                    value={searchStatus}
                                    onChange={(e) =>
                                        setSearchStatus(e.target.value)
                                    }
                                >
                                    <option value="">
                                        Any Status
                                    </option>

                                    {PROJECT_STATUS_OPTIONS.map((status) => (
                                        <option
                                            key={status}
                                            value={status}
                                        >
                                            {status}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="home-search-button"
                            >
                                <SearchOutlined />
                                <span>Search</span>
                            </button>

                        </form>

                        <div className="home-category-list">

                            {HOME_CATEGORIES.map((category) => (
                                <button
                                    key={category.id}
                                    className={
                                        activeCategory === category.value
                                            ? "home-category active"
                                            : "home-category"
                                    }
                                    onClick={() => {
                                        setActiveCategory(category.value);

                                        navigate(
                                            `/properties${
                                                category.value
                                                    ? `?category=${category.value}`
                                                    : ""
                                            }`
                                        );
                                    }}
                                >
                                    {category.label}
                                </button>
                            ))}

                        </div>

                    </motion.div>

                </div>

            </section>

            {/* =================================================
                3. COMPANY STATS
            ================================================= */}

            <section className="home-stats-section">

                <div className="home-container">

                    <motion.div
                        className="home-stats-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        variants={stagger}
                    >

                        {COMPANY_STATS.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                variants={cardAnimation}
                                className="home-stat-item"
                            >

                                <StatCounter value={stat.value} />

                                <p>
                                    {stat.label}
                                </p>

                                {index !== COMPANY_STATS.length - 1 && (
                                    <span className="home-stat-divider" />
                                )}

                            </motion.div>
                        ))}

                    </motion.div>

                </div>

            </section>

            {/* =================================================
                4. FEATURED PROJECTS
            ================================================= */}

            <section className="home-section">

                <div className="home-container">

                    <motion.div
                        className="home-section-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                        }}
                        variants={fadeUp}
                    >

                        <div>
                            <span className="home-section-kicker">
                                CURATED FOR YOU
                            </span>

                            <h2>
                                Featured Projects
                            </h2>
                        </div>

                        <Link
                            to="/properties"
                            className="home-view-link"
                        >
                            View all projects
                            <ArrowRightOutlined />
                        </Link>

                    </motion.div>

                    <p className="home-section-description">
                        Explore our handpicked developments in some of
                        Bengaluru's most promising neighbourhoods.
                    </p>

                    <motion.div
                        className="home-properties-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        variants={stagger}
                    >

                        {featuredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={cardAnimation}
                                whileHover={{
                                    y: -8,
                                }}
                                transition={{
                                    duration: 0.25,
                                }}
                            >
                                <PropertyCard p={project} />
                            </motion.div>
                        ))}

                    </motion.div>

                </div>

            </section>

            {/* =================================================
                5. POPULAR LOCATIONS
            ================================================= */}

            <section className="home-locations-section">

                <div className="home-container">

                    <div className="home-section-heading">

                        <div>
                            <span className="home-section-kicker">
                                EXPLORE BENGALURU
                            </span>

                            <h2>
                                Live where the city is going
                            </h2>
                        </div>

                        <Link
                            to="/properties"
                            className="home-view-link"
                        >
                            Explore locations
                            <ArrowRightOutlined />
                        </Link>

                    </div>

                    <p className="home-section-description">
                        Carefully selected locations offering connectivity,
                        lifestyle and strong long-term potential.
                    </p>

                    <motion.div
                        className="home-location-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        variants={stagger}
                    >

                        {FEATURED_LOCATIONS.map((location) => (
                            <motion.div
                                key={location.id}
                                variants={cardAnimation}
                            >
                                <Link
                                    to={`/properties?location=${encodeURIComponent(
                                        location.name
                                    )}`}
                                    className="home-location-card"
                                >

                                    <img
                                        src={location.image}
                                        alt={location.name}
                                        loading="lazy"
                                    />

                                    <div className="home-location-overlay" />

                                    <div className="home-location-content">

                                        <span>
                                            {location.tagline}
                                        </span>

                                        <h3>
                                            {location.name}
                                        </h3>

                                        <div>
                                            Explore properties
                                            <ArrowRightOutlined />
                                        </div>

                                    </div>

                                </Link>
                            </motion.div>
                        ))}

                    </motion.div>

                </div>

            </section>

            {/* =================================================
                6. WHY ASPL
            ================================================= */}

            <section className="home-why-section">

                <div className="home-container">

                    <div className="home-why-layout">

                        {/* Left */}
                        <motion.div
                            className="home-why-intro"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            variants={fadeUp}
                        >

                            <span className="home-section-kicker">
                                WHY ASPL
                            </span>

                            <h2>
                                A better way
                                <br />
                                <span>to buy property.</span>
                            </h2>

                            <p>
                                Buying a property is one of life's biggest
                                decisions. We make the process simpler,
                                clearer and more trustworthy.
                            </p>

                            <Link
                                to="/about"
                                className="home-outline-button"
                            >
                                Discover ASPL
                                <ArrowRightOutlined />
                            </Link>

                        </motion.div>

                        {/* Cards */}
                        <motion.div
                            className="home-why-grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.1,
                            }}
                            variants={stagger}
                        >

                            {WHY_ASPL.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={cardAnimation}
                                    whileHover={{
                                        y: -5,
                                    }}
                                    className="home-why-card"
                                >

                                    <div className="home-why-icon">
                                        {iconMap[item.icon]}
                                    </div>

                                    <span className="home-why-number">
                                        0{item.id}
                                    </span>

                                    <h3>
                                        {item.heading}
                                    </h3>

                                    <p>
                                        {item.description}
                                    </p>

                                </motion.div>
                            ))}

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* =================================================
                7. BUYING JOURNEY
            ================================================= */}

            <section className="home-section">

                <div className="home-container">

                    <motion.div
                        className="home-centered-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                        }}
                        variants={fadeUp}
                    >

                        <span className="home-section-kicker">
                            SIMPLE & TRANSPARENT
                        </span>

                        <h2>
                            Your journey to a new home
                        </h2>

                        <p>
                            From your first search to receiving the keys,
                            our team is with you every step of the way.
                        </p>

                    </motion.div>

                    <motion.div
                        className="home-journey-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={stagger}
                    >

                        {BUYING_JOURNEY.map((step, index) => (
                            <motion.div
                                key={step.step}
                                variants={cardAnimation}
                                className="home-journey-item"
                            >

                                <div className="home-journey-top">

                                    <span className="home-journey-number">
                                        {String(step.step).padStart(2, "0")}
                                    </span>

                                    {index !== BUYING_JOURNEY.length - 1 && (
                                        <span className="home-journey-line" />
                                    )}

                                </div>

                                <h3>
                                    {step.heading}
                                </h3>

                                <p>
                                    {step.description}
                                </p>

                            </motion.div>
                        ))}

                    </motion.div>

                </div>

            </section>

            {/* =================================================
                8. TESTIMONIALS
            ================================================= */}

            <section className="home-testimonials-section">

                <div className="home-container">

                    <motion.div
                        className="home-centered-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                        }}
                        variants={fadeUp}
                    >

                        <span className="home-section-kicker">
                            CLIENT STORIES
                        </span>

                        <h2>
                            People who found their place
                        </h2>

                        <p>
                            Real experiences from homeowners and investors
                            who chose ASPL.
                        </p>

                    </motion.div>

                    <motion.div
                        className="home-testimonials-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        variants={stagger}
                    >

                        {testimonials.slice(0, 3).map((testimonial) => (
                            <motion.article
                                key={testimonial.id}
                                variants={cardAnimation}
                                whileHover={{
                                    y: -6,
                                }}
                                className="home-testimonial-card"
                            >

                                <div className="home-testimonial-stars">
                                    ★★★★★
                                </div>

                                <p className="home-testimonial-quote">
                                    “{testimonial.quote}”
                                </p>

                                <div className="home-testimonial-person">

                                    {testimonial.image &&
                                    testimonial.image.startsWith("http") ? (
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                        />
                                    ) : (
                                        <div className="home-testimonial-avatar">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                    )}

                                    <div>
                                        <strong>
                                            {testimonial.name}
                                        </strong>

                                        <span>
                                            {testimonial.persona}
                                        </span>
                                    </div>

                                </div>

                            </motion.article>
                        ))}

                    </motion.div>

                </div>

            </section>

            {/* =================================================
                9. FINAL CTA
            ================================================= */}

            <section className="home-final-cta">

                <div
                    className="home-final-cta-bg"
                    style={{
                        backgroundImage: `url(${SITE_IMAGES.CTA_BG})`,
                    }}
                />

                <div className="home-final-cta-overlay" />

                <motion.div
                    className="home-final-cta-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    variants={stagger}
                >

                    <motion.span
                        variants={cardAnimation}
                        className="home-section-kicker"
                    >
                        YOUR NEXT CHAPTER STARTS HERE
                    </motion.span>

                    <motion.h2 variants={cardAnimation}>
                        Let's find a place
                        <br />
                        you'll be proud to call home.
                    </motion.h2>

                    <motion.p variants={cardAnimation}>
                        Speak with our property advisors and discover
                        the right property for your lifestyle and goals.
                    </motion.p>

                    <motion.div
                        variants={cardAnimation}
                        className="home-final-actions"
                    >

                        <Link
                            to="/contact"
                            className="home-btn home-btn-primary"
                        >
                            Talk to an Advisor
                            <ArrowRightOutlined />
                        </Link>

                        <Link
                            to="/site-visit"
                            className="home-btn home-btn-glass"
                        >
                            Schedule Site Visit
                        </Link>

                    </motion.div>

                </motion.div>

            </section>

        </main>
    );
}

export default Home;

