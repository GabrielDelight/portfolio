import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Writing",
  "Contact",
];

const SKILLS = {
  Frontend: [
    "React.js",
    "Next.js",
    "React Native",
    "TypeScript",
    "JavaScript ES6+",
    "Tailwind CSS",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "Microservices",
    "MySQL",
    "MongoDB",
  ],
  Blockchain: [
    "Solidity",
    "Ethers.js",
    "Web3.js",
    "EVM",
    "Smart Contracts",
    "NFT Minting",
    "DeFi",
    "IPFS",
    "Hardhat",
    "Account Abstraction",
  ],
  Cloud: [
    "AWS EC2",
    "AWS S3",
    "Digital Ocean",
    "Cloudflare",
    "Shopify",
    "Deployment",
  ],
  Mobile: ["React Native", "WebRTC", "Socket.io", "FCM", "Push Notifications"],
  Practices: [
    "Jest",
    "Git/GitHub",
    "Technical Writing",
    "Postman",
    "Swagger.js",
  ],
};

const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    company: "Brainmedia Tech",
    period: "Sep 2025 – Feb 2026",
    type: "Full-Time",
    color: "#00d4aa",
    bullets: [
      "Led SEO optimisation for Lapsnaps, a motorsport e-commerce platform — improved Core Web Vitals, metadata coverage, and crawlability.",
      "Delivered full-stack features for Fanboxes using Next.js and MongoDB, owning both API integration and frontend performance.",
      "Sole developer on slashend.com — delivered a fully custom Shopify storefront from zero to live with Cloudflare deployment.",
    ],
    tech: ["Next.js", "MongoDB", "AWS", "Shopify", "Cloudflare"],
  },
  {
    role: "Backend / Blockchain Engineer",
    company: "Chune.xyz",
    period: "Oct 2024 – Apr 2025",
    type: "Contract",
    color: "#7c3aed",
    bullets: [
      "Architected and scaled backend services for a Web3 music tokenization platform using Node.js and MySQL on AWS EC2.",
      "Developed EVM-compatible Solidity smart contracts to mint song cover art as NFTs stored on IPFS via Ethers.js and Hardhat.",
      "Engineered gasless NFT minting using Alchemy Paymaster + Dynamic.xyz, removing all gas barriers for users and artists.",
    ],
    tech: [
      "Solidity",
      "Node.js",
      "MySQL",
      "Hardhat",
      "Ethers.js",
      "IPFS",
      "AWS",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Sprinterwave Technologies",
    period: "Jun 2023 – Aug 2024",
    type: "Contract",
    color: "#f59e0b",
    bullets: [
      "Built a cross-platform mobile super-app (Android & iOS) covering ride-hailing, bill payments, event booking from scratch.",
      "Integrated real-time encrypted voice calls and chat via WebRTC and Socket.io, replacing all third-party calling services.",
      "Integrated Moniepoint API for virtual account generation per user, streamlining in-app transactions.",
    ],
    tech: [
      "React Native",
      "WebRTC",
      "Socket.io",
      "Node.js",
      "MySQL",
      "Moniepoint API",
    ],
  },
];

const PROJECTS = [
  {
    name: "Chune.xyz",
    desc: "Web3 music tokenization platform with gasless NFT minting, USDC payments, and account abstraction on Ethereum.",
    tags: ["Solidity", "EVM", "IPFS", "Alchemy", "Node.js"],
    url: "https://chune.xyz",
    color: "#7c3aed",
  },
  {
    name: "Slashend.com",
    desc: "Custom Shopify storefront built from zero to live — full theme development, Cloudflare CDN deployment, and client handover.",
    tags: ["Shopify", "Cloudflare", "E-Commerce"],
    url: "https://slashend.com",
    color: "#00d4aa",
  },
  {
    name: "Sprinterwave App",
    desc: "Cross-platform mobile super-app on Android & iOS with ride-hailing, real-time WebRTC communication, and Moniepoint virtual accounts.",
    tags: ["React Native", "WebRTC", "Socket.io", "Moniepoint"],
    url: "https://sprinterwave.com",

    color: "#f59e0b",
  },
];

