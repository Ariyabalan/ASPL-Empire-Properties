import React, { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    SearchOutlined,
    SlidersOutlined,
    CloseOutlined,
    SortAscendingOutlined,
    ArrowDownOutlined,
    ArrowRightOutlined,
} from "@ant-design/icons";

import PropertyCard from "../components/ui/PropertyCard.jsx";
import { projectsIndex } from "../data/projects/projectsIndex";
import { LOCATIONS } from "../data/constants/locations";
import {
    PROPERTY_CATEGORIES,
    PROJECT_STATUS_OPTIONS,
} from "../data/constants/filterOptions.js";
import { SITE_IMAGES } from "../data/constants/siteImages";

function Properties() {
    const [params] = useSearchParams();

    const [q, setQ] = useState("");
    const [location, setLocation] = useState(params.get("location") || "");
    const [status, setStatus] = useState(params.get("status") || "");
    const [category, setCategory] = useState(params.get("category") || "");
    const [sort, setSort] = useState("");

    const list = useMemo(() => {
        let filtered = projectsIndex.filter(
            (p) =>
                (!q ||
                    p.name.toLowerCase().includes(q.toLowerCase()) ||
                    p.location.toLowerCase().includes(q.toLowerCase())) &&
                (!location || p.location === location) &&
                (!status || p.status === status) &&
                (!category || p.propertyCategory === category)
        );

        if (sort === "low") {
            filtered = [...filtered].sort(
                (a, b) => a.startingPrice - b.startingPrice
            );
        }

        if (sort === "high") {
            filtered = [...filtered].sort(
                (a, b) => b.startingPrice - a.startingPrice
            );
        }

        return filtered;
    }, [q, location, status, category, sort]);

    const hasFilters = q || location || status || category;

    const clearFilters = () => {
        setQ("");
        setLocation("");
        setStatus("");
        setCategory("");
        setSort("");
    };

    return (
        <main className="properties-page">

            {/* =====================================================
                HERO
            ====================================================== */}
            <section className="properties-hero">
                <div
                    className="properties-hero-bg"
                    style={{
                        backgroundImage: `url(${SITE_IMAGES.PROPERTIES_HERO})`,
                    }}
                />

                <div className="properties-hero-overlay" />
                <div className="properties-hero-glow properties-hero-glow-one" />
                <div className="properties-hero-glow properties-hero-glow-two" />

                <motion.div
                    className="properties-hero-content"
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.75,
                        ease: "easeOut",
                    }}
                >
                    <div className="properties-hero-badge">
                        <span className="properties-badge-dot" />
                        BENGALURU'S SIGNATURE PORTFOLIO
                    </div>

                    <h1>
                        Find a place
                        <br />
                        <span className="logo-gradient-text">worth coming home to.</span>
                    </h1>

                    <p>
                        Explore thoughtfully selected residential apartments, luxury
                        villas and plotted communities across Bengaluru's most promising locations.
                    </p>

                    <div className="properties-hero-meta">
                        <div>
                            <strong>{projectsIndex.length}+</strong>
                            <span>Developments</span>
                        </div>

                        <div className="properties-meta-divider" />

                        <div>
                            <strong>{LOCATIONS.length}+</strong>
                            <span>Prime Locations</span>
                        </div>

                        <div className="properties-meta-divider" />

                        <div>
                            <strong>100%</strong>
                            <span>RERA Compliant</span>
                        </div>
                    </div>
                </motion.div>

                <div className="properties-scroll-indicator">
                    <span>EXPLORE</span>
                    <ArrowDownOutlined />
                </div>
            </section>

            {/* =====================================================
                INTRO
            ====================================================== */}
            <section className="properties-intro">
                <motion.div
                    className="properties-intro-inner"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.65 }}
                >
                    <div>
                        <span className="properties-section-kicker">
                            OUR PORTFOLIO
                        </span>

                        <h2>
                            Spaces designed
                            <br />
                            <span>for what's next.</span>
                        </h2>
                    </div>

                    <p>
                        Whether you're searching for your first home,
                        upgrading for your family or investing in Bengaluru's
                        future, discover properties selected around location,
                        lifestyle and long-term value.
                    </p>
                </motion.div>
            </section>

            {/* =====================================================
                FILTER SECTION
            ====================================================== */}
            <section className="properties-list-section">

                <motion.div
                    className="properties-filter-panel"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55 }}
                >
                    <div className="properties-filter-heading">
                        <div className="properties-filter-title">
                            <div className="properties-filter-icon">
                                <SlidersOutlined />
                            </div>

                            <div>
                                <span>SEARCH & FILTER</span>
                                <h3>Find your property</h3>
                            </div>
                        </div>

                        {hasFilters && (
                            <button
                                type="button"
                                className="properties-clear-button"
                                onClick={clearFilters}
                            >
                                <CloseOutlined />
                                Clear all
                            </button>
                        )}
                    </div>

                    <div className="properties-filter-grid">

                        {/* Search */}
                        <div className="properties-search-field">
                            <label>Search</label>

                            <div className="properties-search-input">
                                <SearchOutlined />

                                <input
                                    type="text"
                                    placeholder="Project or location"
                                    value={q}
                                    onChange={(e) =>
                                        setQ(e.target.value)
                                    }
                                />

                                {q && (
                                    <button
                                        type="button"
                                        onClick={() => setQ("")}
                                        aria-label="Clear search"
                                    >
                                        <CloseOutlined />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Location */}
                        <div className="properties-select-field">
                            <label>Location</label>

                            <select
                                value={location}
                                onChange={(e) =>
                                    setLocation(e.target.value)
                                }
                            >
                                <option value="">All locations</option>

                                {LOCATIONS.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Category */}
                        <div className="properties-select-field">
                            <label>Property type</label>

                            <select
                                value={category}
                                onChange={(e) =>
                                    setCategory(e.target.value)
                                }
                            >
                                <option value="">All categories</option>

                                {PROPERTY_CATEGORIES.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Status */}
                        <div className="properties-select-field">
                            <label>Status</label>

                            <select
                                value={status}
                                onChange={(e) =>
                                    setStatus(e.target.value)
                                }
                            >
                                <option value="">All status</option>

                                {PROJECT_STATUS_OPTIONS.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </motion.div>

                {/* =================================================
                    RESULT TOOLBAR
                ================================================== */}
                <div className="properties-toolbar">

                    <motion.div
                        key={`${list.length}-${q}-${location}-${category}-${status}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <span className="properties-result-number">
                            {list.length}
                        </span>

                        <span className="properties-result-label">
                            {list.length === 1
                                ? "Property found"
                                : "Properties found"}
                        </span>
                    </motion.div>

                    <div className="properties-sort">
                        <SortAscendingOutlined />

                        <span>Sort by</span>

                        <select
                            value={sort}
                            onChange={(e) =>
                                setSort(e.target.value)
                            }
                        >
                            <option value="">Relevance</option>
                            <option value="low">
                                Price: Low to High
                            </option>
                            <option value="high">
                                Price: High to Low
                            </option>
                        </select>
                    </div>
                </div>

                {/* =================================================
                    ACTIVE FILTERS
                ================================================== */}
                <AnimatePresence>
                    {hasFilters && (
                        <motion.div
                            className="properties-active-filters"
                            initial={{
                                opacity: 0,
                                height: 0,
                            }}
                            animate={{
                                opacity: 1,
                                height: "auto",
                            }}
                            exit={{
                                opacity: 0,
                                height: 0,
                            }}
                        >
                            {q && (
                                <button
                                    type="button"
                                    onClick={() => setQ("")}
                                >
                                    Search: {q}
                                    <CloseOutlined />
                                </button>
                            )}

                            {location && (
                                <button
                                    type="button"
                                    onClick={() =>
                                        setLocation("")
                                    }
                                >
                                    {location}
                                    <CloseOutlined />
                                </button>
                            )}

                            {category && (
                                <button
                                    type="button"
                                    onClick={() =>
                                        setCategory("")
                                    }
                                >
                                    {category}
                                    <CloseOutlined />
                                </button>
                            )}

                            {status && (
                                <button
                                    type="button"
                                    onClick={() =>
                                        setStatus("")
                                    }
                                >
                                    {status}
                                    <CloseOutlined />
                                </button>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* =================================================
                    PROPERTY GRID
                ================================================== */}
                {list.length > 0 ? (
                    <motion.div
                        className="properties-grid"
                        layout
                    >
                        <AnimatePresence mode="popLayout">
                            {list.map((p, index) => (
                                <motion.div
                                    key={p.id}
                                    layout
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -20,
                                        scale: 0.97,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        delay: Math.min(
                                            index * 0.06,
                                            0.3
                                        ),
                                        ease: "easeOut",
                                    }}
                                >
                                    <PropertyCard p={p} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    /* =================================================
                       EMPTY STATE
                    ================================================== */
                    <motion.div
                        className="properties-empty"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                    >
                        <div className="properties-empty-icon">
                            <SearchOutlined />
                        </div>

                        <span>NO MATCHES FOUND</span>

                        <h3>
                            We couldn't find
                            <br />
                            the right property.
                        </h3>

                        <p>
                            Try adjusting your search criteria or
                            clearing some filters to explore more
                            properties.
                        </p>

                        <button
                            type="button"
                            onClick={clearFilters}
                        >
                            Clear all filters
                        </button>
                    </motion.div>
                )}
            </section>

            {/* VIP Site Visit Callout */}
            <section className="properties-sitevisit-strip">
                <div className="properties-strip-card">
                    <div>
                        <span className="properties-strip-tag">COMPLIMENTARY VIP PREVIEW</span>
                        <h3>Want to tour these properties in person?</h3>
                        <p>
                            We arrange private guided site tours with complimentary luxury
                            chauffeur pickup from your doorstep anywhere across Bengaluru.
                        </p>
                    </div>
                    <Link to="/site-visit" className="btn-primary" style={{ padding: "16px 30px", flexShrink: 0 }}>
                        Schedule Site Visit <ArrowRightOutlined />
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Properties;

