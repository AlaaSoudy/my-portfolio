"use client";

import { useState, useEffect, useRef } from "react";
import Card from "./Card/page";
import ProjectsPage from "./projects/page";
import SkillsPage from "./skills/page";
import './globals.css';
import { Helmet } from "react-helmet";









export default function Home() {
  const [activeSection, setActiveSection] = useState("summary");
  const [isVisible, setIsVisible] = useState(false);
  const summaryRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);






  useEffect(() => {
   
    setIsVisible(true);

   
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      if (summaryRef.current && scrollPosition < summaryRef.current.offsetTop + summaryRef.current.offsetHeight - 300) {
        setActiveSection("summary");
      } else if (projectsRef.current && scrollPosition < projectsRef.current.offsetTop + projectsRef.current.offsetHeight - 300) {
        setActiveSection("projects");
      } else if (skillsRef.current) {
        setActiveSection("skills");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section) => {
    let ref = null;
    switch(section) {
      case "summary":
        ref = summaryRef;
        break;
      case "projects":
        ref = projectsRef;
        break;
      case "skills":
        ref = skillsRef;
        break;
      default:
        return;
    }

    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  return (






<>




{/* 
      <Helmet>
        <title>Home - Alaa Soudy</title>
        <meta name="description" content="Welcome to my portfolio homepage" />
        <link rel="icon" href="/favicons/favicon-32x32.png" />
      </Helmet>
 */}






    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* شريط التنقل الجانبي */}
      <div className="hidden lg:block fixed left-8 top-1/2 transform -translate-y-1/2 z-10">
        <div className="flex flex-col space-y-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg">
          {["summary", "projects", "skills"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`p-2 rounded-full transition-all duration-300 ${
                activeSection === section 
                  ? "bg-[#6B76DD] text-white" 
                  : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-[#6B76DD] hover:text-white"
              }`}
              aria-label={section}
            >
              <div className="w-2 h-2"></div>
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:pl-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* البطاقة الثابتة */}
          <div className="lg:sticky lg:top-8 lg:self-start lg:w-1/3 xl:w-1/4 h-full">
            <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Card />
            </div>
          </div>

          {/* المحتوى الرئيسي */}
          <div className="flex-1 space-y-12">
            {/* قسم الملخص المهني */}
            <section 
              id="summary" 
              ref={summaryRef}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-all duration-500 hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-1 rounded-full bg-[#6B76DD] mb-1"></div>
                  <div className="w-8 h-1 rounded-full bg-[#6B76DD] opacity-60"></div>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#6B76DD] to-[#8a93e6] bg-clip-text text-transparent">
                  Professional Summary
                </h2>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                I am <span className="text-[#6B76DD] font-semibold">Alaa Soudy</span>, a
                Communication and Electronics Engineering student at the Faculty of Engineering,
                <span className="text-[#6B76DD] font-semibold"> Helwan University (HUFE)</span>.
                I specialize in <span className="text-[#6B76DD] font-semibold">frontend web development </span>
                with strong expertise in <span className="text-[#6B76DD] font-semibold">C++</span>,
                <span className="text-[#6B76DD] font-semibold"> HTML</span>,
                <span className="text-[#6B76DD] font-semibold"> CSS</span>,
                <span className="text-[#6B76DD] font-semibold"> JavaScript</span>, and
                <span className="text-[#6B76DD] font-semibold"> React</span>. I'm passionate about
                <span className="text-[#6B76DD] font-semibold"> machine learning</span> and
                <span className="text-[#6B76DD] font-semibold"> artificial intelligence (AI)</span>,
                focusing on their applications in engineering, healthcare, and industry. I aim to integrate
                <span className="text-[#6B76DD] font-semibold"> engineering principles</span> with
                <span className="text-[#6B76DD] font-semibold"> AI & ML</span> to deliver impactful solutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Frontend Development", "C++", "React", "AI/ML", "Electronics"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-[#6B76DD]/10 text-[#6B76DD] rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* قسم المشاريع */}
            <section 
              id="projects" 
              ref={projectsRef}
              className="scroll-mt-16 transition-all duration-700 transform"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-1 rounded-full bg-[#6B76DD] mb-1"></div>
                  <div className="w-8 h-1 rounded-full bg-[#6B76DD] opacity-60"></div>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#6B76DD] to-[#8a93e6] bg-clip-text text-transparent">
                  Projects
                </h2>
              </div>
              <ProjectsPage />
            </section>

            {/* قسم المهارات */}
            <section 
              id="skills" 
              ref={skillsRef}
              className="scroll-mt-16 transition-all duration-700 transform"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-1 rounded-full bg-[#6B76DD] mb-1"></div>
                  <div className="w-8 h-1 rounded-full bg-[#6B76DD] opacity-60"></div>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#6B76DD] to-[#8a93e6] bg-clip-text text-transparent">
                  Skills
                </h2>
              </div>
              <SkillsPage />
            </section>
          </div>
        </div>
      </div>

      {/* زر العودة إلى الأعلى */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-[#6B76DD] text-white rounded-full shadow-lg hover:bg-[#5a65c9] transition-all duration-300 z-10"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
    </>
  );
}