const WRITING = [
  {
    org: "OpenReplay",
    period: "Sep 2022 – Jul 2024",
    count: "20+",
    topics: "React Native, Blockchain, Web3 tooling, WebRTC, CSS, Jest",
  },
  {
    org: "Semaphore CI",
    period: "May 2023 – Mar 2024",
    count: "5",
    topics: "Solidity, React Native, ERC-20, DeFi, Hardhat",
  },
  {
    org: "Pieces",
    period: "Oct 2022 – Nov 2023",
    count: "Several",
    topics: "React, JavaScript, UI Frameworks, API Integration",
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [glitchActive, setGlitchActive] = useState(false);

  const titles = [
    "Full-Stack Developer",
    "Blockchain Engineer",
    "Web3 Builder",
    "Mobile Architect",
  ];
  const titleRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let timeout;
    const type = () => {
      const current = titles[titleRef.current];
      if (!deletingRef.current) {
        setTypedText(current.slice(0, charRef.current + 1));
        charRef.current++;
        if (charRef.current === current.length) {
          deletingRef.current = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        setTypedText(current.slice(0, charRef.current - 1));
        charRef.current--;
        if (charRef.current === 0) {
          deletingRef.current = false;
          titleRef.current = (titleRef.current + 1) % titles.length;
        }
      }
      timeout = setTimeout(type, deletingRef.current ? 55 : 85);
    };
    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map((l) => l.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    
  };

  return (
    <div
      style={{
        fontFamily: "'DM Mono', 'Fira Code', monospace",
        background: "#080b0f",
        color: "#e2e8f0",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Syne:wght@400;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        .glitch {
          position: relative;
        }
        .glitch.active::before, .glitch.active::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
        }
        .glitch.active::before {
          color: #00d4aa;
          clip: rect(0, 900px, 12px, 0);
          animation: glitch-1 0.2s linear;
        }
        .glitch.active::after {
          color: #7c3aed;
          clip: rect(20px, 900px, 60px, 0);
          animation: glitch-2 0.2s linear;
          left: 2px;
        }
        @keyframes glitch-1 {
          0% { clip: rect(0, 900px, 4px, 0); transform: translateX(-2px); }
          50% { clip: rect(30px, 900px, 50px, 0); transform: translateX(2px); }
          100% { clip: rect(60px, 900px, 70px, 0); transform: translateX(0); }
        }
        @keyframes glitch-2 {
          0% { clip: rect(50px, 900px, 70px, 0); transform: translateX(2px); }
          50% { clip: rect(10px, 900px, 25px, 0); transform: translateX(-2px); }
          100% { clip: rect(40px, 900px, 55px, 0); transform: translateX(0); }
        }

        .fade-in { animation: fadeUp 0.7s ease both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .skill-tag {
          display: inline-block;
          padding: 4px 10px;
          border: 1px solid rgba(0,212,170,0.3);
          border-radius: 2px;
          font-size: 11px;
          color: #00d4aa;
          background: rgba(0,212,170,0.06);
          margin: 3px;
          letter-spacing: 0.04em;
          transition: all 0.2s;
          cursor: default;
        }
        .skill-tag:hover {
          background: rgba(0,212,170,0.15);
          border-color: #00d4aa;
        }

        .exp-card {
          border-left: 2px solid;
          padding-left: 24px;
          margin-bottom: 48px;
          position: relative;
          transition: all 0.3s;
        }
        .exp-card::before {
          content: '';
          position: absolute;
          left: -5px; top: 6px;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: currentColor;
        }

        .project-card {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 4px;
          padding: 28px;
          background: rgba(255,255,255,0.02);
          transition: all 0.3s;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 2px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .project-card:hover::before { transform: scaleX(1); }
        .project-card:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.12);
        }

        .nav-link {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 0;
          color: #64748b;
          transition: color 0.2s;
          position: relative;
        }
        .nav-link:hover, .nav-link.active { color: #00d4aa; }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 1px;
          background: #00d4aa;
        }

        .section { padding: 96px 0; }
        .section-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #00d4aa;
          margin-bottom: 12px;
          font-family: 'DM Mono', monospace;
        }
        .section-title {
          font-family: sans-serif;
          font-weight: 800;
          font-size: clamp(28px, 4vw, 40px);
          color: #f8fafc;
          margin-bottom: 48px;
          line-height: 1.1;
        }

        .cta-btn {
          display: inline-block;
          padding: 12px 28px;
          border: 1px solid #00d4aa;
          color: #00d4aa;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-decoration: none;
          cursor: pointer;
          background: transparent;
          transition: all 0.25s;
          border-radius: 2px;
        }
        .cta-btn:hover {
          background: rgba(0,212,170,0.1);
          box-shadow: 0 0 20px rgba(0,212,170,0.15);
        }
        .cta-btn.filled {
          background: #00d4aa;
          color: #080b0f;
          font-weight: 500;
        }
        .cta-btn.filled:hover {
          background: #00f0c0;
          box-shadow: 0 0 30px rgba(0,212,170,0.3);
        }

        .cursor-blink {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: #00d4aa;
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }

        .writing-card {
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 3px;
          padding: 24px;
          background: rgba(255,255,255,0.02);
          margin-bottom: 16px;
          transition: border-color 0.2s;
        }
        .writing-card:hover { border-color: rgba(0,212,170,0.25); }

        .grid-bg {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 0;
          background-image:
            linear-gradient(rgba(0,212,170,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,170,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .contact-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          padding: 12px 16px;
          color: #e2e8f0;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          outline: none;
          transition: border-color 0.2s;
          margin-bottom: 16px;
        }
        .contact-input:focus { border-color: #00d4aa; }
        .on_mobile_view {display: none}

        @media (max-width: 768px) {
          .section { padding: 64px 0; }
          .exp-card { padding-left: 16px; }
          .project-grid { grid-template-columns: 1fr !important; }
          .image_wrapper { display: none}
          .nav_list {display: none !important}
          .on_mobile_view {display: block !important}
        }

        .flip-left {
          transform: scaleX(-1);
        }
      `}</style>

      <div className="grid-bg" />

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(8,11,15,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "all 0.3s",
          padding: "0 max(24px, 5vw)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 18,
              color: "#f8fafc",
              letterSpacing: "-0.02em",
            }}
          >
            GD<span style={{ color: "#00d4aa" }}>.</span>
          </span>
          <div
            className="nav_list"
            style={{ display: "flex", gap: 28, alignItems: "center" }}
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                className={`nav-link${activeSection === l.toLowerCase() ? " active" : ""}`}
                onClick={() => scrollTo(l)}
              >
                {l}
              </button>
            ))}
            <a
              href="mailto:gabrieldelight08@gmail.com"
              className="cta-btn"
              style={{ fontSize: 11, padding: "6px 16px" }}
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 max(24px, 5vw)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* HERO */}
        <section
          id="about"
          className="section"
          style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
        >
          <div className="fade-in" style={{ maxWidth: 760 }}>
            <p
              style={{
                color: "#00d4aa",
                fontFamily: "'DM Mono', monospace",
                fontSize: 13,
                letterSpacing: "0.15em",
                marginBottom: 24,
              }}
            >
              &gt; Hello, World
            </p>
            <div
              style={{
                maxWidth: "40%",
                position: "relative",
                marginBottom: "1rem",
              }}
              className="fade-in on_mobile_view"
            >
              <img
                src="/me.jpeg"
                alt="Gabriel Delight"
                style={{
                  width: "100%",
                  borderRadius: 8,
                  filter: "grayscale(20%) brightness(90%)",
                }}
              />
            </div>

            <h1
              className={`glitch${glitchActive ? " active" : ""}`}
              data-text="Gabriel Delight"
              style={{
                fontFamily: "sans-serif",
                fontWeight: 800,
                fontSize: "clamp(42px, 8vw, 80px)",
                lineHeight: 1,
                color: "#f8fafc",
                letterSpacing: "-0.03em",
                marginBottom: 16,
              }}
            >
              Gabriel Delight
            </h1>

            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(20px, 4vw, 32px)",
                color: "#94a3b8",
                lineHeight: 1.2,
                marginBottom: 32,
                minHeight: "1.4em",
              }}
            >
              <span style={{ color: "#00d4aa" }}>{typedText}</span>
              <span className="cursor-blink" />
            </h2>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "#94a3b8",
                maxWidth: 560,
                marginBottom: 40,
              }}
            >
              5+ years shipping production-grade web, mobile, and Web3
              applications. From gasless NFT pipelines to real-time mobile
              super-apps — I architect systems that work at scale. Based in{" "}
              <span style={{ color: "#e2e8f0" }}>Port Harcourt, Nigeria</span> ·
              Available for remote work (WAT, UTC+1).
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button
                className="cta-btn filled"
                onClick={() => scrollTo("Projects")}
              >
                View Projects
              </button>
              <button className="cta-btn" onClick={() => scrollTo("Contact")}>
                Get in Touch
              </button>
            </div>
            <div
              style={{
                marginTop: 64,
                display: "flex",
                gap: 40,
                flexWrap: "wrap",
              }}
            >
              {[
                ["5+", "Years Experience"],
                ["3", "Companies"],
                ["20+", "Dev Articles"],
                ["3", "Live Products"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: 32,
                      color: "#00d4aa",
                      lineHeight: 1,
                    }}
                  >
                    {n}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#64748b",
                      marginTop: 4,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image section */}
          <div
            style={{
              marginLeft: "auto",
              maxWidth: "40%",
              position: "relative",
            }}
            className="fade-in image_wrapper"
          >
            <img
              src="/me.jpeg"
              alt="Gabriel Delight"
              style={{
                width: "100%",
                borderRadius: 8,
                filter: "grayscale(20%) brightness(90%)",
              }}
            />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <p className="section-label">02. Capabilities</p>
          <h2 className="section-title">Core Skills</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div
                key={cat}
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 4,
                  padding: 24,
                  background: "rgba(255,255,255,0.015)",
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#00d4aa",
                    marginBottom: 16,
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {cat}
                </p>
                <div>
                  {items.map((s) => (
                    <span key={s} className="skill-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <p className="section-label">03. Career</p>
          <h2 className="section-title">Work Experience</h2>
          <div style={{ maxWidth: 780 }}>
            {EXPERIENCE.map((exp) => (
              <div
                key={exp.company}
                className="exp-card"
                style={{ borderLeftColor: exp.color, color: exp.color }}
              >
                <div
                  style={{
                    marginBottom: 6,
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "baseline",
                    gap: "8px 16px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: 20,
                      color: "#f8fafc",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <span style={{ fontSize: 13, color: exp.color }}>
                    {exp.company}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "#64748b",
                      letterSpacing: "0.06em",
                      marginLeft: "auto",
                    }}
                  >
                    {exp.period}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      padding: "2px 8px",
                      border: `1px solid ${exp.color}40`,
                      borderRadius: 2,
                      color: exp.color,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {exp.type}
                  </span>
                </div>
                <ul style={{ listStyle: "none", marginBottom: 16 }}>
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: 13.5,
                        lineHeight: 1.7,
                        color: "#94a3b8",
                        marginBottom: 8,
                        paddingLeft: 16,
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: exp.color,
                        }}
                      >
                        ›
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11,
                        padding: "3px 8px",
                        background: `${exp.color}10`,
                        border: `1px solid ${exp.color}25`,
                        borderRadius: 2,
                        color: exp.color,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <p className="section-label">04. Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <div
            className="project-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {PROJECTS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                style={{
                  "--accent": p.color,
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 12,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "#f8fafc",
                    }}
                  >
                    {p.name}
                  </h3>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    style={{ color: p.color, flexShrink: 0, marginTop: 3 }}
                  >
                    <path
                      d="M1 13L13 1M13 1H5M13 1V9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.7,
                    color: "#94a3b8",
                    marginBottom: 20,
                  }}
                >
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11,
                        padding: "3px 8px",
                        background: `${p.color}10`,
                        border: `1px solid ${p.color}25`,
                        borderRadius: 2,
                        color: p.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* WRITING */}
        <section id="writing" className="section">
          <p className="section-label">05. Technical Writing</p>
          <h2 className="section-title">Published Work</h2>
          <div style={{ maxWidth: 780 }}>
            {WRITING.map((w) => (
              <div key={w.org} className="writing-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: 17,
                      color: "#f8fafc",
                    }}
                  >
                    {w.org}
                  </h3>
                  <div
                    style={{ display: "flex", gap: 16, alignItems: "center" }}
                  >
                    <span
                      style={{
                        fontSize: 22,
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 800,
                        color: "#00d4aa",
                      }}
                    >
                      {w.count}
                    </span>
                    <span style={{ fontSize: 11, color: "#64748b" }}>
                      articles
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        color: "#64748b",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {w.period}
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: 12.5,
                    color: "#64748b",
                    letterSpacing: "0.03em",
                  }}
                >
                  {w.topics}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <p className="section-label">06. Get in Touch</p>
          <h2 className="section-title">Let's Work Together</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.8,
                  color: "#94a3b8",
                  marginBottom: 32,
                }}
              >
                I'm open to remote-first global roles in full-stack development,
                blockchain engineering, or mobile development. Whether it's a
                contract gig, a full-time position, or a collaboration — let's
                talk.
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {[
                  {
                    label: "Email",
                    value: "gabrieldelight08@gmail.com",
                    href: "mailto:gabrieldelight08@gmail.com",
                  },
                  {
                    label: "Phone",
                    value: "+234 808 002 5944",
                    href: "tel:+2348080025944",
                  },
                  {
                    label: "Location",
                    value: "Port Harcourt, Nigeria",
                    href: null,
                  },
                  {
                    label: "Availability",
                    value: "Remote (WAT, UTC+1)",
                    href: null,
                  },
                ].map(({ label, value, href }) => (
                  <div
                    key={label}
                    style={{ display: "flex", gap: 16, alignItems: "baseline" }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#00d4aa",
                        minWidth: 80,
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontSize: 13.5,
                          color: "#e2e8f0",
                          textDecoration: "none",
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {value}
                      </a>
                    ) : (
                      <span style={{ fontSize: 13.5, color: "#94a3b8" }}>
                        {value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 16, marginTop: 36 }}>
                <a
                  href="https://www.linkedin.com/in/gabriel-delight-41459b243/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn"
                  style={{ fontSize: 11 }}
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://github.com/gabrieldelight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn"
                  style={{ fontSize: 11 }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px max(24px, 5vw)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 16,
            color: "#f8fafc",
          }}
        >
          GD<span style={{ color: "#00d4aa" }}>.</span>
        </span>
        <span
          style={{
            fontSize: 12,
            color: "#334155",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          © {new Date().getFullYear()} Gabriel Delight · Built with React
        </span>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:gabrieldelight08@gmail.com?subject=Portfolio Inquiry from ${form.name}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
    window.open(mailto, "_blank");
    setSent(true);
  };

  if (sent) {
    return (
      <div
        style={{
          border: "1px solid rgba(0,212,170,0.3)",
          borderRadius: 4,
          padding: 32,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 16 }}>✓</div>
        <p
          style={{
            color: "#00d4aa",
            fontFamily: "'DM Mono', monospace",
            fontSize: 13,
          }}
        >
          Message prepared — check your mail client.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input
        className="contact-input"
        placeholder="Your name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        className="contact-input"
        type="email"
        placeholder="your@email.com"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <textarea
        className="contact-input"
        placeholder="Tell me about your project..."
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
        style={{ resize: "vertical" }}
      />
      <button
        type="submit"
        className="cta-btn filled"
        style={{ alignSelf: "flex-start" }}
      >
        Send Message →
      </button>
    </form>
  );
}
