import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, Server, Award, GraduationCap, MapPin, ChevronDown, MonitorSmartphone } from 'lucide-react';
const profileImage = `${import.meta.env.BASE_URL}profile.jpeg`;

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const bounds = element.getBoundingClientRect();
          return bounds.top <= 100 && bounds.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background ambient noise/glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="text-xl font-serif font-bold tracking-tighter">
            Arup<span className="text-primary">.dev</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === item.id ? 'text-primary' : 'text-muted-foreground'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <a 
            href="mailto:arupjyoti.daas@gmail.com"
            className="hidden md:inline-flex px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-sm border border-primary/20"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section id="home" className="min-h-[100dvh] flex items-center pt-20 pb-12">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex-1 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground mb-6">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Available for new opportunities
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold font-serif leading-tight mb-6">
                  Hi, I'm <br />
                  <span className="text-gradient">Arup Jyoti Das</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                  Full Stack Developer building scalable backend systems and high-converting modern web applications.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <button onClick={() => scrollTo('projects')} className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95">
                    View My Work
                  </button>
                  <div className="flex items-center gap-4 px-4">
                    <a href="https://github.com/Arup7733" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-foreground transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/arup-jyoti-das" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-foreground transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="mt-16 flex items-center justify-center lg:justify-start gap-8 opacity-70">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-3xl font-bold font-serif text-foreground">0-1</span>
                    <span className="text-sm text-muted-foreground">Years Experience</span>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-3xl font-bold font-serif text-foreground">100+</span>
                    <span className="text-sm text-muted-foreground">DSA Problems Solved</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 relative"
              >
                <div className="relative w-64 h-64 lg:w-96 lg:h-96 mx-auto">
                  <div className="absolute inset-0 rounded-full border border-white/10 bg-gradient-to-tr from-primary/20 to-purple-500/20 animate-pulse" />
                  <img 
                    src={profileImage} 
                    alt="Arup Jyoti Das" 
                    className="absolute inset-2 rounded-full object-cover border-2 border-white/10 shadow-2xl z-10"
                  />
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 p-3 rounded-2xl glass-panel z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                    <Code2 className="text-primary" />
                  </div>
                  <div className="absolute bottom-8 -left-8 p-3 rounded-2xl glass-panel z-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                    <Database className="text-purple-400" />
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <button onClick={() => scrollTo('about')} className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors">
                <ChevronDown size={24} />
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-white/[0.02]">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-primary" /> About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a dedicated Software Developer with hands-on experience building scalable backend systems and full-stack applications using <strong className="text-foreground">Java</strong> and <strong className="text-foreground">Python</strong>. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                My engineering approach is rooted in strong fundamentals: object-oriented programming, data structures, algorithms, and system design. I focus on delivering reliable full-stack solutions, from high-converting frontends to robust REST APIs and databases.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="glass-panel p-6 rounded-2xl">
                  <GraduationCap className="text-primary mb-4" size={28} />
                  <h3 className="font-bold text-lg mb-2">Education</h3>
                  <p className="text-muted-foreground text-sm mb-1">B.Tech in Computer Science & Engineering</p>
                  <p className="text-foreground font-medium">GIET University, Gunupur</p>
                  <p className="text-sm text-muted-foreground mt-2">Class of 2025 • CGPA: 8.21</p>
                </div>
                <div className="glass-panel p-6 rounded-2xl">
                  <MapPin className="text-primary mb-4" size={28} />
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground text-sm mb-1">Based in India</p>
                  <p className="text-foreground font-medium">Open to Remote & Relocation</p>
                  <div className="flex items-center gap-2 mt-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Ready for immediate start</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-12 flex items-center justify-end gap-4 text-right">
                Technical Arsenal <span className="w-8 h-px bg-primary" />
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Code2 size={24} />,
                    title: "Languages",
                    skills: ["Java", "Python", "JavaScript", "SQL"]
                  },
                  {
                    icon: <Server size={24} />,
                    title: "Backend",
                    skills: ["Node.js", "Express.js", "Spring Boot", "Spring Framework", "Hibernate", "JDBC", "RESTful APIs"]
                  },
                  {
                    icon: <Layout size={24} />,
                    title: "Frontend",
                    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
                  },
                  {
                    icon: <Database size={24} />,
                    title: "Databases",
                    skills: ["MySQL", "MongoDB"]
                  },
                  {
                    icon: <MonitorSmartphone size={24} />,
                    title: "Tools & Platforms",
                    skills: ["Git", "AWS", "Postman", "VS Code", "Figma", "Framer Motion"]
                  },
                  {
                    icon: <Award size={24} />,
                    title: "Core Concepts",
                    skills: ["OOP", "DSA", "System Design", "Polymorphism", "SDLC", "Cybersecurity Basics"]
                  }
                ].map((category, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-panel p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 bg-white/[0.02]">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-12 flex items-center gap-4">
                <span className="w-8 h-px bg-primary" /> Professional Experience
              </h2>

              <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12">
                {[
                  {
                    role: "Full Stack Developer",
                    company: "Kodenest Technology",
                    period: "Aug 2025 - March 2026",
                    location: "Bangalore",
                    highlights: [
                      "Developed robust REST APIs using Java, Spring Boot, and MySQL.",
                      "Built full-stack React and Node/Java applications.",
                      "Integrated frontend and backend systems, optimizing performance and debugging complex issues.",
                    ]
                  },
                  {
                    role: "Web Development Intern",
                    company: "Yhills",
                    period: "May 2023 - July 2023",
                    location: "Remote",
                    highlights: [
                      "Developed responsive web applications using HTML, CSS, and JavaScript.",
                      "Collaborated on UI improvements and cross-browser compatibility."
                    ]
                  }
                ].map((job, idx) => (
                  <div key={idx} className="relative pl-8 md:pl-0">
                    <div className="absolute -left-[41px] md:-left-[41px] top-1 w-5 h-5 rounded-full border-4 border-background bg-primary" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{job.role}</h3>
                        <p className="text-lg text-primary/80 font-medium">{job.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-left md:text-right">
                        <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-sm text-muted-foreground mb-1">
                          {job.period}
                        </span>
                        <p className="text-sm text-muted-foreground">{job.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 mt-4">
                      {job.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-muted-foreground flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="education" className="py-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-12 flex items-center justify-center gap-4">
                <span className="w-8 h-px bg-primary hidden md:block" /> Education <span className="w-8 h-px bg-primary hidden md:block" />
              </h2>
              <div className="space-y-6">
                {[
                  {
                    institute: "Gandhi Institute of Engineering and Technology, Gunupur",
                    period: "2021–2025",
                    course: "B.Tech in Computer Science and Engineering",
                    result: "CGPA: 8.21"
                  },
                  {
                    institute: "Excelsior Residential Higher Secondary School, Jajpur Road",
                    period: "2019–2021",
                    course: "Council of Higher Secondary Education, Odisha",
                    result: "Percentage: 80.6"
                  },
                  {
                    institute: "Saraswati Shishu Vidya Mandir, Singhpur",
                    period: "2009–2019",
                    course: "Matriculation (B.S.E)",
                    result: "Percentage: 80.5"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={item.institute}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="glass-panel p-6 md:p-8 rounded-3xl flex flex-col md:flex-row md:items-start justify-between gap-5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <GraduationCap size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.institute}</h3>
                        <p className="text-muted-foreground">{item.course}</p>
                        <p className="text-primary font-semibold mt-2">{item.result}</p>
                      </div>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground shrink-0">
                      {item.period}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-12 flex items-center justify-center gap-4">
                <span className="w-8 h-px bg-primary hidden md:block" /> Featured Projects <span className="w-8 h-px bg-primary hidden md:block" />
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "LegalConnect – High-Converting Law Firm Website",
                    tech: ["Figma", "Next.js", "React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Framer Motion"],
                    description: "Designed and developed a modern, conversion-focused legal services website using Figma and Next.js. Created responsive UI/UX layouts, landing pages, service sections, and contact forms to improve engagement and lead generation.",
                    points: [
                      "Designed complete UI/UX in Figma including wireframes and design system",
                      "Built responsive pages using Next.js and Tailwind CSS",
                      "Optimized performance and SEO with clear lead-capture CTAs"
                    ]
                  },
                  {
                    title: "E-Learning Portal",
                    tech: ["Python", "Django", "SQL", "HTML", "CSS", "JavaScript"],
                    description: "Developed a full-stack web application for managing courses, users, and learning content using Django and SQL.",
                    points: [
                      "Implemented user authentication, course enrollment, and content delivery",
                      "Built dynamic interfaces and backend logic",
                      "Designed maintainable features following SDLC practices"
                    ]
                  },
                  {
                    title: "FleetGo",
                    tech: ["Java", "Spring Boot", "JDBC", "MySQL", "HTML", "CSS", "JavaScript"],
                    description: "Developed a full-stack vehicle rental system enabling users to browse, book, and manage vehicle reservations.",
                    points: [
                      "Built RESTful APIs using Spring Boot and JDBC",
                      "Handled booking, user, and vehicle data efficiently",
                      "Integrated frontend with backend services and optimized database queries"
                    ]
                  }
                ].map((project, idx) => (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="glass-panel p-6 md:p-8 rounded-3xl hover:bg-white/10 transition-colors flex flex-col"
                  >
                    <div className="mb-6">
                      <span className="text-sm text-primary font-semibold">Project 0{idx + 1}</span>
                      <h3 className="text-2xl font-bold mt-3">{project.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <ul className="space-y-3 mt-auto">
                      {project.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ACHIEVEMENTS & CERTIFICATIONS */}
        <section id="achievements" className="py-24 bg-white/[0.02]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold font-serif mb-8 flex items-center gap-3">
                  <Award className="text-primary" /> Certifications
                </h2>
                <div className="space-y-4">
                  {[
                    "Crash Course on Python – Google (Coursera)",
                    "Web Development by Coursera",
                    "Java Basic – HackerRank",
                    "Python Basic – HackerRank",
                    "Full Stack Developer - Kodnest Technology",
                    "Network Basic - Cisco"
                  ].map((cert, idx) => (
                    <div key={idx} className="p-4 rounded-xl glass-panel flex items-center gap-4 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Award size={18} className="text-primary" />
                      </div>
                      <p className="font-medium">{cert}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold font-serif mb-8 flex items-center gap-3">
                  <Award className="text-purple-400" /> Achievements
                </h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl glass-panel border-l-4 border-l-purple-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Award size={64} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Smart India Hackathon 2024</h3>
                    <p className="text-purple-400 font-medium mb-2">Internal Winner</p>
                    <p className="text-muted-foreground text-sm">Recognized for innovative problem-solving and technical execution during the intense 24-hour coding sprint.</p>
                  </div>
                  
                  <div className="p-6 rounded-2xl glass-panel">
                    <h3 className="text-xl font-bold mb-2">Google Cloud Skill Badge & Arcade</h3>
                    <p className="text-muted-foreground text-sm">Successfully completed cloud computing challenges, demonstrating practical knowledge of GCP infrastructure.</p>
                  </div>
                  
                  <div className="p-6 rounded-2xl glass-panel">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      100+ Coding Problems Solved
                    </h3>
                    <p className="text-muted-foreground text-sm">Consistent practice of Data Structures and Algorithms across multiple competitive programming platforms.</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 relative">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold font-serif mb-6">Let's Build Something Great.</h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <a href="mailto:arupjyoti.daas@gmail.com" className="flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105 w-full sm:w-auto justify-center">
                  <Mail size={20} /> arupjyoti.daas@gmail.com
                </a>
                <a href="tel:+917846957512" className="flex items-center gap-3 px-8 py-4 rounded-full glass-panel font-semibold hover:bg-white/10 transition-all hover:scale-105 w-full sm:w-auto justify-center">
                  +91 7846957512
                </a>
              </div>

              <div className="flex items-center justify-center gap-8">
                <a href="https://github.com/Arup7733" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
                  <Github size={24} className="group-hover:-translate-y-1 transition-transform" /> GitHub
                </a>
                <a href="https://linkedin.com/in/arup-jyoti-das" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
                  <Linkedin size={24} className="group-hover:-translate-y-1 transition-transform" /> LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <footer className="py-8 border-t border-white/5 text-center text-sm text-muted-foreground relative z-10">
        <p>Designed and Built by Arup Jyoti Das</p>
        <p className="mt-2 opacity-50">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </div>
  );
}