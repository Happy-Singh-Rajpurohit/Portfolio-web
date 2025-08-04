import './Projects.css';
import { motion } from 'framer-motion';



const projects = [
    {
        title: 'Society Spehere',
        description: 'A centralized platform to manage events, tasks, and announcements within student societies. Features include role-based login, real-time task tracking, and Firebase backend.',
        tech: ['HTML', 'CSS', 'JS', 'FIREBASE'],
        video: '/sample.mp4',
        liveLink: 'https://society-organiser.vercel.app/'
    }

]

export default function Projects() {
    return (
        <section className='project-section'>
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h1>
            <div className='project-grid'>
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card"
                        key={index}
                        initial={{ opacity: 0, y: 50, rotateX: 6, rotateY: -6 }} // 👈 Initial tilt
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ rotateX: 0, rotateY: 0, scale: 1.03 }} // 👈 Straighten and slight zoom
                        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className='card-shrink'>
                            <img src="/photo.jpeg" alt="soceity-sphere" />
                            <h2>{project.title}</h2>
                        </div>

                        <div className='card-expand'>
                            <video
                                src={project.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="project-video"
                            />
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className='tech-used'>
                                {project.tech.map((techItem, i) => (
                                    <span key={i}>{techItem}</span>
                                ))}
                            </div>
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-live"
                            >
                                View Project
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section >
    )
}