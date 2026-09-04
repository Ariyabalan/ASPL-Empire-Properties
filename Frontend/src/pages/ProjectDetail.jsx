import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PlaceholderImage from "../components/ui/PlaceholderImage";
import EmiResult from "../components/ui/EmiResult";
import { money, getAmen } from "../context/CompareContext";
import NotFound from "./NotFound";

function ProjectDetail() {
    const { slug } = useParams();
    const p = getProjectBySlug(slug);

    if (!p) {
        return <NotFound />;
    }

    const [price, setPrice] = useState(p.startingPrice);

    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 35,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
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
    };

    return (
        <>
            {/* Project Hero */}
            <motion.section
                className="projectHero"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div variants={itemVariants}>
                    <motion.p
                        className="eyebrow"
                        variants={itemVariants}
                    >
                        {p.status} · {p.location}
                    </motion.p>

                    <motion.h1 variants={itemVariants}>
                        {p.name}
                    </motion.h1>

                    <motion.p variants={itemVariants}>
                        {p.fullOverview}
                    </motion.p>

                    <motion.div
                        className="actions"
                        variants={itemVariants}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                className="button"
                                to={`/brochure?project=${p.id}`}
                            >
                                Request Brochure
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                className="button secondary"
                                to={`/site-visit?project=${p.id}`}
                            >
                                Plan Site Visit
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    whileHover={{
                        scale: 1.02,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                >
                    <PlaceholderImage label={p.images?.hero} />
                </motion.div>
            </motion.section>

            {/* Key Highlights */}
            <motion.section
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.h2 variants={itemVariants}>
                    Key Highlights
                </motion.h2>

                <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {p.highlights.map((highlight) => (
                        <motion.li
                            key={highlight}
                            variants={itemVariants}
                        >
                            {highlight}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.section>

            {/* Configurations & Pricing */}
            <motion.section
                className="soft"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <motion.h2 variants={itemVariants}>
                    Configurations & Pricing
                </motion.h2>

                <motion.div
                    className="tablewrap"
                    variants={itemVariants}
                >
                    <table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Carpet / Plot</th>
                                <th>Built-up</th>
                                <th>Starting Price</th>
                            </tr>
                        </thead>

                        <tbody>
                            {p.configurations.map((c) => (
                                <motion.tr
                                    key={c.type}
                                    initial={{
                                        opacity: 0,
                                        x: -15,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                    }}
                                >
                                    <td>{c.type}</td>

                                    <td>
                                        {c.carpetArea ||
                                            c.plotArea ||
                                            "—"}{" "}
                                        sq.ft
                                    </td>

                                    <td>
                                        {c.builtUpArea || "—"}
                                        {c.builtUpArea
                                            ? " sq.ft"
                                            : ""}
                                    </td>

                                    <td>{money(c.price)}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </motion.section>

            {/* Amenities */}
            <motion.section
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.h2 variants={itemVariants}>
                    Amenities
                </motion.h2>

                <motion.div
                    className="chips"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {p.amenityIds.map((id) => {
                        const a = getAmen(id);

                        return (
                            a && (
                                <motion.span
                                    className="chip"
                                    key={id}
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -4,
                                        scale: 1.04,
                                    }}
                                >
                                    {a.name}
                                </motion.span>
                            )
                        );
                    })}
                </motion.div>
            </motion.section>

            {/* Specifications */}
            {p.specifications && (
                <motion.section
                    className="soft"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                >
                    <motion.h2 variants={itemVariants}>
                        Specifications
                    </motion.h2>

                    <motion.div
                        className="grid three"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {Object.entries(p.specifications).map(
                            ([key, value]) => (
                                <motion.div
                                    className="info"
                                    key={key}
                                    variants={itemVariants}
                                    whileHover={{ y: -6 }}
                                >
                                    <h3>
                                        {key.replace(
                                            /([A-Z])/g,
                                            " $1"
                                        )}
                                    </h3>

                                    <p>{value}</p>
                                </motion.div>
                            )
                        )}
                    </motion.div>
                </motion.section>
            )}

            {/* Location & Connectivity */}
            <motion.section
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <motion.h2 variants={itemVariants}>
                    Location & Connectivity
                </motion.h2>

                <motion.div
                    className="grid three"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {Object.entries(p.connectivity).map(
                        ([key, items]) => (
                            <motion.div
                                className="info"
                                key={key}
                                variants={itemVariants}
                                whileHover={{ y: -6 }}
                            >
                                <h3>{key}</h3>

                                {items.map((item) => (
                                    <motion.p
                                        key={item.name}
                                        initial={{
                                            opacity: 0,
                                            x: -10,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                    >
                                        {item.name} —{" "}
                                        {item.distance}
                                    </motion.p>
                                ))}
                            </motion.div>
                        )
                    )}
                </motion.div>
            </motion.section>

            {/* Floor / Layout Plans */}
            {(p.hasFloorPlan || p.hasLayoutPlan) && (
                <motion.section
                    className="soft"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                >
                    <motion.h2 variants={itemVariants}>
                        {p.hasLayoutPlan
                            ? "Layout Plan"
                            : "Floor Plans"}
                    </motion.h2>

                    <motion.div
                        className="grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {p.hasLayoutPlan ? (
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                            >
                                <PlaceholderImage
                                    label={
                                        p.images
                                            .layoutPlanImage
                                    }
                                />
                            </motion.div>
                        ) : (
                            Object.entries(
                                p.images.floorPlanImages || {}
                            ).map(([key, value]) => (
                                <motion.div
                                    key={key}
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                >
                                    <PlaceholderImage
                                        label={value}
                                    />
                                </motion.div>
                            ))
                        )}
                    </motion.div>
                </motion.section>
            )}

            {/* Construction Progress */}
            <motion.section
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.h2 variants={itemVariants}>
                    Construction Progress
                </motion.h2>

                <div className="progress">
                    <motion.span
                        initial={{ width: 0 }}
                        whileInView={{
                            width: `${p.construction.percentComplete}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                        }}
                    />
                </div>

                <motion.p variants={itemVariants}>
                    <b>
                        {p.construction.percentComplete}%
                        complete
                    </b>{" "}
                    · {p.construction.currentStage}
                </motion.p>

                <motion.p variants={itemVariants}>
                    {p.construction.latestUpdate}
                </motion.p>
            </motion.section>

            {/* Quick EMI */}
            <motion.section
                className="soft"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <motion.h2 variants={itemVariants}>
                    Quick EMI Estimate
                </motion.h2>

                <motion.input
                    type="number"
                    value={price}
                    onChange={(e) =>
                        setPrice(Number(e.target.value) || 0)
                    }
                    variants={itemVariants}
                    whileFocus={{ scale: 1.01 }}
                />

                <motion.div variants={itemVariants}>
                    <EmiResult price={price} />
                </motion.div>
            </motion.section>
        </>
    );
}

export default ProjectDetail;

