import './Footer.css';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            className="footer-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className='footer-container'>
                <div className='social-icons'>
                    <a href="https://github.com/Happy-Singh-Rajpurohit">
                        <img src="/github.png" alt="github" />
                    </a>
                    <a href="https://www.instagram.com/HappyRajpurohit10/">
                        <img src="/instagram.png" alt="instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/happy-singh-rajpurohit/">
                        <img src="/linkedin.png" alt="linkedin" />
                    </a>
                </div>
                <div className='personal-name-logo'>
                    <img src="/logo.png" alt="logo" />
                    <h2>Happy Singh Rajpurohit</h2>
                </div>
                <div className='copyright'>
                    <p>&#169;2025 Happy Singh Rajpurohit. All right reserved.</p>
                </div>
            </div>

        </motion.footer>
    )
}