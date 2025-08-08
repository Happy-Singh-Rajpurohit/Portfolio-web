import './Contact.css';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section className='contact-section' id='contact'>
            {/* <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Let's Connect
            </motion.h1> */}

            <motion.div
                className='contact-container'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <motion.form
                    className='contact-form'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >

                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Let's Connect
                    </motion.h1>
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        Send Message
                    </motion.h2>

                    {['Your Name', 'Your Email'].map((placeholder, index) => (
                        <motion.input
                            key={index}
                            type={placeholder.includes('Email') ? 'email' : 'text'}
                            placeholder={placeholder}
                            required
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.4 }}
                        />
                    ))}

                    <motion.textarea
                        placeholder="Your Message"
                        required
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4 }}
                    />

                    <motion.button
                        type='submit'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </motion.div>
        </section>
    );
}
