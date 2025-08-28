// src/app/Footer/Footer.tsx
"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaCode, FaRegSmile } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <div className="max-w-5xl w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-10 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-600 relative"
        >
          {/* تأثير إضاءة خفيف */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6B76DD]/5 to-purple-500/5 rounded-2xl pointer-events-none"></div>
          
          {/* النص المركزي */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold bg-gradient-to-r from-[#6B76DD] to-purple-500 bg-clip-text text-transparent mb-5 text-center"
          >
            Let&apos;s Work Together
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 text-center mb-6 max-w-2xl text-lg leading-relaxed"
          >
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out through any of the platforms below!
          </motion.p>

          {/* الأزرار */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-4 justify-center flex-wrap mt-6"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/alaa-soudy-65378a288"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all duration-300 shadow-md"
            >
              <FaLinkedin className="text-lg" /> LinkedIn
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/AlaaSoudy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:shadow-lg transition-all duration-300 shadow-md"
            >
              <FaGithub className="text-lg" /> GitHub
            </motion.a>
            
<motion.a
  whileHover={{ scale: 1.05, y: -3 }}
  whileTap={{ scale: 0.95 }}
  onClick={(e) => {
    e.preventDefault();
    const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=alaasoudy251@gmail.com";
    const mailtoLink = "mailto:alaasoudy251@gmail.com";

    // نحاول نفتح Gmail
    const win = window.open(gmailLink, "_blank");
    if (!win || win.closed || typeof win.closed === "undefined") {
      // fallback على mailto
      window.location.href = mailtoLink;
    }
  }}
  href="mailto:alaasoudy251@gmail.com"
  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 shadow-md"
>
  <FaEnvelope className="text-lg" /> Email
</motion.a>




          </motion.div>

          {/* رسالة شخصية */}
          {/* <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 p-4 bg-gradient-to-r from-[#6B76DD]/10 to-purple-500/10 rounded-lg text-center"
          >
            <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2">
              <FaCode className="text-[#6B76DD]" /> 
              Crafted with <FaHeart className="text-red-500 mx-1" /> using Next.js & Tailwind CSS 
              <FaRegSmile className="text-yellow-500 ml-2" />
            </p>
          </motion.div> */}

          {/* حقوق النشر */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-6 text-gray-500 dark:text-gray-400 text-sm text-center flex items-center gap-1"
          >
            © {new Date().getFullYear()} Alaa Soudy. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}