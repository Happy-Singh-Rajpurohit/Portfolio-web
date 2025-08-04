import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaJsSquare, FaNode, FaBootstrap, FaDatabase } from "react-icons/fa";
import { SiExpress, SiC, SiMongodb, SiRedux, SiTailwindcss, SiMui, SiEjs, SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { motion } from 'framer-motion';
import './Tech.css';
import Tilt from 'react-parallax-tilt';

const skills = [
    { name: "HTML", icon: <TiHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Material UI", icon: <SiMui /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "NodeJS", icon: <FaNode /> },
    { name: "ExpressJS", icon: <SiExpress /> },
    { name: "EJS", icon: <SiEjs /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "C", icon: <SiC /> },
];

export default function Tech() {
    return (
        <section className="tech-section" id="tech">
            <h1>Tech Stack</h1>
            <div className="tech-grid">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.07 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.3} scale={1.05} transitionSpeed={1500}>
                            <div className="tech-card" title={skill.name}>
                                <div className="tech-icon">{skill.icon}</div>
                                <p>{skill.name}</p>
                            </div>
                        </Tilt>

                    </motion.div>
                ))}
            </div>
        </section>
    );
}
