import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
    ClockCircleOutlined,
    ArrowRightOutlined,
    FacebookOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
    SafetyCertificateOutlined,
} from "@ant-design/icons";
import { assets } from "../../assets/assets";

const quickLinks = [
    ["Home", "/"],
    ["Properties", "/properties"],
    ["Compare Properties", "/compare"],
    ["EMI Calculator", "/emi"],
    ["Construction Updates", "/construction"],
    ["Book a Site Visit", "/site-visit"],
];

const projectLinks = [
    ["ASPL Horizon Heights", "/properties/horizon-heights"],
    ["ASPL Palm Meadows", "/properties/palm-meadows"],
    ["ASPL Business Square", "/properties/business-square"],
    ["ASPL Green Residency", "/properties/green-residency"],
    ["ASPL Elevate Plots", "/properties/elevate-plots"],
    ["ASPL Riverstone", "/properties/riverstone"],
];

const companyLinks = [
    ["About ASPL", "/about"],
    ["Completed Projects", "/completed-projects"],
    ["Client Testimonials", "/testimonials"],
    ["Real Estate Blog", "/blog"],
    ["Career Opportunities", "/careers"],
    ["Frequently Asked Questions", "/faq"],
    ["Contact Us", "/contact"],
    ["Download Brochure", "/brochure"],
];

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-full-container">
                {/* ─── Top Strip: Brand Action Across Full Screen ─── */}
                <div className="footer-top-strip">
                    <div className="footer-brand-lockup">
                        <Link to="/" className="footer-logo-link">
                            <img
                                src={assets.logo}
                                alt="ASPL Empire Properties"
                                className="footer-logo-img"
                            />
                        </Link>
                        <span className="footer-brand-tagline">
                            Bengaluru's Premier Real Estate Developers & Builders
                        </span>
                    </div>

                    <div className="footer-top-cta">
                        <span className="footer-cta-text">
                            Planning to buy, invest, or explore residential projects?
                        </span>
                        <Link to="/contact" className="footer-btn-accent">
                            Talk to an Advisor <ArrowRightOutlined />
                        </Link>
                    </div>
                </div>

                {/* ─── Main Footer Grid (Full Width) ─── */}
                <div className="footer-grid">
                    {/* Col 1: About & Social */}
                    <div className="footer-col footer-col-about">
                        <p className="footer-brand-desc">
                            ASPL Empire Properties builds premium residential
                            apartments, luxury villas, and plotted developments
                            across Bengaluru — engineered around transparency,
                            unmatched architectural quality, and verified clear titles.
                        </p>

                        <div className="footer-rera-pill">
                            <SafetyCertificateOutlined className="footer-rera-icon" />
                            <span>K-RERA Registered Developer · 100% Clear Titles</span>
                        </div>

                        <div className="footer-social-section">
                            <span className="footer-social-label">Connect With Us</span>
                            <div className="footer-social">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Facebook"
                                >
                                    <FacebookOutlined />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Instagram"
                                >
                                    <InstagramOutlined />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <LinkedinOutlined />
                                </a>
                                <a
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="YouTube"
                                >
                                    <YoutubeOutlined />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Col 2: Navigation Links */}
                    <div className="footer-col">
                        <p className="footer-heading">Navigation</p>
                        <div className="footer-links">
                            {quickLinks.map(([name, path]) => (
                                <Link key={path} to={path}>
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Col 3: Key Projects */}
                    <div className="footer-col">
                        <p className="footer-heading">Featured Projects</p>
                        <div className="footer-links">
                            {projectLinks.map(([name, path]) => (
                                <Link key={path} to={path}>
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Col 4: Company */}
                    <div className="footer-col">
                        <p className="footer-heading">Company</p>
                        <div className="footer-links">
                            {companyLinks.map(([name, path]) => (
                                <Link key={path} to={path}>
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Col 5: Contact Info */}
                    <div className="footer-col footer-col-contact">
                        <p className="footer-heading">Experience Center</p>
                        <div className="footer-contact-list">
                            <div className="footer-contact-item">
                                <EnvironmentOutlined className="footer-c-icon" />
                                <span>
                                    ASPL Tower, Outer Ring Road, Marathahalli-Sarjapur Junction, Bengaluru, Karnataka 560103
                                </span>
                            </div>
                            <div className="footer-contact-item">
                                <PhoneOutlined className="footer-c-icon" />
                                <a href="tel:+919876543210">+91 98765 43210 / +91 80 1234 5678</a>
                            </div>
                            <div className="footer-contact-item">
                                <MailOutlined className="footer-c-icon" />
                                <a href="mailto:info@asplempireproperties.com">
                                    info@asplempireproperties.com
                                </a>
                            </div>
                            <div className="footer-contact-item">
                                <ClockCircleOutlined className="footer-c-icon" />
                                <span>Mon – Sat: 9:00 AM – 7:30 PM</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ─── Bottom Bar ─── */}
                <hr className="footer-divider" />
                <div className="footer-bottom">
                    <p className="footer-copy">
                        © {new Date().getFullYear()} ASPL Empire Properties Pvt. Ltd. All rights reserved.
                    </p>
                    <div className="footer-legal-links">
                        <Link to="/faq">Privacy Policy</Link>
                        <span>•</span>
                        <Link to="/faq">Terms of Service</Link>
                        <span>•</span>
                        <Link to="/faq">RERA Disclaimer</Link>
                        <span>•</span>
                        <Link to="/site-visit">Site Visit Guide</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;