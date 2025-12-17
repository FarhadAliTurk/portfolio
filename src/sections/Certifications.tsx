import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { CERTIFICATIONS } from '../data/content';
import SectionWrapper from '../components/SectionWrapper';

export default function Certifications() {
    return (
        <SectionWrapper id="certifications" className="bg-white dark:bg-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {CERTIFICATIONS.map((cert, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="text-primary mt-1">
                            <FaAward size={32} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                {cert.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                                {cert.issuer} | {cert.platform}
                            </p>
                            {cert.link && cert.link !== '#' && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-primary hover:text-blue-600 transition-colors font-medium"
                                >
                                    View Certificate <FaExternalLinkAlt size={12} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
