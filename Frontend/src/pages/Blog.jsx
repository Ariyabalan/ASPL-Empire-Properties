import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowRightOutlined,
    CalendarOutlined,
    ReadOutlined,
    ArrowUpOutlined,
} from "@ant-design/icons";
import Simple from "../components/ui/Simple";
import PlaceholderImage from "../components/ui/PlaceholderImage";
import { blogs } from "../data/contents/blogs";

function Blog() {
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 30,
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

    const featuredBlog = blogs[0];
    const remainingBlogs = blogs.slice(1);

    return (
        <motion.main
            className="blog-page"
            initial="hidden"
            animate="visible"
            variants={container}
        >
            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="blog-hero">
                <div className="blog-hero-pattern" />

                <div className="blog-container blog-hero-content">
                    <motion.div className="blog-eyebrow" variants={item}>
                        <ReadOutlined />
                        <span>ASPL PROPERTY JOURNAL</span>
                    </motion.div>

                    <motion.h1 variants={item}>
                        Insights for
                        <span> better decisions.</span>
                    </motion.h1>

                    <motion.p variants={item}>
                        Practical guides, property insights and useful
                        perspectives to help you make more informed real
                        estate decisions.
                    </motion.p>
                </div>
            </section>

            {/* =====================================================
                FEATURED ARTICLE
            ===================================================== */}
            {featuredBlog && (
                <section className="blog-featured-section">
                    <div className="blog-container">
                        <motion.div
                            className="blog-section-heading"
                            variants={item}
                        >
                            <div>
                                <span className="blog-section-label">
                                    FEATURED INSIGHT
                                </span>

                                <h2>
                                    Start with the
                                    <span> right knowledge.</span>
                                </h2>
                            </div>
                        </motion.div>

                        <motion.article
                            className="blog-featured-card"
                            variants={item}
                            whileHover={{ y: -5 }}
                        >
                            <div className="blog-featured-image">
                                <PlaceholderImage
                                    label={featuredBlog.featuredImage}
                                />

                                <div className="blog-featured-overlay" />

                                <span className="blog-featured-category">
                                    {featuredBlog.category}
                                </span>
                            </div>

                            <div className="blog-featured-content">
                                <div className="blog-meta">
                                    <span>
                                        <ReadOutlined />
                                        Property Insights
                                    </span>

                                    <span>
                                        <CalendarOutlined />
                                        Featured Article
                                    </span>
                                </div>

                                <h3>{featuredBlog.title}</h3>

                                <p>{featuredBlog.excerpt}</p>

                                <Link
                                    to={`/blog/${featuredBlog.slug}`}
                                    className="blog-featured-link"
                                >
                                    Read Featured Article
                                    <ArrowRightOutlined />
                                </Link>
                            </div>
                        </motion.article>
                    </div>
                </section>
            )}

            {/* =====================================================
                ARTICLES
            ===================================================== */}
            <section className="blog-articles-section">
                <div className="blog-container">
                    <motion.div
                        className="blog-section-heading blog-articles-heading"
                        variants={item}
                    >
                        <div>
                            <span className="blog-section-label">
                                LATEST ARTICLES
                            </span>

                            <h2>
                                Explore our
                                <span> latest insights.</span>
                            </h2>
                        </div>

                        <p>
                            Explore practical information covering property
                            buying, investment, locations, finance and
                            homeownership.
                        </p>
                    </motion.div>

                    <motion.div
                        className="blog-grid"
                        variants={container}
                    >
                        {remainingBlogs.map((blog, index) => (
                            <motion.article
                                className="blog-card"
                                key={blog.id}
                                variants={item}
                                whileHover={{ y: -8 }}
                            >
                                {/* Image */}
                                <Link
                                    to={`/blog/${blog.slug}`}
                                    className="blog-card-image"
                                >
                                    <PlaceholderImage
                                        label={blog.featuredImage}
                                    />

                                    <span className="blog-card-number">
                                        {String(index + 2).padStart(2, "0")}
                                    </span>

                                    <span className="blog-card-category">
                                        {blog.category}
                                    </span>
                                </Link>

                                {/* Content */}
                                <div className="blog-card-content">
                                    <div className="blog-card-meta">
                                        <ReadOutlined />
                                        <span>Property Journal</span>
                                    </div>

                                    <h3>
                                        <Link
                                            to={`/blog/${blog.slug}`}
                                        >
                                            {blog.title}
                                        </Link>
                                    </h3>

                                    <p>{blog.excerpt}</p>

                                    <Link
                                        to={`/blog/${blog.slug}`}
                                        className="blog-card-link"
                                    >
                                        Read Article
                                        <ArrowRightOutlined />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* Empty State */}
                    {remainingBlogs.length === 0 && (
                        <motion.div
                            className="blog-empty"
                            variants={item}
                        >
                            <ReadOutlined />

                            <h3>More insights coming soon</h3>

                            <p>
                                We are preparing more property guides and
                                insights for you.
                            </p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* =====================================================
                KNOWLEDGE STRIP
            ===================================================== */}
            <section className="blog-topics">
                <div className="blog-container">
                    <motion.div
                        className="blog-topics-grid"
                        variants={container}
                    >
                        <motion.div
                            className="blog-topic-intro"
                            variants={item}
                        >
                            <span className="blog-section-label">
                                KNOWLEDGE CENTRE
                            </span>

                            <h2>
                                Everything you need
                                <span> to move forward.</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            className="blog-topic"
                            variants={item}
                        >
                            <span>01</span>
                            <h3>Buying Guides</h3>
                            <p>
                                Understand the important steps involved in
                                choosing and purchasing a property.
                            </p>
                        </motion.div>

                        <motion.div
                            className="blog-topic"
                            variants={item}
                        >
                            <span>02</span>
                            <h3>Investment</h3>
                            <p>
                                Learn how location, timing and property
                                fundamentals can influence your decision.
                            </p>
                        </motion.div>

                        <motion.div
                            className="blog-topic"
                            variants={item}
                        >
                            <span>03</span>
                            <h3>Homeownership</h3>
                            <p>
                                Useful guidance for planning, financing and
                                owning your next home.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                CTA
            ===================================================== */}
            <section className="blog-cta">
                <div className="blog-container">
                    <motion.div
                        className="blog-cta-content"
                        variants={item}
                    >
                        <span className="blog-section-label">
                            READY TO TAKE THE NEXT STEP?
                        </span>

                        <h2>
                            Turn insights into
                            <span> your next move.</span>
                        </h2>

                        <p>
                            Explore our properties or speak with our team to
                            find a development that fits your plans.
                        </p>

                        <div className="blog-cta-actions">
                            <Link
                                to="/properties"
                                className="blog-primary-btn"
                            >
                                Explore Properties
                                <ArrowRightOutlined />
                            </Link>

                            <Link
                                to="/contact"
                                className="blog-contact-link"
                            >
                                Speak with our team
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="blog-cta-mark"
                        variants={item}
                    >
                        <ArrowUpOutlined />
                    </motion.div>
                </div>
            </section>
        </motion.main>
    );
}

export default Blog;

