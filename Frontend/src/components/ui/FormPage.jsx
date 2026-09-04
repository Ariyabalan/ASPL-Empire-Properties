import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsIndex } from "../../data/projects/projectsIndex";

function FormPage({ title, eyebrow, subtitle, heroBg, fields }) {
    const [done, setDone] = useState(false);
    const [form, setForm] = useState({});

    const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));
    const handleSubmit = (e) => { e.preventDefault(); setDone(true); };

    return (
        <>
            {/* Page Hero */}
            <div className="page-hero" style={{ minHeight: 280 }}>
                {heroBg ? (
                    <div className="page-hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
                ) : (
                    <div className="page-hero-bg" style={{ background: "var(--navy)" }} />
                )}
                <motion.div
                    className="page-hero-content"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
                    <h1>{title}</h1>
                    {subtitle && <p>{subtitle}</p>}
                </motion.div>
            </div>

            {/* Form Content */}
            <section className="section">
                <div style={{ maxWidth: 600 }}>
                    <AnimatePresence mode="wait">
                        {done ? (
                            <motion.div
                                key="success"
                                className="alert-success"
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                style={{ fontSize: "1rem", padding: "24px 28px" }}
                            >
                                ✓ Thank you! Your request has been submitted. Our team will reach out within 24 hours.
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                onSubmit={handleSubmit}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                {fields.map((field, index) => (
                                    <motion.div
                                        key={field}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.35, delay: 0.15 + index * 0.07 }}
                                        style={{ marginBottom: 16 }}
                                    >
                                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>
                                            {field}
                                        </label>
                                        {field === "Project" ? (
                                            <select
                                                className="filter-select"
                                                required
                                                style={{ width: "100%" }}
                                                value={form[field] || ""}
                                                onChange={(e) => handleChange(field, e.target.value)}
                                            >
                                                <option value="">Select Project</option>
                                                {projectsIndex.map((p) => (
                                                    <option key={p.id} value={p.name}>{p.name}</option>
                                                ))}
                                            </select>
                                        ) : field === "Message" ? (
                                            <textarea
                                                required
                                                placeholder={`Your ${field.toLowerCase()}...`}
                                                value={form[field] || ""}
                                                onChange={(e) => handleChange(field, e.target.value)}
                                                style={{ borderColor: "var(--border)" }}
                                            />
                                        ) : (
                                            <input
                                                className="filter-input"
                                                required
                                                type={field === "Email" ? "email" : field === "Phone" ? "tel" : "text"}
                                                placeholder={field}
                                                value={form[field] || ""}
                                                onChange={(e) => handleChange(field, e.target.value)}
                                                style={{ width: "100%" }}
                                            />
                                        )}
                                    </motion.div>
                                ))}
                                <motion.button
                                    type="submit"
                                    className="btn-primary"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    style={{ marginTop: 8 }}
                                >
                                    Submit Enquiry
                                </motion.button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </>
    );
}

export default FormPage;
