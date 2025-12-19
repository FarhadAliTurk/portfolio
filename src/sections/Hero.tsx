import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { PERSONAL_DETAILS } from '../data/content';
import SectionWrapper from '../components/SectionWrapper';
import profileImg from '../assets/blue.png';
import resumePdf from '../assets/FARHAD ALI TURK.pdf';

export default function Hero() {
    return (
        <SectionWrapper id="hero" className="pt-32 md:pt-48 min-h-screen flex items-center">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary font-medium text-lg"
                    >
                        Hi, my name is
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
                    >
                        {PERSONAL_DETAILS.name}
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-500 dark:text-gray-400"
                    >
                        I build things for the web.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed"
                    >
                        {PERSONAL_DETAILS.shortIntro}. I'm a passionate developer dedicated to creating intuitive and dynamic user experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-primary text-white rounded-lg font-bold shadow-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                        >
                            <FaEnvelope /> Contact Me
                        </a>
                        <a
                            href={resumePdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border-2 border-primary text-primary dark:text-primary rounded-lg font-bold hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
                        >
                            <FaDownload /> Download CV
                        </a>
                    </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex-shrink-0"
                >
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-2xl">
                        <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                            <img
                                src={profileImg}
                                alt={PERSONAL_DETAILS.name}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
