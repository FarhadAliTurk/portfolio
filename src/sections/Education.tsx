import { FaGraduationCap } from 'react-icons/fa';
import { EDUCATION } from '../data/content';
import SectionWrapper from '../components/SectionWrapper';

export default function Education() {
    return (
        <SectionWrapper id="education" className="bg-gray-50 dark:bg-gray-900/50">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                Education
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
                {EDUCATION.map((edu, index) => (
                    <div
                        key={index}
                        className="relative pl-8 md:pl-0"
                    >
                        {/* Timeline Line (Hidden on mobile for simplicity or customized) */}
                        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

                        <div className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="hidden md:block w-5/12"></div>

                            <div className="absolute left-0 md:left-[50%] top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center transform md:-translate-x-1/2 md:translate-y-1 shadow-lg ring-4 ring-white dark:ring-gray-900 z-10">
                                <FaGraduationCap size={14} />
                            </div>

                            <div className="md:w-5/12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-2">
                                    {edu.year}
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                    {edu.degree}
                                </h3>
                                <h4 className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                                    {edu.institution}
                                </h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">
                                    {edu.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
