import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Download, Briefcase, User, Layers, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './index.css';

const data = {
  name: "Sanath Kumar",
  title: "Full Stack Software Engineer",
  heroText: "Full Stack Software Engineer building scalable applications with React, TypeScript, Spring Boot, and AWS.",
  status: "Connect. Chat. Collaborate.",
  currentRole: "Software Engineer @BNS Inc. (2025 — Present)",
  experience: [
    {
      role: "Software Engineer",
      company: "BNS Inc.",
      date: "Jul 2025 - Present",
      description: "Built scalable customer-facing applications using React, Java, Node.js, TypeScript, GraphQL, Go, and AWS, improving overall system performance by 30%. Optimized REST APIs handling 10K+ requests/day using Redis caching, optimized PostgreSQL queries.",
      skills: ["React", "Java", "Node.js", "GraphQL", "AWS"]
    },
    {
      role: "Software Developer - Web",
      company: "WoMen of Connections Ministry",
      date: "Jun 2024 - Aug 2024",
      description: "Developed and improved transaction workflows and performance using React, JavaScript/TypeScript, Python, reducing bounce rate by 15% with mobile-responsive design.",
      skills: ["React", "TypeScript", "Python", "AWS"]
    },
    {
      role: "Software Developer",
      company: "Odico A/S",
      date: "Aug 2022 - Oct 2023",
      description: "Assisted in implementing Infrastructure as Code using Terraform and AWS to provision cloud resources, reducing manual effort by 70%. Configured monitoring and logging pipelines.",
      skills: ["Terraform", "AWS", "Grafana"]
    },
    {
      role: "Software Engineer",
      company: "Rakuten International",
      date: "Jan 2022 - Aug 2022",
      description: "Contributed to back-end services from design to deployment, developing scalable RESTful APIs using Spring Boot, Java, and SQL. Achieved 85% test coverage using JUnit and Mockito.",
      skills: ["Spring Boot", "Java", "Jenkins", "SQL"]
    }
  ],
  projects: [
    {
      name: "Resonance",
      description: "AI-assisted cross-platform music streaming application using React, Vite, Capacitor, Django REST APIs, and YouTube Data API v3.",
      github: "https://github.com/sanathparimi",
      icon: <Layers size={28} />
    },
    {
      name: "Secure File Storage",
      description: "Full-stack application using Angular, Spring Boot, and SQL with scalable REST/GraphQL APIs. Implemented end-to-end encryption (AES).",
      github: "https://github.com/sanathparimi",
      icon: <Briefcase size={28} />
    },
    {
      name: "Reddit Clone",
      description: "Customer-oriented full-stack application using React, Spring Boot, SQL, designing scalable REST APIs and backend services.",
      github: "https://github.com/sanathparimi",
      icon: <User size={28} />
    }
  ],
  socials: [
    { name: "Email", handle: "sanathkumarparimi999...", url: "mailto:sanathkumarparimi999@gmail.com", icon: <FaEnvelope size={24} /> },
    { name: "GitHub", handle: "@sanathparimi", url: "https://github.com/parimisanathkumar-cpu", icon: <FaGithub size={24} /> },
    { name: "LinkedIn", handle: "@sanathparimi", url: "https://www.linkedin.com/in/sanath-kumar-parimi-936341192/", icon: <FaLinkedin size={24} /> }
  ],
  focus: [
    "JavaScript", "TypeScript", "ReactJS", "Next.js", "Java", "Spring Boot", "Node.js", "GraphQL", "Python", "AWS", "Docker", "PostgreSQL", "Redis"
  ]
};

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Simple scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'resume', 'projects', 'connect'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="nav-container">
        {['Home', 'Experience', 'Resume', 'Projects', 'Connect'].map((item) => (
          <button
            key={item}
            className={`nav-item ${activeSection === item.toLowerCase() ? 'active' : ''}`}
            onClick={() => scrollTo(item.toLowerCase())}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="container">
        {/* HERO SECTION */}
        <section id="home" className="hero-section">
          <FadeIn>
            <h1 className="title">{data.name}</h1>
            <p className="subtitle" style={{ fontSize: '1.5rem', color: '#111827' }}>
              {data.heroText}
            </p>
            <div className="status-indicator">
              <span className="status-dot"></span>
              {data.status}
            </div>
            <br />
            <a href="#connect" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('connect'); }}>
              Get In Touch <ExternalLink size={20} />
            </a>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="glass-card" style={{ marginBottom: '2rem' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600 }}>Currently</p>
              <p style={{ fontWeight: 600, color: '#111827' }}>{data.currentRole}</p>
            </div>
            <div className="glass-card">
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem', fontWeight: 600 }}>Focus</p>
              <div className="pill-container">
                {data.focus.map((skill, idx) => (
                  <span key={idx} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" style={{ marginBottom: '8rem' }}>
          <FadeIn>
            <h2 className="section-title">Experience</h2>
            <div className="experience-container">
              {data.experience.map((exp, index) => (
                <div key={index} className="glass-card experience-card">
                  <div className="exp-date">{exp.date}</div>
                  <div>
                    <h3 className="exp-title">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                    <p className="exp-desc">{exp.description}</p>
                    <div className="pill-container">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="skill-pill" style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem' }}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* RESUME SECTION */}
        <section id="resume" style={{ marginBottom: '8rem' }}>
          <FadeIn>
            <h2 className="section-title">Resume</h2>
            <div className="resume-grid">
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                  <a href="https://drive.google.com/drive/folders/1fyHMCFezEMGWCZICMdLiHC-47qt2zpkm" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#111827' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                      <ExternalLink size={16} /> View
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>May 2026</div>
                  </a>
                  <a href="/resume.pdf" download style={{ textDecoration: 'none', color: '#111827' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                      <FaDownload size={16} /> Download
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      May 2026<br />
                      PDF Format
                    </div>
                  </a>
                </div>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#374151', fontWeight: 500 }}>
                  Full Stack Software Engineer with extensive experience building scalable, high-performance applications using React, TypeScript, Java, Spring Boot, and AWS. Focused on delivering reliable, modular code for large-scale systems and optimizing REST APIs handling thousands of requests daily. Passionate about improving system performance, leveraging cloud infrastructure (Terraform, AWS), and collaborating cross-functionally to ship impactful features.
                </p>
              </div>
              <div className="glass-card" style={{ minHeight: '850px', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '1rem 1.5rem', background: 'rgba(255,255,255,0.4)', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, color: '#111827' }}>Resume Preview</span>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-color)' }}>Open PDF</a>
                </div>
                <iframe src="/resume.pdf#zoom=FitH" style={{ width: '100%', flex: 1, border: 'none', minHeight: '800px' }} title="Resume PDF Preview" />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" style={{ marginBottom: '8rem' }}>
          <FadeIn>
            <h2 className="section-title">Personal Projects</h2>
            <div className="projects-grid">
              {data.projects.map((project, index) => (
                <div key={index} className="glass-card">
                  <div className="project-icon">
                    {project.icon}
                  </div>
                  <h3 className="project-title">{project.name}</h3>
                  <p className="exp-desc" style={{ marginBottom: '0' }}>{project.description}</p>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub size={16} /> View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* CONNECT SECTION */}
        <section id="connect" style={{ marginBottom: '4rem' }}>
          <FadeIn>
            <div className="hero-section" style={{ marginBottom: 0, alignItems: 'start' }}>
              <div>
                <h2 className="title" style={{ fontSize: '3rem' }}>Let's <span style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Connect</span></h2>
                <p className="subtitle">Always interested in new projects, collaborations, and conversations about software development.</p>
                <a href={data.socials[0].url} className="btn-primary">
                  Drop an Email <ExternalLink size={20} />
                </a>
              </div>
              <div className="connect-grid">
                {data.socials.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="glass-card social-card" style={{ padding: '1rem', textDecoration: 'none', color: '#111827' }}>
                    <div className="social-icon-wrapper">
                      {social.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{social.name}</div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </>
  );
}

export default App;
