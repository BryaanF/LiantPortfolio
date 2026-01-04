import React, { useState, useEffect, useContext, useCallback } from "react";
import { motion } from "framer-motion";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs() {
  const { isDark } = useContext(StyleContext);
  const [mediumBlogs, setMediumBlogs] = useState([]);
  const [loadingError, setLoadingError] = useState(false);

  // CLEAN CODE: Gunakan DOMParser untuk ekstraksi teks yang lebih akurat & aman
  const extractTextContent = useCallback((html) => {
    try {
      const doc = new DOMParser().parseFromString(html, "text/html");
      const text = doc.body.textContent || "";
      return text.slice(0, 150) + "..."; // Batasi karakter agar card rapi
    } catch (e) {
      return "";
    }
  }, []);

  useEffect(() => {
    if (blogSection.displayMediumBlogs === "true") {
      fetch("/blogs.json")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch");
          return res.json();
        })
        .then((response) => setMediumBlogs(response.items))
        .catch((error) => {
          console.error("Medium Blogs Error:", error);
          setLoadingError(true);
        });
    }
  }, []);

  if (!blogSection.display) return null;

  // Variabel animasi untuk grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // Logika penentuan sumber data blogs
  const shouldShowDefault = blogSection.displayMediumBlogs !== "true" || loadingError;
  const blogsData = shouldShowDefault ? blogSection.blogs : mediumBlogs;

  return (
    <motion.section
      id="blogs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="main section-blogs"
    >
      <div className="blog-header">
        <h1 className="blog-header-text">{blogSection.title}</h1>
        <p className={`blog-subtitle ${isDark ? "dark-mode" : "subTitle"}`}>
          {blogSection.subtitle}
        </p>
      </div>

      <div className="blog-main-div">
        <motion.div className="blog-text-div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogsData.map((blog, i) => (
            <BlogCard
              key={i}
              isDark={isDark}
              blog={{
                url: shouldShowDefault ? blog.url : blog.link,
                image: blog.image, // Medium API terkadang butuh penyesuaian untuk image
                title: blog.title,
                description: shouldShowDefault 
                  ? blog.description 
                  : extractTextContent(blog.content)
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}