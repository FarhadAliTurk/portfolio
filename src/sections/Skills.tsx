import { motion } from 'framer-motion';
import { SKILLS } from '../data/content';
import SectionWrapper from '../components/SectionWrapper';

export default function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <SectionWrapper id="skills" className="bg-white dark:bg-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                skills & technologies
            </h2>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
            >
                {SKILLS.map((skill) => (
                    <motion.div
                        key={skill.name}
                        variants={item}
                        className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 group hover:scale-105 transform duration-300"
                    >
                        <div className="text-5xl mb-4 transition-colors duration-300" style={{ color: skill.color }}>
                            <skill.icon />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
                            {skill.name}
                        </h3>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}
