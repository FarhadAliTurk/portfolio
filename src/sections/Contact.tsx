import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { PERSONAL_DETAILS } from '../data/content';
import SectionWrapper from '../components/SectionWrapper';

export default function Contact() {
    const [status, setStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: null, message: '' });

        const formData = new FormData(e.currentTarget);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://formsubmit.co/ajax/farhadaliturk.official@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: json
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully.',
                });
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus({
                    type: 'error',
                    message: result.message || 'Something went wrong. Please try again later.',
                });
            }
        } catch (error) {
            console.error("Form error:", error);
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SectionWrapper id="contact" className="bg-white dark:bg-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                Get In Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Let's Talk</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <FaEnvelope size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                <a href={`mailto:${PERSONAL_DETAILS.email}`} className="font-medium hover:text-primary transition-colors">
                                    {PERSONAL_DETAILS.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                <FaWhatsapp size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">WhatsApp</p>
                                <a
                                    href={`https://wa.me/${PERSONAL_DETAILS.whatsapp.replace(/\D/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium hover:text-secondary transition-colors"
                                >
                                    {PERSONAL_DETAILS.whatsapp}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                <p className="font-medium">Sindh, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 space-y-6">
                    {/* Botspam protection */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="New submission from Portfolio!" />

                    {status.message && (
                        <div className={`p-4 rounded-lg ${status.type === 'success'
                            ? 'bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800'
                            : 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800'
                            }`}>
                            {status.message}
                        </div>
                    )}

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 dark:text-white"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 dark:text-white"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 dark:text-white resize-none"
                            placeholder="Your message here..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                        {!isLoading && <FaPaperPlane />}
                    </button>
                </form>
            </div>
        </SectionWrapper>
    );
}
