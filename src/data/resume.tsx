import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Revanth Guthula",
  initials: "RG",
  url: "https://www.revanth.cloud",
  location: "Hyderabad, IN",
  locationLink: "https://www.google.com/maps/place/Hyderabad",
  description:
    "Software Developer | Full-stack & Mobile | React, React Native, FastAPI, Swift",
  summary: `Software Developer with hands-on experience in full-stack and mobile app development, passionate about building high-quality products and solving real problems through technology. Focused on writing clean, scalable code and continuously learning to improve as an engineer.`,
  avatarUrl: "/profile.jpg",
  skills: [
    // Languages
    "Python",
    "Swift",
    "JavaScript",
    // Frameworks
    "React",
    "React Native",
    "FastAPI",
    "Django",
    // Tools
    "Firebase",
    "GCP",
    "Azure",
    "Docker",
    "Git",
    "GitHub",
    // APIs & Databases
    "REST APIs",
    "SQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/revanthGuthula.pdf", icon: Icons.resume as any, label: "Resume" },
  ],
  contact: {
    email: "revanthgwork@gmail.com",
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
      company: "Diyas Fin Corp",
      href: "#",
      badges: [],
      location: "Hyderabad",
      title: "App Developer · Freelance",
      logoUrl: "/atomic.png",
      start: "Dec 2025",
      end: "Dec 2025",
      description:
        "Developed a React Native application for financial agents to manage customer loan applications, profile records, and follow-ups. Optimized the UI/UX for quick onboarding and streamlined workflows, reducing manual paperwork time by 70%.",
    },
    {
      company: "Ghar Ka Khana",
      href: "#",
      badges: [],
      location: "Mumbai",
      title: "Full Stack Developer · Freelance",
      logoUrl: "/gharkakhana.png",
      start: "Jul 2025",
      end: "Nov 2025",
      description:
        "Built a cloud kitchen food ordering platform for Navi Mumbai, featuring a responsive menu system with meal plans and a multi-step checkout flow for a seamless customer experience. Implemented secure payment processing with multiple methods (UPI, Cards, Net Banking, Wallets) and webhook-based transaction verification using HMAC-SHA256 signature validation.",
    },
    {
      company: "Student Hub",
      href: "#",
      badges: [],
      location: "Hyderabad",
      title: "Full Stack Intern",
      logoUrl: "/studentHub.png",
      start: "Jun 2025",
      end: "Nov 2025",
      description:
        "Built and deployed a React 19 + Vite single-page application (100+ routes) with a FastAPI gateway for unified authentication and state management. Implemented a news ingestion pipeline using FastAPI and Supabase with Perplexity integration.",
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
      title: "Cool Beans – iOS Caffeine & Calorie Tracker",
      href: "https://github.com/rev2607", // TODO: replace with repo link when public
      dates: "2025",
      active: true,
      description:
        "Developed a SwiftUI iOS application enabling users to track caffeine and calorie intake across 15+ customizable beverages. Leveraged MVVM architecture with ObservableObject for reactive state management, persistent data storage, and dynamic nutritional calculations based on serving size, milk, and syrup options.",
      technologies: [
        "Swift",
        "SwiftUI",
        "MVVM",
        "iOS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rev2607",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  certifications: [
    {
      name: "Google Cloud Digital Leader",
      issuer: "Google Cloud",
      date: "2024",
      href: "https://www.credential.net/dba7a5c0-0c8b-4add-93e0-db3fa750c6bc#acc.GhX905u4",
    },
    {
      name: "Microsoft Azure AI Engineer Associate",
      issuer: "Microsoft Azure",
      date: "2024",
      href: "https://learn.microsoft.com/en-gb/users/revanthguthula-6304/credentials/7038b09a15f7c432?ref=https%3A%2F%2Fwww.linkedin.com%2F",
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
