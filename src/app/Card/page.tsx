"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaHeart, FaCode, FaBrain } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Card() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-8 w-full relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 ">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-md w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-xl rounded-2xl p-6 flex flex-col items-center gap-5 border border-white/20 dark:border-gray-700/30"
      >
        {/* Light effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 rounded-2xl pointer-events-none"></div>
        
        {/* Profile image */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-32 h-32 group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative rounded-full p-1 bg-gradient-to-r from-purple-500 to-blue-500">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
              <Image
                src="/Alaa.jpg"
                alt="Profile Picture of Alaa"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-2 -right-2 bg-[#6B76DD] text-white p-2 rounded-full shadow-md"
          >
            <FaHeart className="text-xs" />
          </motion.div>
        </motion.div>

        {/* Information */}
        <div className="text-center space-y-2">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
          >
            Hi, I&apos;m Alaa 👋
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-700 dark:text-gray-400 flex flex-col items-center gap-1 mt-2"
          >
            <span className="flex items-center gap-1"><FaCode className="text-[#6B76DD]" /> ECE Student</span>
            <span className="flex items-center gap-1"><FaCode className="text-[#6B76DD]" /> Front-End Developer</span>
            <span className="flex items-center gap-1"><FaBrain className="text-[#6B76DD]" /> AI & ML Explorer</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-gray-700 dark:text-gray-300 text-center text-sm leading-relaxed"
          >
            I love building modern, responsive, and user-friendly web apps.
            Currently focusing on{" "}
            <span className="font-semibold text-[#6B76DD]">Next.js</span>,{" "}
            <span className="font-semibold text-[#6B76DD]">Tailwind</span>,{" "}
            <span className="font-semibold text-[#6B76DD]">Bootstrap</span>, and{" "}
            <span className="font-semibold text-[#6B76DD]">TypeScript</span>.
          </motion.p>
        </div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex flex-col gap-3 w-full"
        >
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} className="w-full">
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#6B76DD] to-[#8A98F5] text-white px-4 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 w-full text-sm font-medium"
            >
              <FaCode className="text-sm" /> View My Work
            </Link>
          </motion.div>

          <div className="flex gap-3 w-full">
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} className="flex-1">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border border-[#6B76DD] text-[#6B76DD] px-4 py-2.5 rounded-lg hover:bg-[#f3f4ff] dark:hover:bg-gray-800 transition-all duration-300 w-full text-sm font-medium"
              >
                <FaEnvelope className="text-sm" /> Contact
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} className="flex-1">
              <a
                href="../CV.pdf"
                download
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 w-full text-sm font-medium"
              >
                <FaDownload className="text-sm" /> CV
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Social media */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-3 mt-4 justify-center w-full"
        >
          <motion.a
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/AlaaSoudy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-md"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/alaa-soudy-65378a288"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>



         <motion.a
  whileHover={{ y: -3, scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={(e) => {
    e.preventDefault();
    const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=alaasoudy251@gmail.com";
    const mailtoLink = "mailto:alaasoudy251@gmail.com";

    // نحاول نفتح Gmail
    const win = window.open(gmailLink, "_blank");
    if (!win || win.closed || typeof win.closed === "undefined") {
      // fallback للـ mailto
      window.location.href = mailtoLink;
    }
  }}
  href="mailto:alaasoudy251@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md"
  aria-label="Email"
>
  <FaEnvelope className="text-lg" />
</motion.a>






        </motion.div>
      </motion.div>
    </div>
  );
}