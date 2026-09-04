import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRightOutlined,
    EnvironmentOutlined,
    MailOutlined,
    PhoneOutlined,
    ClockCircleOutlined,
    SafetyCertificateOutlined,
    CheckCircleOutlined,
    WhatsAppOutlined,
    HomeOutlined,
    DollarOutlined,
    UserOutlined,
    MessageOutlined,
} from "@ant-design/icons";
import { projectsIndex } from "../data/projects/projectsIndex";

const contactChannels = [
    {
        icon: <PhoneOutlined />,
        title: "Call Us Directly",
        value: "+91 98765 43210",
        subtext: "Mon–Sat, 9:00 AM – 7:30 PM",
        href: "tel:+919876543210",
        cta: "Call Now",
    },
    {
        icon: <WhatsAppOutlined />,
        title: "Chat on WhatsApp",
        value: "+91 98765 43210",
        subtext: "Instant response from our advisors",
        href: "https://wa.me/919876543210?text=Hi%20ASPL%20Empire%20Properties%2C%20I%20am%20interested%20in%20your%20projects",
        cta: "Start Chat",
        highlight: true,
    },
    {
        icon: <MailOutlined />,
        title: "Official Email",
        value: "info@asplempireproperties.com",
        subtext: "Expect a response within 2 hours",
        href: "mailto:info@asplempireproperties.com",
        cta: "Send Email",
    },
    {
        icon: <EnvironmentOutlined />,
        title: "Corporate Experience Center",
        value: "ASPL Tower, Outer Ring Road",
        subtext: "Marathahalli-Sarjapur Junction, Bengaluru – 560103",
        href: "https://maps.google.com/?q=Bengaluru",
        cta: "Get Directions",
    },
];

