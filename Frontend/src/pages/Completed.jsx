import React from "react";
import { motion } from "framer-motion";
import Simple from "../components/ui/Simple";
import PlaceholderImage from "../components/ui/PlaceholderImage";

function Completed() {
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 35,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <Simple title="Completed Projects">
            <motion.div
                className="grid"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {completedProjects.map((project) => (
                    <motion.div
                        className="card"
                        key={project.id}
                        variants={item}
                        whileHover={{
                            y: -8,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                    >
                        {/* Project Image */}
                        <motion.div
                            whileHover={{
                                scale: 1.02,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                        >
                            <PlaceholderImage
                                label={project.image}
                            />
                        </motion.div>

                        {/* Project Details */}
                        <div className="pad">
                            <motion.h2 variants={item}>
                                {project.name}
                            </motion.h2>

                            <motion.p variants={item}>
                                {project.propertyType} ·{" "}
                                {project.location} · Completed{" "}
                                {project.completedYear}
                            </motion.p>

                            <motion.p variants={item}>
                                {project.highlight}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </Simple>
    );
}

export default Completed;
