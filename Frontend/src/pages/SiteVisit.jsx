import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    EnvironmentOutlined,
    CalendarOutlined,
    ClockCircleOutlined,
    CarOutlined,
    UserOutlined,
    PhoneOutlined,
    MailOutlined,
    CheckCircleOutlined,
    SafetyCertificateOutlined,
    ArrowRightOutlined,
    CompassOutlined,
    TeamOutlined,
    WhatsAppOutlined,
    FileTextOutlined,
    ShareAltOutlined,
    PrinterOutlined,
    CheckOutlined,
} from "@ant-design/icons";
import { projectsIndex } from "../data/projects/projectsIndex";

const timeSlots = [
    {
        id: "morning",
        time: "10:00 AM – 12:00 PM",
        tag: "Morning Daylight",
        desc: "Best for natural sunlight, terrace & balcony views",
    },
    {
        id: "afternoon",
        time: "12:30 PM – 2:30 PM",
        tag: "Midday Tour",
        desc: "Includes VIP lounge refreshments & financial consultation",
    },
    {
        id: "golden",
        time: "3:30 PM – 5:30 PM",
        tag: "Golden Hour",
        desc: "Ideal for garden walks, landscape & sunset lighting",
    },
    {
        id: "evening",
        time: "5:30 PM – 7:00 PM",
        tag: "Twilight Preview",
        desc: "Experience evening clubhouse ambiance & lighting",
    },
];

const visitPerks = [
    {
        icon: <CarOutlined />,
        title: "Complimentary Chauffeur Service",
        desc: "Punctual pickup and drop anywhere in Bengaluru in sanitized luxury cabs.",
    },
    {
        icon: <UserOutlined />,
        title: "1-on-1 Architect & Advisor Tour",
        desc: "Guided walkthrough with our senior project manager and structural specialist.",
    },
    {
        icon: <CompassOutlined />,
        title: "Sample Residence Inspection",
        desc: "Step inside fully furnished model homes to evaluate fittings and layout flow.",
    },
    {
        icon: <SafetyCertificateOutlined />,
        title: "Verified Documentation Dossier",
        desc: "Direct access to RERA approvals, title deeds, sanction plans, and bank approvals.",
    },
];

const siteFaqs = [
    {
        q: "Is the chauffeur pickup service genuinely complimentary?",
        a: "Yes, completely complimentary. Our concierge arranges comfortable, air-conditioned pickup and return drop from your home, hotel, or office anywhere across Bengaluru.",
    },
    {
        q: "Can I bring my family members or interior architect?",
        a: "Absolutely! We encourage you to bring family members, architects, or advisors. You will have dedicated access to the sample unit and private lounge.",
    },
    {
        q: "What safety protocols are maintained on under-construction sites?",
        a: "All active construction visits are strictly equipped with safety helmets, high-visibility jackets, and accompanied by senior safety officers.",
    },
    {
        q: "Can I reschedule or cancel if my plans change?",
        a: "Yes, you can easily reschedule anytime by replying to your WhatsApp confirmation or calling our concierge desk at +91 98765 43210.",
    },
];