const highlights = [
    { label: "RERA Registered", desc: "100% verified legal documentation" },
    { label: "15+ Years Trust", desc: "Crafting Bengaluru's skyline" },
    { label: "1,200+ Families", desc: "Satisfied homeowners & investors" },
    { label: "< 2 Hrs Response", desc: "Dedicated relationship manager" },
];

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        project: "",
        propertyType: "",
        budget: "",
        message: "",
        whatsappConsent: true,
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setIsSubmitted(true);
        }, 600);
    };

    return (
        <main className="contact-page">
            {/* ─── 1. HERO SECTION ───────────────────────────── */}
            <section className="contact-hero">
                <div className="contact-hero-ambient-glow" />
                <div className="contact-hero-ambient-glow-two" />

                <div className="contact-container">
                    <motion.div
                        className="contact-hero-content"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="contact-eyebrow-badge">
                            <span className="contact-badge-dot" />
                            Direct Advisory & Support
                        </div>

                        <h1>
                            Let's talk about your{" "}
                            <span className="logo-gradient-text">
                                dream property.
                            </span>
                        </h1>

                        <p className="contact-hero-desc">
                            Whether you're exploring luxury apartments, gated
                            villas, or high-appreciation plotted developments
                            in Bengaluru, our senior property consultants are
                            here to guide you every step of the way.
                        </p>

                        <div className="contact-hero-stats">
                            {highlights.map((h, i) => (
                                <motion.div
                                    key={h.label}
                                    className="contact-stat-pill"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                                >
                                    <strong>{h.label}</strong>
                                    <span>{h.desc}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── 2. MAIN SECTION: CHANNELS & FORM ──────────── */}
            <section className="contact-main">
                <div className="contact-container">
                    <div className="contact-layout">

                        {/* LEFT COLUMN: CHANNELS & INFO */}
                        <motion.div
                            className="contact-info-col"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="contact-section-header">
                                <span className="contact-kicker">REACH OUT TO US</span>
                                <h2>Speak with our property specialists.</h2>
                                <p>
                                    Get instant clarity on unit availability,
                                    transparent price breakups, master plans,
                                    and ongoing festive payment schemes.
                                </p>
                            </div>

                            {/* Contact Channels Grid */}
                            <div className="contact-channels-grid">
                                {contactChannels.map((c, i) => (
                                    <motion.div
                                        key={c.title}
                                        className={`contact-channel-card ${
                                            c.highlight ? "highlighted-channel" : ""
                                        }`}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                                    >
                                        <div className="channel-icon-wrap">
                                            {c.icon}
                                        </div>
                                        <div className="channel-details">
                                            <span className="channel-title">{c.title}</span>
                                            <strong className="channel-value">{c.value}</strong>
                                            <p className="channel-subtext">{c.subtext}</p>
                                        </div>
                                        {c.href && (
                                            <a
                                                href={c.href}
                                                target={c.href.startsWith("http") ? "_blank" : undefined}
                                                rel="noreferrer"
                                                className="channel-cta-link"
                                            >
                                                {c.cta} <ArrowRightOutlined />
                                            </a>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Trust Assurance Card */}
                            <div className="contact-trust-card">
                                <div className="trust-icon-badge">
                                    <SafetyCertificateOutlined />
                                </div>
                                <div>
                                    <h4>100% Buyer Protection & Confidentiality</h4>
                                    <p>
                                        We respect your privacy. No spam or third-party
                                        marketing. You will only be contacted by an
                                        assigned ASPL Relationship Manager.
                                    </p>
                                    <div className="trust-pills">
                                        <span><CheckCircleOutlined /> Clear Title Guarantee</span>
                                        <span><CheckCircleOutlined /> Zero Brokerage</span>
                                        <span><CheckCircleOutlined /> Bank Approved</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT COLUMN: LUXURY INTERACTIVE FORM */}
                        <motion.div
                            className="contact-form-col"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                        >
                            <div className="contact-form-card">
                                <div className="form-card-badge">PRIORITY RESPONSE</div>
                                <h3>Send an Inquiry</h3>
                                <p className="form-card-desc">
                                    Fill out this quick form and our portfolio
                                    advisor will connect with you with customized options.
                                </p>

                                <AnimatePresence mode="wait">
                                    {isSubmitted ? (
                                        <motion.div
                                            key="success-box"
                                            className="contact-form-success"
                                            initial={{ opacity: 0, scale: 0.92, y: 15 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <div className="success-icon-circle">
                                                <CheckCircleOutlined />
                                            </div>
                                            <h3>Inquiry Received Successfully!</h3>
                                            <p>
                                                Thank you, <strong>{formData.name}</strong>.
                                                Your dedicated property advisor will call you at{" "}
                                                <strong>{formData.phone}</strong> shortly with
                                                the complete project dossier and pricing details.
                                            </p>
                                            <button
                                                type="button"
                                                className="btn-primary"
                                                style={{ marginTop: 20 }}
                                                onClick={() => {
                                                    setIsSubmitted(false);
                                                    setFormData({
                                                        name: "",
                                                        phone: "",
                                                        email: "",
                                                        project: "",
                                                        propertyType: "",
                                                        budget: "",
                                                        message: "",
                                                        whatsappConsent: true,
                                                    });
                                                }}
                                            >
                                                Send Another Inquiry
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="revamped-contact-form">
                                            {/* Row 1: Name & Phone */}
                                            <div className="form-row-2">
                                                <div className="form-group">
                                                    <label htmlFor="name">
                                                        <UserOutlined /> Full Name *
                                                    </label>
                                                    <input
                                                        id="name"
                                                        type="text"
                                                        name="name"
                                                        required
                                                        placeholder="e.g. Rajesh Sharma"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="phone">
                                                        <PhoneOutlined /> Phone Number *
                                                    </label>
                                                    <input
                                                        id="phone"
                                                        type="tel"
                                                        name="phone"
                                                        required
                                                        placeholder="+91 98765 43210"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>

                                            {/* Row 2: Email & Project */}
                                            <div className="form-row-2">
                                                <div className="form-group">
                                                    <label htmlFor="email">
                                                        <MailOutlined /> Email Address *
                                                    </label>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        name="email"
                                                        required
                                                        placeholder="rajesh@example.com"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="project">
                                                        <HomeOutlined /> Project of Interest
                                                    </label>
                                                    <select
                                                        id="project"
                                                        name="project"
                                                        value={formData.project}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    >
                                                        <option value="">Select Project (Optional)</option>
                                                        {projectsIndex.map((p) => (
                                                            <option key={p.id} value={p.name}>
                                                                {p.name} ({p.location})
                                                            </option>
                                                        ))}
                                                        <option value="General Consultation">
                                                            General Consultation
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Row 3: Property Type & Budget */}
                                            <div className="form-row-2">
                                                <div className="form-group">
                                                    <label htmlFor="propertyType">
                                                        <HomeOutlined /> Property Type
                                                    </label>
                                                    <select
                                                        id="propertyType"
                                                        name="propertyType"
                                                        value={formData.propertyType}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    >
                                                        <option value="">Any Configuration</option>
                                                        <option value="Luxury Apartments (2 & 3 BHK)">Luxury Apartments (2 & 3 BHK)</option>
                                                        <option value="Signature 4 BHK & Penthouses">Signature 4 BHK & Penthouses</option>
                                                        <option value="Gated Villa Communities">Gated Villa Communities</option>
                                                        <option value="Premium Residential Plots">Premium Residential Plots</option>
                                                        <option value="Grade-A Commercial Space">Grade-A Commercial Space</option>
                                                    </select>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="budget">
                                                        <DollarOutlined /> Budget Range
                                                    </label>
                                                    <select
                                                        id="budget"
                                                        name="budget"
                                                        value={formData.budget}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    >
                                                        <option value="">Select Budget</option>
                                                        <option value="₹60L - ₹1 Crore">₹60L – ₹1 Crore</option>
                                                        <option value="₹1 Crore - ₹2 Crores">₹1 Crore – ₹2 Crores</option>
                                                        <option value="₹2 Crores - ₹4 Crores">₹2 Crores – ₹4 Crores</option>
                                                        <option value="₹4 Crores+ (Ultra Luxury)">₹4 Crores+ (Ultra Luxury)</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="form-group">
                                                <label htmlFor="message">
                                                    <MessageOutlined /> Your Requirements or Question
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={3}
                                                    placeholder="Tell us what you are looking for (e.g. possession timeline, floor preference, site visit date)..."
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                />
                                            </div>

                                            {/* WhatsApp consent */}
                                            <div className="form-checkbox-group">
                                                <input
                                                    type="checkbox"
                                                    id="whatsappConsent"
                                                    name="whatsappConsent"
                                                    checked={formData.whatsappConsent}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="whatsappConsent">
                                                    Send me project brochures, floor plans & updates on WhatsApp
                                                </label>
                                            </div>

                                            {/* Submit button */}
                                            <button
                                                type="submit"
                                                disabled={submitting}
                                                className="contact-submit-btn"
                                            >
                                                {submitting ? "Sending Inquiry..." : "Submit Inquiry & Get Callback"}
                                                <ArrowRightOutlined />
                                            </button>

                                            <div className="form-footer-note">
                                                🔒 Your information is secure. ASPL does not share personal data.
                                            </div>
                                        </form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ─── 3. FULL-WIDTH VIP SITE VISIT BANNER ─────────── */}
            <section className="contact-visit-banner">
                <div className="contact-container">
                    <motion.div
                        className="contact-visit-wrapper"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="contact-visit-text">
                            <span className="visit-badge">COMPLIMENTARY VIP SERVICE</span>
                            <h2>Prefer to experience the project in person?</h2>
                            <p>
                                Book a guided private site visit. We arrange
                                complimentary chauffeur pickup & drop, accompanied by
                                our technical project architects.
                            </p>
                        </div>

                        <div className="contact-visit-actions">
                            <Link to="/site-visit" className="btn-primary" style={{ padding: "16px 32px" }}>
                                Schedule Site Visit <ArrowRightOutlined />
                            </Link>
                            <a
                                href="tel:+919876543210"
                                className="btn-secondary"
                                style={{ padding: "15px 28px", borderColor: "rgba(255,255,255,0.3)" }}
                            >
                                Call Concierge
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default Contact;
