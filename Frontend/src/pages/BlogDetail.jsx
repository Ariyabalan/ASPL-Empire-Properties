import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Simple from "../components/ui/Simple";
import PlaceholderImage from "../components/ui/PlaceholderImage";
import { blogs } from "../data/contents/blogs";
import NotFound from "./NotFound";

function BlogDetail() {
    const { slug } = useParams();

    const blog = blogs.find((item) => item.slug === slug);

    if (!blog) {
        return <NotFound />;
    }

    return (
        <Simple title={blog.title}>
            {/* Category & Reading Time */}
            <motion.p
                className="eyebrow"
                initial={{
                    opacity: 0,
                    y: 15,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.4,
                    delay: 0.15,
                }}
            >
                {blog.category} · {blog.readingTime}
            </motion.p>

            {/* Featured Image */}
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.96,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: "easeOut",
                }}
            >
                <PlaceholderImage
                    label={blog.featuredImage}
                />
            </motion.div>

            {/* Article Content */}
            <motion.p
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.35,
                    ease: "easeOut",
                }}
            >
                {blog.content || blog.excerpt}
            </motion.p>
        </Simple>
    );
}

export default BlogDetail;