function SiteVisit() {
    const [selectedProject, setSelectedProject] = useState(projectsIndex[0]);
    const [visitDate, setVisitDate] = useState("");
    const [selectedSlot, setSelectedSlot] = useState("morning");
    const [travelMode, setTravelMode] = useState("chauffeur"); // 'chauffeur' | 'direct'
    const [pickupAddress, setPickupAddress] = useState("");
    const [guestCount, setGuestCount] = useState("2");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        unitPreferences: "",
        whatsappUpdates: true,
    });
    const [confirmedPass, setConfirmedPass] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [faqOpen, setFaqOpen] = useState(null);

    // Set default tomorrow date
    React.useEffect(() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const yyyy = tomorrow.getFullYear();
        const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
        const dd = String(tomorrow.getDate()).padStart(2, "0");
        setVisitDate(`${yyyy}-${mm}-${dd}`);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            const passId = `ASPL-VIP-${Math.floor(10000 + Math.random() * 90000)}`;
            const slotObj = timeSlots.find((s) => s.id === selectedSlot);

            setConfirmedPass({
                id: passId,
                projectName: selectedProject.name,
                projectLocation: selectedProject.location,
                date: visitDate,
                timeSlot: slotObj ? slotObj.time : "10:00 AM – 12:00 PM",
                travelMode: travelMode === "chauffeur" ? "Luxury Chauffeur Pickup" : "Direct Site Arrival",
                pickupAddress: travelMode === "chauffeur" ? pickupAddress : "Self-Drive (Reserved VIP Bay)",
                guestCount,
                visitorName: formData.name,
                visitorPhone: formData.phone,
                visitorEmail: formData.email,
                advisorName: "Karthik Subramanian (Senior Portfolio Manager)",
            });

            window.scrollTo({ top: 380, behavior: "smooth" });
        }, 700);
    };

    return (
        <main className="site-visit-page">
            {/* ─── 1. HERO HEADER ─────────────────────────────── */}
            <section className="site-visit-hero">
                <div className="site-visit-glow-left" />
                <div className="site-visit-glow-right" />

                <div className="site-visit-container">
                    <motion.div
                        className="site-visit-hero-content"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="site-visit-badge">
                            <span className="site-visit-badge-dot" />
                            COMPLIMENTARY VIP PREVIEW
                        </div>

                        <h1>
                            Experience Your Future Home{" "}
                            <span className="logo-gradient-text">
                                in Person.
                            </span>
                        </h1>

                        <p className="site-visit-subtitle">
                            Step beyond brochures and floor plans. Tour actual sample
                            apartments, inspect construction craftsmanship, and
                            enjoy door-to-door luxury chauffeur service across Bengaluru.
                        </p>

                        <div className="site-visit-highlights-strip">
                            <div className="highlight-item">
                                <CarOutlined className="highlight-icon" />
                                <span>Complimentary Chauffeur</span>
                            </div>
                            <div className="highlight-item">
                                <UserOutlined className="highlight-icon" />
                                <span>1-on-1 Architect Tour</span>
                            </div>
                            <div className="highlight-item">
                                <SafetyCertificateOutlined className="highlight-icon" />
                                <span>Legal & Title Verification</span>
                            </div>
                            <div className="highlight-item">
                                <CompassOutlined className="highlight-icon" />
                                <span>Sample Unit Access</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── 2. BOOKING ENGINE / VIP PASS ───────────────── */}
            <section className="site-visit-booking-section">
                <div className="site-visit-container">
                    <AnimatePresence mode="wait">
                        {confirmedPass ? (
                            /* ─── GENERATED VIP DIGITAL PASS ─── */
                            <motion.div
                                key="vip-pass"
                                className="vip-pass-card"
                                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="pass-header">
                                    <div className="pass-header-left">
                                        <div className="pass-tag">CONFIRMED VIP VISIT PASS</div>
                                        <h2>{confirmedPass.projectName}</h2>
                                        <p className="pass-location">
                                            <EnvironmentOutlined /> {confirmedPass.projectLocation}, Bengaluru
                                        </p>
                                    </div>
                                    <div className="pass-header-right">
                                        <span className="pass-number-label">PASS ID</span>
                                        <span className="pass-number">{confirmedPass.id}</span>
                                    </div>
                                </div>

                                <div className="pass-body">
                                    <div className="pass-grid">
                                        <div className="pass-cell">
                                            <span className="pass-cell-label">VISITOR NAME</span>
                                            <strong>{confirmedPass.visitorName}</strong>
                                        </div>
                                        <div className="pass-cell">
                                            <span className="pass-cell-label">DATE & TIME</span>
                                            <strong>
                                                {confirmedPass.date} ({confirmedPass.timeSlot})
                                            </strong>
                                        </div>
                                        <div className="pass-cell">
                                            <span className="pass-cell-label">TRAVEL MODE</span>
                                            <strong>{confirmedPass.travelMode}</strong>
                                        </div>
                                        <div className="pass-cell">
                                            <span className="pass-cell-label">GUESTS</span>
                                            <strong>{confirmedPass.guestCount} Persons</strong>
                                        </div>
                                        <div className="pass-cell pass-cell-full">
                                            <span className="pass-cell-label">PICKUP / ARRIVAL DETAILS</span>
                                            <strong>{confirmedPass.pickupAddress}</strong>
                                        </div>
                                        <div className="pass-cell pass-cell-full pass-advisor-cell">
                                            <span className="pass-cell-label">ASSIGNED CONCIERGE MANAGER</span>
                                            <strong>{confirmedPass.advisorName}</strong>
                                            <span className="pass-phone-badge">Direct Line: +91 98765 43210</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pass-footer">
                                    <div className="pass-footer-notice">
                                        <CheckCircleOutlined className="check-icon" />
                                        <span>
                                            Confirmation has been sent to <strong>{confirmedPass.visitorPhone}</strong> and{" "}
                                            <strong>{confirmedPass.visitorEmail}</strong>. Our chauffeur team will coordinate 2 hours prior to arrival.
                                        </span>
                                    </div>

                                    <div className="pass-actions">
                                        <button
                                            type="button"
                                            className="pass-btn pass-btn-print"
                                            onClick={() => window.print()}
                                        >
                                            <PrinterOutlined /> Print Pass
                                        </button>
                                        <a
                                            href={`https://wa.me/919876543210?text=Hi%2C%20I%20have%20booked%20site%20visit%20${confirmedPass.id}%20for%20${confirmedPass.projectName}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="pass-btn pass-btn-wa"
                                        >
                                            <WhatsAppOutlined /> WhatsApp Support
                                        </a>
                                        <button
                                            type="button"
                                            className="pass-btn pass-btn-new"
                                            onClick={() => setConfirmedPass(null)}
                                        >
                                            Schedule Another Visit
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            /* ─── INTERACTIVE BOOKING FORM ─── */
                            <form onSubmit={handleSubmit} className="site-visit-booking-form">
                                {/* STEP 1: SELECT PROJECT */}
                                <div className="booking-step-card">
                                    <div className="step-badge">
                                        <span className="step-num">1</span>
                                        <div className="step-title-wrap">
                                            <h3>Select Property to Visit</h3>
                                            <p>Choose any residential or plotted development in our Bengaluru portfolio.</p>
                                        </div>
                                    </div>

                                    <div className="project-select-grid">
                                        {projectsIndex.map((proj) => {
                                            const isSelected = selectedProject.id === proj.id;
                                            return (
                                                <div
                                                    key={proj.id}
                                                    className={`project-select-card ${isSelected ? "selected-card" : ""}`}
                                                    onClick={() => setSelectedProject(proj)}
                                                >
                                                    <div className="project-select-img-wrap">
                                                        <img
                                                            src={proj.images?.card || proj.images?.hero}
                                                            alt={proj.name}
                                                            className="project-select-img"
                                                        />
                                                        <span className="project-status-pill">{proj.status}</span>
                                                        {isSelected && (
                                                            <div className="selected-check-badge">
                                                                <CheckOutlined /> Selected
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="project-select-body">
                                                        <h4>{proj.name}</h4>
                                                        <span className="project-loc">
                                                            <EnvironmentOutlined /> {proj.location}
                                                        </span>
                                                        <div className="project-select-meta">
                                                            <span className="type-tag">{proj.propertyType}</span>
                                                            <strong className="price-tag">{proj.priceRange}</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* STEP 2: SELECT DATE & TIME SLOT */}
                                <div className="booking-step-card">
                                    <div className="step-badge">
                                        <span className="step-num">2</span>
                                        <div className="step-title-wrap">
                                            <h3>Choose Date & Time Window</h3>
                                            <p>Private appointments are scheduled in curated 2-hour VIP windows.</p>
                                        </div>
                                    </div>

                                    <div className="date-time-grid">
                                        <div className="date-picker-col">
                                            <label htmlFor="visitDate" className="input-label">
                                                <CalendarOutlined /> Preferred Visit Date *
                                            </label>
                                            <input
                                                id="visitDate"
                                                type="date"
                                                required
                                                min={new Date().toISOString().split("T")[0]}
                                                value={visitDate}
                                                onChange={(e) => setVisitDate(e.target.value)}
                                                className="visit-input date-input-control"
                                            />
                                            <span className="field-hint">
                                                Visits are hosted 7 days a week, including Sunday appointments.
                                            </span>
                                        </div>

                                        <div className="time-slots-col">
                                            <label className="input-label">
                                                <ClockCircleOutlined /> Preferred Time Slot *
                                            </label>
                                            <div className="time-slots-grid">
                                                {timeSlots.map((slot) => {
                                                    const isSelected = selectedSlot === slot.id;
                                                    return (
                                                        <div
                                                            key={slot.id}
                                                            className={`slot-card ${isSelected ? "selected-slot" : ""}`}
                                                            onClick={() => setSelectedSlot(slot.id)}
                                                        >
                                                            <div className="slot-top">
                                                                <strong className="slot-time">{slot.time}</strong>
                                                                <span className="slot-tag">{slot.tag}</span>
                                                            </div>
                                                            <p className="slot-desc">{slot.desc}</p>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* STEP 3: TRAVEL PREFERENCE & GUEST DETAILS */}
                                <div className="booking-step-card">
                                    <div className="step-badge">
                                        <span className="step-num">3</span>
                                        <div className="step-title-wrap">
                                            <h3>Travel Concierge & Visitor Details</h3>
                                            <p>Complimentary chauffeur pickup from your doorstep or direct site arrival.</p>
                                        </div>
                                    </div>

                                    {/* Travel Mode Toggle */}
                                    <div className="travel-mode-toggle">
                                        <div
                                            className={`mode-option ${travelMode === "chauffeur" ? "active-mode" : ""}`}
                                            onClick={() => setTravelMode("chauffeur")}
                                        >
                                            <CarOutlined className="mode-icon" />
                                            <div>
                                                <strong>Complimentary Chauffeur Pickup</strong>
                                                <span>Doorstep pickup & drop in sanitized luxury vehicle</span>
                                            </div>
                                        </div>

                                        <div
                                            className={`mode-option ${travelMode === "direct" ? "active-mode" : ""}`}
                                            onClick={() => setTravelMode("direct")}
                                        >
                                            <EnvironmentOutlined className="mode-icon" />
                                            <div>
                                                <strong>Self Drive / Direct Arrival</strong>
                                                <span>We will send GPS coordinates & reserved visitor parking slot</span>
                                            </div>
                                        </div>
                                    </div>

                                    {travelMode === "chauffeur" && (
                                        <div className="chauffeur-address-wrap">
                                            <label htmlFor="pickupAddress" className="input-label">
                                                <EnvironmentOutlined /> Pickup Address & Landmark in Bengaluru *
                                            </label>
                                            <input
                                                id="pickupAddress"
                                                type="text"
                                                required
                                                placeholder="e.g. 402, Prestige Palms, Whitefield Main Road, Bengaluru"
                                                value={pickupAddress}
                                                onChange={(e) => setPickupAddress(e.target.value)}
                                                className="visit-input"
                                            />
                                        </div>
                                    )}

                                    {/* Visitor Input Fields */}
                                    <div className="visitor-fields-grid">
                                        <div className="input-group">
                                            <label htmlFor="name" className="input-label">
                                                <UserOutlined /> Full Name *
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                placeholder="e.g. Ananya Roy"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="visit-input"
                                            />
                                        </div>

                                        <div className="input-group">
                                            <label htmlFor="phone" className="input-label">
                                                <PhoneOutlined /> Phone Number *
                                            </label>
                                            <input
                                                id="phone"
                                                type="tel"
                                                required
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="visit-input"
                                            />
                                        </div>

                                        <div className="input-group">
                                            <label htmlFor="email" className="input-label">
                                                <MailOutlined /> Email Address *
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                placeholder="ananya@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="visit-input"
                                            />
                                        </div>

                                        <div className="input-group">
                                            <label htmlFor="guests" className="input-label">
                                                <TeamOutlined /> Total Number of Visitors
                                            </label>
                                            <select
                                                id="guests"
                                                value={guestCount}
                                                onChange={(e) => setGuestCount(e.target.value)}
                                                className="visit-input select-control"
                                            >
                                                <option value="1">1 Person (Individual)</option>
                                                <option value="2">2 Persons (Couple)</option>
                                                <option value="3-4">3 – 4 Persons (Family)</option>
                                                <option value="5+">5+ Persons (Large Family / Group)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="input-group" style={{ marginTop: 16 }}>
                                        <label htmlFor="preferences" className="input-label">
                                            <FileTextOutlined /> Special Preferences or Unit Types (Optional)
                                        </label>
                                        <input
                                            id="preferences"
                                            type="text"
                                            placeholder="e.g., Higher floor corner units, East facing Vastu layout, or investment ROI breakdown"
                                            value={formData.unitPreferences}
                                            onChange={(e) => setFormData({ ...formData, unitPreferences: e.target.value })}
                                            className="visit-input"
                                        />
                                    </div>

                                    {/* WhatsApp Consent */}
                                    <div className="consent-checkbox-wrap">
                                        <input
                                            type="checkbox"
                                            id="whatsappUpdates"
                                            checked={formData.whatsappUpdates}
                                            onChange={(e) => setFormData({ ...formData, whatsappUpdates: e.target.checked })}
                                        />
                                        <label htmlFor="whatsappUpdates">
                                            Send driver live location, gate access code, and digital floor plans on WhatsApp
                                        </label>
                                    </div>

                                    {/* Submit Action Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="submit-booking-btn"
                                    >
                                        {isSubmitting ? "Generating VIP Pass..." : "Confirm & Generate VIP Site Visit Pass"}
                                        <ArrowRightOutlined />
                                    </button>

                                    <p className="booking-footer-note">
                                        🔒 Zero spam guarantee. Your contact number is only used to coordinate your chauffeur and site visit manager.
                                    </p>
                                </div>
                            </form>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* ─── 3. THE VIP SITE VISIT EXPERIENCE ───────────── */}
            <section className="site-visit-perks-section">
                <div className="site-visit-container">
                    <div className="section-title-wrap text-center">
                        <span className="section-kicker">WHAT TO EXPECT</span>
                        <h2>The ASPL VIP Preview Experience</h2>
                        <p>
                            We value your time. Every preview is organized with the highest
                            standards of luxury hospitality, structural transparency, and legal clarity.
                        </p>
                    </div>

                    <div className="perks-grid">
                        {visitPerks.map((perk, i) => (
                            <motion.div
                                key={perk.title}
                                className="perk-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <div className="perk-icon-circle">{perk.icon}</div>
                                <h3>{perk.title}</h3>
                                <p>{perk.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 4. FREQUENTLY ASKED QUESTIONS ──────────────── */}
            <section className="site-visit-faq-section">
                <div className="site-visit-container">
                    <div className="section-title-wrap text-center">
                        <span className="section-kicker">COMMON QUESTIONS</span>
                        <h2>Site Visit Guidelines & FAQ</h2>
                    </div>

                    <div className="site-visit-faq-list">
                        {siteFaqs.map((faq, index) => {
                            const isOpen = faqOpen === index;
                            return (
                                <div
                                    key={faq.q}
                                    className={`faq-accordion-item ${isOpen ? "faq-expanded" : ""}`}
                                    onClick={() => setFaqOpen(isOpen ? null : index)}
                                >
                                    <div className="faq-question">
                                        <h4>{faq.q}</h4>
                                        <span className="faq-toggle-icon">{isOpen ? "−" : "+"}</span>
                                    </div>
                                    {isOpen && (
                                        <motion.p
                                            className="faq-answer"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {faq.a}
                                        </motion.p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── 5. DIRECT CONCIERGE CALLOUT ────────────────── */}
            <section className="site-visit-concierge-strip">
                <div className="site-visit-container">
                    <div className="concierge-content">
                        <div>
                            <span className="concierge-tag">IMMEDIATE ASSISTANCE</span>
                            <h2>Prefer to book your site visit over a phone call?</h2>
                            <p>
                                Speak directly with our Head of Client Hospitality. We can arrange
                                same-day visits or custom multi-project itineraries.
                            </p>
                        </div>
                        <div className="concierge-actions">
                            <a href="tel:+919876543210" className="btn-primary" style={{ padding: "16px 28px" }}>
                                <PhoneOutlined /> Call +91 98765 43210
                            </a>
                            <a
                                href="https://wa.me/919876543210?text=Hi%20ASPL%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-secondary"
                                style={{ padding: "15px 26px" }}
                            >
                                <WhatsAppOutlined /> WhatsApp Concierge
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default SiteVisit;
