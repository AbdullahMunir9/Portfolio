import Project from './projects'
import TechStack from './Tech-Stack'
import Certification from './certification'
import '../css/tech-Stack.css'
import React from 'react'
import { Element } from 'react-scroll';

function PortfolioShowcase() {
    const [selectedIndex,setSelectedIndex] = React.useState(0)
    const button = ["Projects","Tech Stack","Certifications"]
    return(
        <div id='Projects' className='Showcase-container'>
            <Element name="Projects">
                <div className="Title-Container">
                    <span className="Title">Portfolio Showcase</span>
                    <p>Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</p>
                </div>
            </Element>
            
            <div className="topBar g-button">
                {
                    button.map((B,index)=>{
                        return(
                            <button 
                                key={index} 
                                onClick={()=>setSelectedIndex(index)} 
                                className={`glow-butt ${selectedIndex === index ? 'selected' : ''}`}
                            >
                                {B}
                            </button>
                        )
                    })
                }
            </div>


            <div className='Bellow-TopBar' style={selectedIndex === 0 ? { width: '100%' } : {}}>
                {selectedIndex === 0 && <Project/>}
                {selectedIndex === 1 && <TechStack/>}
                {selectedIndex === 1 && 
                    <div className="tech-stack-header">
                        <h2 className="tech-stack-title">Tech Stack</h2>
                        <p className="tech-stack-subtitle">Technologies I work with</p>
                    </div>
                }   
                {selectedIndex === 1 && <TechStack direction = "true"/>}
                {selectedIndex === 2 && <Certification />}
            </div>
        </div>
    )
}

export default PortfolioShowcase;