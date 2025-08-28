"use client";
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLaptopCode, FaBrain, FaBook, FaGraduationCap, FaLightbulb, FaRocket, FaArrowUp, FaCode, FaUsers, FaTasks } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from "react-helmet";
export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('summary');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Create refs for each section
  const summaryRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const hobbiesRef = useRef(null);
  const contactRef = useRef(null);

  // Track scroll position for header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll function
  const scrollToSection = (  section) => {
    let ref = null;
    switch(section) {
      case "summary":
        ref = summaryRef;
        break;
      case "education":
        ref = educationRef;
        break;
      case "skills":
        ref = skillsRef;
        break;
      case "hobbies":
        ref = hobbiesRef;
        break;
      case "contact":
        ref = contactRef;
        break;
      default:
        return;
    }

    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Parallax effect for header
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 100]);

  return (



<>

      {/* <Helmet>
        <title>About - Alaa Soudy</title>
        <meta name="description" content="Learn more about Alaa Soudy" />
        <link rel="icon" href="/favicons/favicon-32x32.png" />
      </Helmet>

 */}














    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 25, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-4 z-50 mb-8 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-xl' : 'bg-white/80 dark:bg-gray-800/80'} backdrop-blur-md rounded-xl p-3 max-w-2xl mx-auto`}
      >
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {['summary', 'education', 'skills', 'hobbies', 'contact'].map((section) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === section
                  ? 'bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD] text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </div>
      </motion.nav>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section with ref */}
        <motion.section 
          ref={summaryRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 p-8 md:p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-gray-100"
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD]">Me</span>
            </motion.h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD] mx-auto mb-8 rounded-full"
            ></motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              I&apos;m a passionate <span className="font-semibold text-[#6B76DD]">Electronics and Communication Engineering</span> student with a strong focus on 
              front-end development and AI technologies. I love creating digital experiences that are both beautiful and functional.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center gap-4 mt-10"
            >
              <Link
                href="/projects"
                className="px-6 py-3 bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD] text-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <FaCode className="text-sm" /> View My Work
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-transparent border-2 border-[#6B76DD] text-[#6B76DD] dark:text-gray-100 rounded-xl hover:bg-[#6B76DD] hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* Education Section with ref */}
        <motion.section 
          ref={educationRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16 p-8 md:p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD] rounded-full">
              <FaGraduationCap className="text-white text-xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD]">
              Education
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-[#6B76DD]/10 to-blue-100/50 dark:from-[#6B76DD]/20 dark:to-gray-700/30 p-8 rounded-2xl mb-8 border border-[#6B76DD]/20">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Helwan University — Faculty of Engineering
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">
              Bachelor of Electronics and Communication Engineering
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              2023 – 2028 (Expected)
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-700/50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#6B76DD]"
            >
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 text-lg">Current Focus</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Front-End Web Development with HTML, CSS, JavaScript, React.js, Next.js, Tailwind, and Bootstrap
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-700/50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#8A6BDD]"
            >
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 text-lg">Special Interests</h4>
              <p className="text-gray-700 dark:text-gray-300">
                AI & Machine Learning applications in engineering projects and real-world problem solving
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills & Approach Section with ref */}
        <motion.section 
          ref={skillsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16 p-8 md:p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD] rounded-full">
              <FaLightbulb className="text-white text-xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD]">
              Skills & Approach
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="text-center p-6 bg-white dark:bg-gray-700/50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-gradient-to-r from-[#6B76DD]/10 to-[#8A6BDD]/10 text-[#6B76DD] group-hover:from-[#6B76DD]/20 group-hover:to-[#8A6BDD]/20 transition-all">
                <FaCode size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 text-xl">Problem Solving</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Analytical thinking and creative solutions for complex engineering challenges
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="text-center p-6 bg-white dark:bg-gray-700/50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-gradient-to-r from-[#6B76DD]/10 to-[#8A6BDD]/10 text-[#6B76DD] group-hover:from-[#6B76DD]/20 group-hover:to-[#8A6BDD]/20 transition-all">
                <FaUsers size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 text-xl">Team Collaboration</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Effective communication and teamwork in multidisciplinary projects
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="text-center p-6 bg-white dark:bg-gray-700/50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-gradient-to-r from-[#6B76DD]/10 to-[#8A6BDD]/10 text-[#6B76DD] group-hover:from-[#6B76DD]/20 group-hover:to-[#8A6BDD]/20 transition-all">
                <FaTasks size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 text-xl">Project Management</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Planning, executing and delivering projects with attention to detail and deadlines
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Hobbies & Interests Section with ref */}
        <motion.section 
          ref={hobbiesRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-16 p-8 md:p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD] rounded-full">
              <FaLaptopCode className="text-white text-xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD]">
              Hobbies & Interests
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -8, scale: 1.03 }}
              className="flex flex-col items-center gap-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-all">
                <FaLaptopCode size={32} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-center">Building Web Projects</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Creating responsive and modern web applications</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -8, scale: 1.03 }}
              className="flex flex-col items-center gap-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-2xl group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-all">
                <FaBrain size={32} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-center">Learning AI & ML</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Exploring artificial intelligence and machine learning technologies</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -8, scale: 1.03 }}
              className="flex flex-col items-center gap-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900/50 transition-all">
                <FaBook size={32} className="text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-center">Exploring Technologies</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Staying updated with the latest tech trends and tools</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section with ref */}
        <motion.div 
          ref={contactRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center p-10 md:p-14 bg-gradient-to-r from-[#6B76DD]/10 to-blue-100/50 dark:from-[#6B76DD]/20 dark:to-gray-700/30 rounded-3xl shadow-lg border border-[#6B76DD]/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in new challenges and opportunities to grow. Whether you have a project in mind or just want to connect, feel free to reach out.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD] text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 shadow-lg text-lg font-medium"
            >
              <FaRocket /> Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <FaArrowUp />
      </motion.button>


     <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-[#6B76DD] text-white rounded-full shadow-lg hover:bg-[#5a65c9] transition-all duration-300 z-10"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>



    </main>
    </>
  );
}