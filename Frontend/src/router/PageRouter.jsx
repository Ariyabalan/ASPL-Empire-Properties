import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Properties from "../pages/Properties";
import ProjectDetail from "../pages/ProjectDetail";
import Compare from "../pages/Compare";
import EmiPage from "../pages/EmiPage";
import Construction from "../pages/Construction";
import About from "../pages/About";
import Completed from "../pages/Completed";
import Testimonials from "../pages/Testimonials";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Careers from "../pages/Careers";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";
import Brochure from "../pages/Brochure";
import SiteVisit from "../pages/SiteVisit";
import NotFound from "../pages/NotFound";

function PageRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:slug" element={<ProjectDetail />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/emi" element={<EmiPage />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/about" element={<About />} />
            <Route path="/completed-projects" element={<Completed />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/site-visit" element={<SiteVisit />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default PageRouter;