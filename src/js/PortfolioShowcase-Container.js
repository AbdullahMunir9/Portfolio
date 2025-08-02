import Project from './projects'
import TechStack from './Tech-Stack'
import Certification from './certification'
import React from 'react'

function PortfolioShowcase() {
    const [selectedIndex,setSelectedIndex] = React.useState(0)
    const button = ["Projects","Tech Stack","Certifications"]
    return(
        <div className='Showcase-container'>

            <div className="Title-Container">
                <span className="Title">Portfolio Showcase</span>
                <p>Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</p>
            </div>


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


            <div className='Bellow-TopBar'>
                {selectedIndex === 0 && <Project />}
                {selectedIndex === 1 && <TechStack />}
                {selectedIndex === 2 && <Certification />}
            </div>
        </div>
    )
}

export default PortfolioShowcase;