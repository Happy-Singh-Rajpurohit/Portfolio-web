import '/Projects.css';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Society Spehere',
        description: 'A centralized platform to manage events, tasks, and announcements within student societies. Features include role-based login, real-time task tracking, and Firebase backend.',
        tech: ['HTML', 'CSS', 'JS', 'FIREBASE'],
        video: ''
    }
]

export default function Projects() {
    return (
        <section className='project-section'>
            <h1>Projects</h1>
            <div className='project-grid'>
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card"
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className='card-shrink'>
                            <img src="/photo.jpeg" alt="soceity-sphere" />
                            <h2>{project.title}</h2>
                        </div>

                        <div className='card-shrink'>
                            <video
                                src={project.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="project-video"
                            />
                            <p>{project.description}</p>
                            <div className='tech-used'>
                                {project.tech.map((techItem, i) => (
                                    <span key={i}>{techItem}</span>
                                ))}
                            </div>
                            <button className='peoject-live'>View Project</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section >
    )
}