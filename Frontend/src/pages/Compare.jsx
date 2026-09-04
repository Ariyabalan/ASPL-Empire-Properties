import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    CloseOutlined,
    EnvironmentOutlined,
    HomeOutlined,
    CalendarOutlined,
    CheckOutlined,
} from "@ant-design/icons";

import { useCompare, money } from "../context/CompareContext";
import { projectsIndex } from "../data/projects/projectsIndex";

function Compare() {
    const { ids, toggle } = useCompare();

    const ps = projectsIndex.filter((p) => ids.includes(p.id));

    const rows = [
        {
            label: "Location",
            key: "location",
            icon: <EnvironmentOutlined />,
        },
        {
            label: "Property Type",
            key: "propertyType",
            icon: <HomeOutlined />,
        },
        {
            label: "Status",
            key: "status",
            icon: <CheckOutlined />,
        },
        {
            label: "Starting Price",
            key: "startingPrice",
            icon: <span className="compare-rupee">₹</span>,
        },
        {
            label: "Possession",
            key: "possessionDate",
            icon: <CalendarOutlined />,
        },
    ];

    return (
        <main className="compare-page">

            {/* =====================================================
                PAGE HEADER
            ====================================================== */}
            <section className="compare-header">
                <motion.div
                    className="compare-header-inner"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                >
                    <span className="compare-kicker">
                        PROPERTY COMPARISON
                    </span>

                    <h1>
                        Compare before
                        <br />
                        <span>you decide.</span>
                    </h1>

                    <p>
                        Put your shortlisted properties side by side and
                        compare the details that matter before making your
                        next move.
                    </p>

                    <Link
                        to="/properties"
                        className="compare-back-link"
                    >
                        <ArrowLeftOutlined />
                        Browse all properties
                    </Link>
                </motion.div>

                <div className="compare-header-decoration">
                    <span>ASPL</span>
                </div>
            </section>

            {/* =====================================================
                CONTENT
            ====================================================== */}
            <section className="compare-content">

                {/* Comparison heading */}
                <motion.div
                    className="compare-intro"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.55,
                        delay: 0.15,
                    }}
                >
                    <div>
                        <span className="compare-section-kicker">
                            YOUR SHORTLIST
                        </span>

                        <h2>
                            Property comparison
                        </h2>
                    </div>

                    <div className="compare-count">
                        <strong>{ps.length}</strong>
                        <span>
                            {ps.length === 1
                                ? "Property selected"
                                : "Properties selected"}
                        </span>
                    </div>
                </motion.div>

                {/* =================================================
                    EMPTY STATE
                ================================================== */}
                {!ps.length ? (
                    <motion.div
                        className="compare-empty"
                        initial={{
                            opacity: 0,
                            scale: 0.97,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.55,
                            delay: 0.2,
                        }}
                    >
                        <div className="compare-empty-icon">
                            <HomeOutlined />
                        </div>

                        <span className="compare-empty-kicker">
                            YOUR COMPARISON IS EMPTY
                        </span>

                        <h3>
                            Start building
                            <br />
                            your shortlist.
                        </h3>

                        <p>
                            Select up to 3 projects from our property
                            collection and compare their location, type,
                            pricing and possession details side by side.
                        </p>

                        <Link
                            to="/properties"
                            className="compare-primary-button"
                        >
                            Browse Properties
                            <ArrowRightOutlined />
                        </Link>
                    </motion.div>
                ) : (
                    <>
                        {/* =================================================
                            MOBILE NOTICE
                        ================================================== */}
                        <div className="compare-mobile-note">
                            <span>
                                Swipe horizontally to compare all
                                properties
                            </span>
                            <ArrowRightOutlined />
                        </div>

                        {/* =================================================
                            COMPARISON TABLE
                        ================================================== */}
                        <motion.div
                            className="compare-table-container"
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                            }}
                        >
                            <div className="compare-table-scroll">
                                <table className="compare-table">

                                    <thead>
                                        <tr>
                                            <th className="compare-feature-column">
                                                <span>
                                                    PROPERTY
                                                </span>
                                                <strong>
                                                    Key details
                                                </strong>
                                            </th>

                                            <AnimatePresence>
                                                {ps.map((p, index) => (
                                                    <motion.th
                                                        key={p.id}
                                                        className="compare-property-column"
                                                        initial={{
                                                            opacity: 0,
                                                            y: -20,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            y: -20,
                                                        }}
                                                        transition={{
                                                            duration: 0.45,
                                                            delay:
                                                                0.25 +
                                                                index * 0.1,
                                                        }}
                                                    >
                                                        <div className="compare-property-head">

                                                            <div className="compare-property-number">
                                                                0{index + 1}
                                                            </div>

                                                            <button
                                                                type="button"
                                                                className="compare-remove"
                                                                onClick={() =>
                                                                    toggle(
                                                                        p.id
                                                                    )
                                                                }
                                                                aria-label={`Remove ${p.name}`}
                                                            >
                                                                <CloseOutlined />
                                                            </button>

                                                            <h3>
                                                                {p.name}
                                                            </h3>

                                                            <div className="compare-property-location">
                                                                <EnvironmentOutlined />
                                                                {p.location}
                                                            </div>
                                                        </div>
                                                    </motion.th>
                                                ))}
                                            </AnimatePresence>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {rows.map(
                                            (
                                                row,
                                                rowIndex
                                            ) => (
                                                <motion.tr
                                                    key={row.key}
                                                    initial={{
                                                        opacity: 0,
                                                        x: -15,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.4,
                                                        delay:
                                                            0.35 +
                                                            rowIndex *
                                                                0.08,
                                                    }}
                                                >
                                                    <th className="compare-feature">
                                                        <div className="compare-feature-icon">
                                                            {row.icon}
                                                        </div>

                                                        <span>
                                                            {row.label}
                                                        </span>
                                                    </th>

                                                    {ps.map((p) => (
                                                        <td
                                                            key={p.id}
                                                            className={
                                                                row.key ===
                                                                "startingPrice"
                                                                    ? "compare-price-cell"
                                                                    : ""
                                                            }
                                                        >
                                                            {row.key ===
                                                            "startingPrice"
                                                                ? money(
                                                                      p[
                                                                          row
                                                                              .key
                                                                      ]
                                                                  )
                                                                : p[
                                                                      row
                                                                          .key
                                                                  ] || "—"}
                                                        </td>
                                                    ))}
                                                </motion.tr>
                                            )
                                        )}
                                    </tbody>

                                </table>
                            </div>
                        </motion.div>

                        {/* =================================================
                            FOOTER ACTION
                        ================================================== */}
                        <motion.div
                            className="compare-footer"
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.55,
                            }}
                        >
                            <div>
                                <span>
                                    NEED MORE OPTIONS?
                                </span>

                                <strong>
                                    Explore more ASPL properties
                                </strong>
                            </div>

                            <Link
                                to="/properties"
                                className="compare-outline-button"
                            >
                                Explore Properties
                                <ArrowRightOutlined />
                            </Link>
                        </motion.div>
                    </>
                )}
            </section>
        </main>
    );
}

export default Compare;

