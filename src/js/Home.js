import Lottie from "lottie-react";
import myAnimation from "../assets/about-animation.json";
import TypeAnimation from './type-animation';
import { ExternalLink, Mail } from 'lucide-react';
import { Github, Linkedin, Instagram } from 'lucide-react';

function Home(params) {
    const languages = ["Javascript","React","ExpressJs","Node.Js","Tailwind"]
    return(
        <div className="Home-container">
            <div className="LeftBar">

                <div>
                    <p className="Title-Text">Software Engineer</p>
                </div>
                
                <TypeAnimation/>
                
                <div className="subTitle-Text">
                    I craft clean code and creative experiences, blending design with functionality — 
                    <br />
                    turning ambitious ideas into fast, interactive, and user-focused realities.
                </div>
                
                {languages.map((lang, index) => (
                    <>
                        <button key={index} className="glowing-button">{lang}</button>
                        {index === 2 && <br />} {/* Adds a line break after the 3rd item (index 2) */}
                    </>
                ))}
                <div className="contact-Container">
                    <button className="glowing-button bg-black">Projects <ExternalLink className="icons" size={16} /></button>
                    <button className="glowing-button bg-black">Contact <Mail className="icons" size={16} /></button>
                </div>

                <div className="social-links">
                    <a href="https://github.com/AbdullahMunir9">
                        <Github className="glowing-button" style={{ backgroundColor: "#181717", color: "white", padding: "8px", borderRadius: "8px" }} />
                    </a>
                    <a href="https://www.instagram.com/abdullah.munr?igsh=b3R1eDJ4b3h1c2h4">
                        <Instagram className="glowing-button" style={{ backgroundColor: "#E1306C", color: "white", padding: "8px", borderRadius: "8px" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/abdullahmunir9/">
                        <Linkedin className="glowing-button" style={{ backgroundColor: "#0077B5", color: "white", padding: "8px", borderRadius: "8px" }} />
                    </a>
                </div>

            </div>

            <Lottie className="RightBar" animationData={myAnimation} style={{ height: 550, width: 550 }}/>


        </div>
    );
}


export default Home;