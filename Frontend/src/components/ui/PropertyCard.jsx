import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCompare } from "../../context/CompareContext";
import { money } from "../../context/CompareContext";
import { EnvironmentOutlined } from "@ant-design/icons";

function getBadgeClass(status) {
    if (status === "Ready to Move") return "badge-ready";
    if (status === "Under Construction") return "badge-under";
    if (status === "New Launch") return "badge-new";
    return "badge-pre";
}

function PropertyCard({ p }) {
    const { ids, toggle } = useCompare();
    const isCompared = ids.includes(p.id);
    const cardImg = p.images?.card;
    const isReal = cardImg && cardImg.startsWith("http");

    return (
        <motion.article
            className="property-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Image */}
            <div className="property-card-image">
                {isReal ? (
                    <img src={cardImg} alt={p.name} loading="lazy" />
                ) : (
                    <div className="placeholder-img" style={{ minHeight: "100%", borderRadius: 0 }}>
                        <span>ASPL</span>
                        <small>{p.name}</small>
                    </div>
                )}
                <span className={`property-card-badge ${getBadgeClass(p.status)}`}>
                    {p.status}
                </span>
            </div>

            {/* Body */}
            <div className="property-card-body">
                <div className="property-card-location">
                    <EnvironmentOutlined style={{ fontSize: 12 }} />
                    {p.location} � {p.propertyType}
                </div>

                <h3 className="property-card-name">{p.name}</h3>
                <p className="property-card-tagline">{p.tagline}</p>

                <div className="property-card-price">
                    From {money(p.startingPrice)}
                </div>

                <div className="property-card-configs">
                    {p.configurations.slice(0, 3).map((c, i) => (
                        <span key={i} className="config-chip">{c.type}</span>
                    ))}
                </div>

                <div className="property-card-actions">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Link className="btn-navy" to={`/properties/${p.slug}`}>
                            View Details
                        </Link>
                    </motion.div>
                    <motion.button
                        className="btn-ghost"
                        onClick={() => toggle(p.id)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        style={isCompared ? { borderColor: "var(--gold)", color: "var(--gold)" } : {}}
                    >
                        {isCompared ? "? Added" : "Compare"}
                    </motion.button>
                </div>
            </div>
        </motion.article>
    );
}

export default PropertyCard;
