'use client';

import Link from 'next/link';
import { motion, Variants, easeOut } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode } from 'react-icons/fa';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    // {
    //   name: 'Portfolio Website',
    //   description:
    //     'A personal portfolio website built with Next.js, Tailwind, and React to showcase my skills and projects.',
    //   image: '/projects/portfolio.png',
    //   github: 'https://github.com/AlaaSoudy/portfolio',
    //   live: '/',
    //   technologies: ['Next.js', 'Tailwind CSS', 'React', 'TypeScript'],
    // },

    {
      name: 'E-commerce App',
      description:
        'A responsive e-commerce web application using React, Next.js, and Tailwind CSS with product listing and cart functionality.',
      // image: "/projects/ecommerce.png",
      videoEmbed:
        'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7360584968760102912?compact=1',
        image: '',
      github: 'https://github.com/AlaaSoudy/Fresh-Cart-App.git',
      live: 'https://alaasoudy.github.io/Fresh-Cart-App/',
      technologies: ['Next.js', 'Tailwind CSS', 'React', 'Stripe'],
    },

    {
      name: 'Bakery',
      description:
        'A simple responsive bakery website built with HTML and CSS, showcasing products and design layout.',
      videoEmbed:
        'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7222640931944988672?compact=1',
        image: '',
      github: 'https://github.com/AlaaSoudy/Bakery.git',
      live: 'https://alaaSoudy.github.io/Bakery',
      technologies: ['HTML', 'CSS'],
    },

    {
      name: 'Fokir',
      description:
        'A responsive personal portfolio website built with HTML, CSS, and JavaScript, designed to showcase profile, skills, and projects.',
      videoEmbed:
        'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7227085168145031169?compact=1',
        image: '',
      github: 'https://github.com/AlaaSoudy/Fokir',
      live: 'https://alaaSoudy.github.io/Fokir',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <>
      <main className="min-h-screen w-full py-12 px-12 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#6B76DD] to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My Projects
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Here are some of the projects I&apos;ve worked on. Each one represents a unique
              challenge and learning experience.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col transform hover:-translate-y-2"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                  {project.videoEmbed ? (
                    <iframe
                      src={project.videoEmbed}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      title={project.name}
                    />
                  ) : project.image ? (
                    <Image
                      src={project.image as string}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaLaptopCode className="text-5xl text-[#6B76DD] opacity-30 mx-auto my-auto" />
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-[#6B76DD] transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#6B76DD]/10 text-[#6B76DD] text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto justify-center items-center">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      className="flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6B76DD] transition w-full"
                    >
                      <FaGithub /> Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#6B76DD] to-purple-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition w-full"
                    >
                      <FaExternalLinkAlt /> Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center p-8 bg-gradient-to-r from-[#6B76DD]/10 to-purple-500/10 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Interested in working together?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I&apos;m always open to discussing new projects and opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#6B76DD] text-white px-6 py-3 rounded-lg hover:bg-[#5a64c7] transition"
            >
              <FaCode className="text-sm" /> Get In Touch
            </Link>
          </motion.div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-[#6B76DD] text-white rounded-full shadow-lg hover:bg-[#5a65c9] transition-all duration-300 z-10"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </main>
    </>
  );
}
