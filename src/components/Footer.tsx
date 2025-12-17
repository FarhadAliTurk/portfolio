import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { PERSONAL_DETAILS } from '../data/content';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {PERSONAL_DETAILS.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Built with React, Tailwind & Framer Motion
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a
                        href={PERSONAL_DETAILS.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href={PERSONAL_DETAILS.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href={PERSONAL_DETAILS.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
                    >
                        <FaFacebook size={24} />
                    </a>
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                    © {currentYear} {PERSONAL_DETAILS.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
