import React from "react";
import { motion } from "framer-motion";
import Simple from "../components/ui/Simple";
import { testimonials } from "../data/contents/testimonials";
import { SITE_IMAGES } from "../data/constants/siteImages";

function Testimonials() {
    return (
        <Simple
            eyebrow="Client Stories"
            title="What Our Buyers Say"
            subtitle="Real experiences from families and investors who found their home with ASPL."
            heroBg={SITE_IMAGES.TESTIMONIALS_HERO}
        >
            <div className="grid-3">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={t.id}
                        className="testimonial-card"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
                        whileHover={{ y: -6 }}
                    >
                        <p className="testimonial-quote">{t.quote}</p>
                        <div className="testimonial-person">
                            {t.image && t.image.startsWith("http") ? (
                                <img className="testimonial-avatar" src={t.image} alt={t.name} />
                            ) : (
                                <div className="testimonial-avatar" style={{
                                    background: "var(--navy)", display: "flex", alignItems: "center",
                                    justifyContent: "center", color: "var(--gold)", fontWeight: 700, fontSize: "0.85rem",
                                }}>
                                    {t.name.charAt(0)}
                                </div>
                            )}
                            <div>
                                <p className="testimonial-name">{t.name}</p>
                                <p className="testimonial-persona">{t.persona}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Disclaimer */}
            <p style={{ marginTop: 48, fontSize: "0.8rem", color: "var(--muted)", textAlign: "center" }}>
                These are illustrative demo testimonials. Names and quotes are fictional content for this portfolio project.
            </p>
        </Simple>
    );
}

export default Testimonials;
