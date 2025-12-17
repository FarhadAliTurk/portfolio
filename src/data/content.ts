import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

export const PERSONAL_DETAILS = {
    name: "Farhad Ali",
    role: "Frontend Developer | React Developer | BS Computer Science Student",
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
];

export const EDUCATION = [
    {
        degree: "BS Computer Science",
        institution: "University of Sindh, Jamshoro",
        year: "Jan 2024 – Present (4 Years)",
        description: "Currently pursuing Bachelor's in Computer Science."
    },
    {
        degree: "Intermediate (Pre-Engineering)",
        institution: "DNMGD College, Tando Allahyar",
        year: "2020 – 2022 (2 Years)",
        description: "Completed Intermediate with Pre-Engineering focus."
    },
];

export const CERTIFICATIONS = [
    {
        name: "Meta Front-End Developer",
        platform: "Coursera",
        issuer: "Meta",
        link: "#" // Placeholder if not provided
    },
    {
        name: "Deep Learning",
        platform: "Coursera",
        issuer: "DeepLearning.AI",
        link: "#" // Placeholder if not provided
    },
];

export const PROJECTS = [
    {
        title: "Admin Dashboard",
        description: "A comprehensive admin dashboard with data visualization and management tools.",
        tech: ["React.js", "Tailwind CSS", "Recharts"],
        demo: "https://admin-dashboard-phi-one-94.vercel.app/login",
        repo: "https://github.com/FarhadAliTurk/Admin-Dashboard"
    },
    {
        title: "E-Commerce Store",
        description: "Full-featured e-commerce platform with cart and checkout functionality.",
        tech: ["React.js", "Context API", "Stripe"],
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
