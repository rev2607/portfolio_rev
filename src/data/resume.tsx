import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Revanth Guthula",
  initials: "RG",
  url: "https://www.revanth.cloud",
  location: "Hyderabad, IN",
  locationLink: "https://www.google.com/maps/place/Hyderabad",
  description:
    "AI/ML Engineer | Deploying Intelligent Models with Web Interfaces & Cloud Scalability",
  summary: `I’m an AI/ML Engineer focused on building intelligent systems from concept to deployment. I combine machine learning, LLMs, and responsible AI with the ability to deploy models, build web interfaces, and scale solutions on cloud platforms.

Passionate about AI that delivers real-world impact, I create systems that are scalable, user-friendly, and production-ready. Always exploring new AI technologies and cloud-native architectures to push the boundaries of intelligent solutions.`,
  avatarUrl: "/profile.jpg",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Java",
    "Python",
    "Django",
    "React",
    "Next.js",
    "GCP",
    "Azure",
    "AWS",
    "Vercel",
    "Render",
    "Git",
    "GitHub",
    "Docker",
    "Linux",
    "Supervised Learning",
    "Unsupervised Learning",
    "Neural Networks",
    "Model Evaluation",
    "Feature Engineering",
    "Hyperparameter Tuning",
    "Experiment Tracking",
    "Text Classification",
    "Responsible AI",
    "TensorFlow",
    "Scikit-learn",
    "PyTorch",
    "Prompt Engineering",
    "Hugging Face",
    "LLMs",
    "Local LLMs",
    "LangChain",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/revanth_resume.pdf", icon: Icons.resume as any, label: "Resume" },
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
      location: "Mumbai (Remote)",
      title: "IT Software Developer",
      logoUrl: "/gharkakhana.png",
      start: "Jul 2025",
      end: "Present",
      description:
        "Developed a full‑stack restaurant ordering platform using Next.js 15 and React 19 with TypeScript, implementing modern SSR patterns, API routes, and a component‑based architecture for maintainability. Built authentication with Supabase and Twilio SMS verification, and a polished responsive UI using Tailwind CSS and Radix UI. Deployed on Vercel for performance and global availability. Tech: Next.js 15, React 19, TypeScript, Tailwind CSS, Supabase, Twilio, Radix UI, Vercel, React Hook Form, Zod.",
    },
  ],
  education: [
    {
      school: "KL University Hyderabad",
      href: "https://kluniversity.in",
      degree: "B.Tech in Artificial Intelligence and Data Science • CGPA: 7.76/10",
      logoUrl: "/KL.png",
      start: "Aug 2022",
      end: "May 2026 (Expected)",
    },
  ],
  projects: [
    {
      title: "DataPulse — Automated EDA and Data Health",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Full‑stack data health monitoring app to detect outliers, missing data, and statistical drift in CSV datasets. Interactive dashboard with real‑time visualizations and automated quality scoring using ML.",
      technologies: [
        "FastAPI",
        "Python",
        "Pandas",
        "NumPy",
        "Scikit‑learn",
        "SciPy",
        "React.js",
        "Material‑UI",
        "Plotly.js",
        "Axios",
        "Docker",
        "Vercel",
        "Render",
      ],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Image Captioning Django Web App",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Django web application using BLIP transformer model to generate descriptive captions for uploaded images with a clean UI and real‑time generation.",
      technologies: [
        "Python",
        "Django",
        "PyTorch",
        "Transformers",
        "PIL",
        "HTML",
        "CSS",
        "SQLite3",
      ],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Face Emotion Detection",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Computer vision application using OpenCV and FER (Facial Emotion Recognition) to detect and classify human emotions.",
      technologies: [
        "Python",
        "OpenCV",
        "FER",
        "MTCNN",
        "Keras",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Google Colab",
      ],
      links: [
        {
          type: "Source",
          href: "#",
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
