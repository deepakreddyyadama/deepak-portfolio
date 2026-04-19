export default function PortfolioWebsite() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  const resumeUrl = "/Deepak_Reddy_Yadama_Resume.pdf";
  const profileImage = "/profile.png";

  const experiences = [
    {
      role: "Graduate Research Assistant - Agentic AI & Computer Vision Systems",
      company: "University of North Florida",
      period: "Aug 2025 - Present",
      points: [
        "Built end-to-end agentic AI workflows in Python with tool integration and multi-agent coordination.",
        "Developed RAG-enabled pipelines using vector search for stronger context grounding and retrieval quality.",
        "Improved SAM-2 segmentation experiments with LoRA adapters, multi-prompt guidance, and depth-aware context.",
      ],
    },
    {
      role: "Simulation Engineer Intern",
      company: "Tap4 Technologies",
      period: "May 2025 - Aug 2025",
      points: [
        "Developed Python backend modules and REST API integrations for AI-powered simulation workflows.",
        "Integrated ML outputs into production backend systems with observability improvements.",
        "Worked in Agile teams with CI/CD, automated testing, and secure AWS-oriented deployments.",
      ],
    },
  ];

  const certifications = [
    "AWS Solutions Architect (Forage)",
    "Microsoft Certified: Azure AI Fundamentals (In Progress)",
    "Electronic Arts Software Engineering Job Simulation",
    "Cisco Python Essentials",
    "Cisco JavaScript Essentials",
    "NIST AI Risk Management Framework (Self-Study)",
    "MITRE ATLAS Framework (Self-Study)",
  ];

  const skills = {
    languages: ["Python", "SQL", "Java", "JavaScript", "C++", "C#", ".NET"],
    frameworks: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "LangChain",
      "LangGraph",
      "AutoGen",
      "CrewAI",
      "React",
      "Unity",
    ],
    tools: [
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "GCP",
      "MLflow",
      "FAISS",
      "ChromaDB",
    ],
    domains: [
      "Agentic AI",
      "RAG",
      "LLM Applications",
      "Computer Vision",
      "Explainable AI",
      "Backend APIs",
    ],
  };

  const projects = [
    {
      title: "Multi-Agent RAG System with LangChain and Vector Databases",
      period: "Selected Project",
      description:
        "Built a multi-agent RAG application for retrieval, reasoning, and synthesis over domain documents using MCP-style tool integration and evaluation-driven tuning.",
      tech: ["Python", "LangChain", "AutoGen", "FAISS", "ChromaDB", "Docker"],
      highlights: [
        "Improved retrieval precision through semantic chunking and hybrid search.",
        "Added observability for latency, token usage, and trace-level monitoring.",
        "Designed the system for containerized cloud deployment.",
      ],
      link: "https://github.com/deepakreddyyadama",
    },
    {
      title: "LLM-Powered Intelligent Agent Gateway with Security Guardrails",
      period: "Selected Project",
      description:
        "Engineered a centralized agent gateway for model routing, reusable backend integration, and security-focused LLM application workflows.",
      tech: ["Python", "LLMs", "Guardrails", "Kubernetes", "CI/CD", "Backend APIs"],
      highlights: [
        "Implemented input and output filtering with prompt injection defense.",
        "Supported scalable deployment with performance-oriented backend design.",
        "Built reusable patterns for routing across multiple model providers.",
      ],
      link: "https://github.com/deepakreddyyadama",
    },
    {
      title: "T-SAM2R: Reflection-Aware Mask Refinement",
      period: "Research Project",
      description:
        "Proposed a refinement approach on top of SAM 2 for improving segmentation quality under reflections, shiny surfaces, and low-visibility conditions.",
      tech: ["Python", "PyTorch", "SAM 2", "Computer Vision", "Segmentation"],
      highlights: [
        "Worked on IoU and Dice score improvement over baseline segmentation results.",
        "Explored temporal refinement, prompt strategies, and depth-guided improvements.",
        "Targeted robust performance for reflective and low-visibility environments.",
      ],
      link: "https://github.com/deepakreddyyadama",
    },
    {
      title: "PathMNIST Explainable AI Classifier",
      period: "Academic Project",
      description:
        "Built a medical image classification workflow on PathMNIST and applied Grad-CAM and Integrated Gradients to visualize feature importance.",
      tech: ["Python", "PyTorch", "CNN", "Grad-CAM", "Integrated Gradients", "MedMNIST"],
      highlights: [
        "Trained a medical image classifier for PathMNIST categories.",
        "Generated explanation heatmaps for model interpretation.",
        "Performed faithfulness testing to compare explanation quality.",
      ],
      link: "https://github.com/deepakreddyyadama",
    },
    {
      title: "Early Earthquake Detection Using Machine Learning",
      period: "Internship Project",
      description:
        "Developed a machine learning-based project focused on early detection patterns and predictive modeling for earthquake-related signals.",
      tech: ["Python", "Machine Learning", "Data Analysis"],
      highlights: [
        "Worked on a real-world ML workflow during internship.",
        "Applied model development and evaluation techniques.",
        "Strengthened practical understanding of data-driven prediction systems.",
      ],
      link: "https://github.com/deepakreddyyadama",
    },
    {
      title: "SmartVision Unity Demo",
      period: "Prototype Project",
      description:
        "Created a real-time object detection dashboard prototype using Unity with a Python backend to simulate an AR-style desktop experience.",
      tech: ["Unity", "Python", "YOLOv5", "REST API", "WebSocket"],
      highlights: [
        "Connected detection backend with frontend dashboard visualization.",
        "Displayed real-time object detection results in a 2D UI panel.",
        "Designed the project for future AR and Meta Quest integration.",
      ],
      link: "https://github.com/deepakreddyyadama",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white [scroll-behavior:smooth]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-lg font-semibold tracking-wide text-white">
            Deepak<span className="text-cyan-300">.ai</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
          >
            Resume
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_26%)]" />
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm tracking-wide text-cyan-300 shadow-lg shadow-cyan-500/10">
                AI Engineer | Agentic AI | LLM Applications | RAG | Python
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Deepak
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I build agentic AI workflows, LLM-powered applications, retrieval-augmented systems,
                and production-oriented computer vision solutions. My focus is on shipping reliable AI
                products with strong backend engineering, measurable results, and clean user-facing experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Me
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
                >
                  View Resume
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-400/25 via-blue-400/15 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
                <img
                  src={profileImage}
                  alt="Deepak portrait"
                  className="h-[520px] w-full rounded-[1.5rem] object-cover object-center"
                />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-md">
                  <p className="text-lg font-semibold text-white">Deepak Reddy Yadama</p>
                  <p className="mt-1 text-sm text-cyan-300">AI Engineer • LLM Apps • RAG • Computer Vision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-cyan-300">About Me</h2>
            <p className="mt-4 leading-8 text-slate-300">
              I am a graduate student and AI-focused engineer with hands-on experience in agentic AI,
              retrieval-augmented generation, backend API development, observability, and applied machine learning.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              I am especially interested in building reliable AI-powered products, backend systems, and
              customer-focused software that combines strong engineering, scalable deployment, and practical business impact.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-cyan-300">Highlights</h2>
            <ul className="mt-4 space-y-4 text-slate-300">
              <li>• Built agentic AI workflows, LLM applications, and RAG-enabled systems in Python.</li>
              <li>• Experience with observability, evaluation pipelines, backend APIs, and secure AI deployment.</li>
              <li>• Worked on computer vision, explainable AI, segmentation refinement, and medical imaging workflows.</li>
              <li>• Seeking entry-level opportunities in AI engineering, software engineering, and ML-focused roles.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-cyan-300">Experience</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {experiences.map((item) => (
            <div key={item.role} className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-sm text-cyan-300">{item.company}</p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                  {item.period}
                </span>
              </div>
              <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-300">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-cyan-300">Skills</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <h3 className="text-lg font-semibold capitalize text-white">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold text-cyan-300">Projects</h2>
          <p className="mt-2 text-slate-400">Selected work across research, internships, and applied development.</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl">
              <div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-1 text-sm text-cyan-300">{project.period}</p>
              </div>

              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-300">
                {project.highlights.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>

              <div className="mt-5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200"
                >
                  View Project Work
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="certifications" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-cyan-300">Certifications & Professional Development</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300 shadow-lg">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8 shadow-2xl">
          <h2 className="text-3xl font-semibold text-white">Let’s Connect</h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-200">
            I am currently looking for opportunities in software engineering, machine learning, AI engineering, and related entry-level roles.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-100">
            <a href="mailto:deepakreddyyadama@gmail.com" className="rounded-full border border-white/15 px-4 py-2">
              Email: deepakreddyyadama@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/deepak-reddy-7a5944250/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-2"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/deepakreddyyadama"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-2"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}