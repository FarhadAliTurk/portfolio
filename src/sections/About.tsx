import { PERSONAL_DETAILS } from '../data/content';
import SectionWrapper from '../components/SectionWrapper';

export default function About() {
    return (
        <SectionWrapper id="about" className="bg-gray-50 dark:bg-gray-900/50">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                    <p>
                        Hello! My name is <span className="text-primary font-semibold">{PERSONAL_DETAILS.name}</span>.
                        I am a {PERSONAL_DETAILS.role} with a deep passion for creating beautiful and functional web applications.
                    </p>
                    <p>
                        I am currently pursuing my BS in Computer Science at the University of Sindh, Jamshoro.
                        My journey in web development started with a curiosity for how things work on the internet,
                        which led me to learn HTML & CSS, and eventually dive deep into the JavaScript ecosystem.
                    </p>
                    <p>
                        I specialize in building responsive front-end applications using <span className="text-secondary font-semibold">React.js</span> and <span className="text-secondary font-semibold">Tailwind CSS</span>.
                        I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                    </p>
                </div>

                {/* Optional: Add an image or stats here */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 rounded-lg transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                    <div className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Why Work With Me?</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                <span>Dedicated to clean, efficient code</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                <span>Eye for modern UI/UX design</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                <span>Always learning new technologies</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                <span>Strong Computer Science foundation</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
