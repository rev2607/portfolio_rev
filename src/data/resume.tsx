import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Revanth Guthula",
  initials: "RG",
  url: "https://www.revanth.cloud",
  location: "Hyderabad, IN",
  locationLink: "https://www.google.com/maps/place/Hyderabad",
  description:
    "Aspiring Full Stack Developer",
  summary: `Full Stack Developer and Final-year B.Tech student in Artificial Intelligence & Data Science. Skilled in building scalable, production-ready web applications using React, Next.js, Node.js, Express, and PostgreSQL. Experienced in REST APIs, authentication, database design, and cloud deployment. Strong foundations in C++, Python, and System design.`,
  avatarUrl: "/profile.jpg",
  skills: [
    // Programming
    "C++",
    "Python",
    "SQL",
    // Frontend
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "TailwindCSS",
    "Responsive Design",
    // Backend
    "Node.js",
    "Express.js",
    "FastAPI",
    "REST APIs",
    "Authentication & Authorization",
    // Databases
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Supabase",
    // DevOps & Cloud
    "Linux",
    "Git",
    "GitHub",
    "Docker",
    "AWS (EC2, S3, RDS)",
    "GCP",
    "Vercel",
    "CI/CD pipelines (GitHub Actions)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/revanthGuthula.pdf", icon: Icons.resume as any, label: "Resume" },
  ],
  contact: {
    email: "revanth2607@gmail.com",
    tel: "+91 93467 80091",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rev2607",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rev2607/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/revvvanth",
        icon: Icons.x,

        navbar: true,
      },
      Kaggle: {
        name: "Kaggle",
        url: "https://www.kaggle.com/revanth7777",
        icon: Icons.kaggle,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:revanth2607@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ghar Ka Khana",
      href: "#",
      badges: [],
      location: "Mumbai",
      title: "Software Developer Intern",
      logoUrl: "/gharkakhana.png",
      start: "Jul 2025",
      end: "Present",
      description:
        "Designed and implemented a distributed, fault‑tolerant web application for restaurant ordering using Next.js and Supabase — ensuring high availability and scalability for thousands of concurrent users. Optimized API performance and database queries, reducing response time by 30%+ under heavy load. Built authentication and secure API layers with Supabase & Twilio, ensuring data integrity and seamless user experience. Tech: HTML, CSS, TypeScript, Next.js, React, Supabase, Twilio, AWS, Docker.",
    },
    {
      company: "Student Hub",
      href: "#",
      badges: [],
      location: "Hyderabad",
      title: "Full Stack Developer Intern",
      logoUrl: "/studentHub.png",
      start: "Feb 2025",
      end: "Jun 2025",
      description:
        "Built a full‑stack mock test platform with real‑time test‑taking and automated results using Next.js, React, Supabase (PostgreSQL + Auth) and Tailwind CSS. Implemented secure authentication, role‑based access, timers and analytics dashboards to highlight weak topics. Deployed on Vercel with CI/CD, optimizing queries and frontend performance to reduce load times by ~40%. Tech: Next.js 14, TypeScript, Tailwind CSS, Supabase, React Context, Lucide, Recharts.",
    },
  ],
  education: [
    {
      school: "KL University Hyderabad",
      degree: "B.Tech in Artificial Intelligence and Data Science • CGPA: 7.76/10",
      logoUrl: "/KL.png",
      start: "Aug 2022",
      end: "May 2026 (Expected)",
      description:
        "Coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, Distributed Systems, Cloud Computing, Machine Learning, Deep Learning, Data Science, Software Engineering",
    },
  ],
  projects: [
    {
      title: "Mini RAG Q&A Bot with LangChain and OpenAI",
      href: "https://github.com/rev2607/Mini-RAG-QA-Bot-with-LangChain-OpenAI",
      dates: "2024",
      active: true,
      description:
        "Built an end‑to‑end retrieval‑augmented generation system for private datasets, delivering context‑aware answers with <500 ms latency. Implemented chunking/embeddings, vector search, and observability for evaluation.",
      technologies: [
        "Python",
        "FastAPI",
        "LangChain",
        "OpenAI API",
        "ChromaDB",
        "HNSW",
        "Transformers",
        "Embeddings",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rev2607/Mini-RAG-QA-Bot-with-LangChain-OpenAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Redis‑K — Redis‑like In‑Memory Database",
      href: "https://github.com/rev2607/redis-x",
      dates: "2024",
      active: true,
      description:
        "Designed and implemented a high‑performance, event‑driven server with a custom binary protocol; optimized concurrent I/O and implemented core data structures (hash map, set, list) with persistence.",
      technologies: [
        "C++",
        "Networking",
        "Concurrency",
        "TCP",
        "Binary Protocol",
        "Data Structures",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rev2607/redis-x",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  certifications: [
    {
      name: "Cloud Digital Leader",
      issuer: "Google Cloud",
      date: "Feb. 2024",
      href: "https://www.credential.net/dba7a5c0-0c8b-4add-93e0-db3fa750c6bc#acc.GhX905u4",
    },
    {
      name: "AI Engineer Associate",
      issuer: "Microsoft Azure",
      date: "May. 2024",
      href: "https://learn.microsoft.com/en-gb/users/revanthguthula-6304/credentials/7038b09a15f7c432?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    },
    {
      name: "Azure Data Scientist Associate",
      issuer: "Microsoft Azure",
      date: "May. 2024",
      href: "https://learn.microsoft.com/en-gb/users/revanthguthula-6304/credentials/3a7901dccd5012e?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    },
    {
      name: "Advanced Automation Certification",
      issuer: "Automation Anywhere",
      date: "Sep. 2024",
      href: "https://certificates.automationanywhere.com/f1906a03-0b7b-4ea8-b890-5cb142954d76#acc.vUDYr1VM",
    },
    {
      name: "Blockchain Fundamentals",
      issuer: "Chainlink Labs",
      date: "Jan. 2025",
      href: "https://www.credly.com/badges/336da4d0-0aae-44a1-abc6-8b5ea00004c2/linked_in_profile",
    },
  ],
  researchPublications: [
    {
      title: "An Enhanced SVM Model Optimised with Minimum Bayes Error Rate for Mental Disorder Detection",
      conference: "10th International Conference on ICT for Sustainable Development (ICT4SD)",
      location: "Goa, India",
      publisher: "Springer",
      date: "Jul 2025",
      description: "Contributed to research on mental disorder detection using enhanced SVM models with minimum Bayes error rate optimization.",
      type: "Conference Proceedings",
    },
  ],
  hackathons: [
    {
      title: "NXP AIM India 2024",
      dates: "2024",
      location: "India",
      description:
        "Regionals; built an obstacle‑avoiding robot with ROS2 lane detection.",
      image: "",
      links: [],
    },
  ],
} as const;
