import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaDatabase, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

export const PERSONAL_DETAILS = {
    name: "Farhad Ali Turk",
    role: "Frontend Developer | React Developer",
    shortIntro: "Frontend Developer specializing in React.js and modern UI design",
    email: "farhadaliturk.official@gmail.com",
    whatsapp: "+92 316 1193300",
    socials: {
        linkedin: "https://linkedin.com/in/farhad-ali-turk-135369305",
        github: "https://github.com/FarhadAliTurk",
        facebook: "https://www.facebook.com/profile.php?id=61551771230717",
    }
};

export const SKILLS = [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "MySQL", icon: FaDatabase, color: "#4479A1" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#181717" },
];

export const EDUCATION = [
    {
        degree: "BS Computer Science",
        institution: "University of Sindh, Jamshoro",
        year: "2024 - Continue",
        description: "Pursuing Bachelor's in Computer Science."
    },
    {
        degree: "XII (BISEH)",
        institution: "Dr Nasreen Maqbool Govt: Degree College, TandoAllahyar, Sindh",
        year: "2023",
        description: "Grade: A-1 (81.18%) - Pre-Engineering"
    },
];

export const CERTIFICATIONS = [
    {
        name: "Meta Front-End Developer Professional Certificate",
        platform: "Coursera",
        issuer: "Meta",
        link: "https://coursera.org/share/b815b6baeebf980bfe532f87a237bb9e"
    },
    {
        name: "Microsoft IT Support Specialist Professional Certificate",
        platform: "Coursera",
        issuer: "Microsoft",
        link: "https://coursera.org/share/751d21c81e3f6068412bc6eafa5d4826"
    },
];

export const PROJECTS = [
    {
        title: "Admin Dashboard",
        description: "Built a responsive React Admin Dashboard with user & post management, charts, and CRUD functionality using LocalStorage.",
        tech: ["React.js", "Tailwind CSS", "LocalStorage", "Recharts"],
        demo: "https://admin-dashboard-phi-one-94.vercel.app/",
        repo: "https://github.com/FarhadAliTurk/Admin-Dashboard"
    },
    {
        title: "E-Commerce Store",
        description: "Developed a fully responsive e-commerce frontend with product listings, cart, wishlist, and checkout flow using React and Tailwind CSS.",
        tech: ["React.js", "Tailwind CSS", "Context API"],
        demo: "https://e-store-olive-nine.vercel.app/",
        repo: "https://github.com/FarhadAliTurk/e-store"
    },
    {
        title: "Job Portal / Internship Finder",
        description: "Platform for students to find internships and job opportunities.",
        tech: ["React.js", "Node.js", "MongoDB"],
        demo: "https://job-portal-lilac-nine.vercel.app/",
        repo: "https://github.com/FarhadAliTurk/job-internship-portal"
    },
];
