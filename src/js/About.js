import { Code, Award, Globe } from "lucide-react";
import profilePic from '../assets/profile-pic.png'
import { FileDown } from 'lucide-react';
import { Link,Element } from 'react-scroll';


function About() {
    function scroll() {
        window.scrollTo({
            top: 1844.444580078125,
            behavior: 'smooth'
        });
    }

    const stats = [
        {
        icon: Code,
        number: "7",
        title: "TOTAL PROJECTS",
        description: "Innovative web solutions crafted",
        },
        {
        icon: Award,
        number: "5",
        title: "CERTIFICATES",
        description: "Professional skills validated",
        },
        {
        icon: Globe,
        number: "3",
        title: "YEARS OF EXPERIENCE",
        description: "Continuous learning journey",
        },
    ];
    return(
        <div className="About-container">
            <Element name="About"><div className='Title-Container'><span className='Aboutme-Title'>About Me</span></div></Element>
            <div className='Info-Container'>
                <div className="glass-card">
                    <div className="leftbar">
                        <span className='A-text'>Hello, I'm</span>
                        <span>ABDULLAH MUNIR</span>
                        <div className='info'>
                            A Full-Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js) and mobile app development using Flutter. Over the past 3 years, I’ve built scalable web applications, published 2 mobile apps on Google Play Store, and delivered solutions that blend functionality with intuitive design.
                            <br /><br />I believe great development isn’t just about code; it’s about solving real problems and crafting seamless, user-centric experiences. Whether it’s a dynamic web app, a cross-platform mobile application, or a robust backend system, I focus on:
                        </div>

                        <div>
                            <li>Clean, maintainable code</li>
                            <li>Performance optimization</li>
                            <li>Responsive and engaging UI/UX</li>
                        </div>

                        <div className="quote-box">
                            <p className='quote'>"A website should feel like a conversation, not a questionnaire."</p>
                        </div>
                    </div>
                </div>

                <div className="rightbar">
                    <div className="glass-img-wrapper">
                        <img src={profilePic} alt="profile-pic" />
                    </div>
                    
                    <div className='Button-Container'>
                        <a className="glowing-button" href="/Abdullah Munir (Resume).pdf" download>
                            <FileDown className="icon" size={20} style={{ marginRight: '8px' }} />
                            Download CV
                        </a>
                        <button className="glowing-button Projects" onClick={scroll}>
                            <Link to="Projects" smooth={true} duration={1000} offset={-50}>
                                View Projects
                            </Link>   
                        </button>
                    </div>
                </div>
            </div>
            <div className="Bellow-info">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="glow-button card">
                            <div className="card-item1">
                                <Icon size={45} />
                                <span>{stat.number}</span>
                            </div>
                            <div className="card-item2">{stat.title}</div>
                            <div className="card-item3">{stat.description}</div>
                        </div>
                    );
                })}
            </div>

        </div> 
    )
}

export default About;