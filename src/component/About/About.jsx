import './About.css';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function About() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    }, [])


    return (
        <div className='about'>
            <div className='left-section' data-aos="fade-left">
                <h1>Hello, I'm <span>Happy Singh Rajpurohit</span></h1>

                {/* TyperWriter Effect */}
                <h2>
                    I'm a{' '}
                    <span style={{ color: '#8a2be2', fontWeight: 'bold' }}>
                        <Typewriter
                            words={['Frontend Developer', 'React Enthusiast', 'UI/UX Designer']}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </span>
                </h2>

                <p>
                    I love building beautiful and performant web applications. I’m currently learning full-stack development.
                </p>
                <div className='buttons'>
                    <a href="#projects" className='btn'>Projects</a>
                    <a href="#contact" className='btn outline'>Contact</a>
                </div>
            </div>
            <div className='right-section' data-aos="fade-right">
                <img src="/photo.jpeg" alt="my-photo" className='my-image' />
            </div>
        </div>
    )
}