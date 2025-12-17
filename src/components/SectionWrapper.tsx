import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
    id: string;
    className?: string;
    children: ReactNode;
}

export default function SectionWrapper({ id, className = "", children }: SectionWrapperProps) {
    return (
        <section id={id} className={`py-16 md:py-32 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container mx-auto px-4 md:px-8"
            >
                {children}
            </motion.div>
        </section>
    );
}
