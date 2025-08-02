import SpotlightCard from '../blocks/Components/SpotlightCard/SpotlightCard';
import '../css/contact.css';
import Animation2 from './spline-Animation2'
import { Send } from "lucide-react";
import { Linkedin, Github, Facebook, Instagram } from 'lucide-react';
  

function Contact(params) {
    return(
        <>
            <div className='Title-Container'>
                <span className='Title'>Get in Touch</span>
                <p>I'm always here to chat, and I'm happy to help with anything you need.</p>
            </div>
            <div className='Contact-Container'>
                <SpotlightCard className='SpotlightCard'>
                    <div>
                        <div className='Input-Container'>
                            <div className='Contact-Title'>Contact</div>
                            <div><input type="text" placeholder='Your Name'/></div>
                            <div><input type='email' placeholder='Your Email'/></div>
                            <div><textarea placeholder='Your Message'></textarea></div>
                            <button><Send className='send'/>Submit</button>
                        </div>
                        <hr />
                        <div className='Card'>
                            <div>
                                <div className='Contact-Title'>Connect With Me</div>
                            </div>
                            <div className="parent">

                                <div className='Child1'><a className="a1" href="https://www.linkedin.com/in/abdullahmunir9/"><Linkedin/> Linked In</a></div>
                                <div className='Child2'>
                                    <a className="a2" href="https://www.instagram.com/abdullah.munr/"><Instagram/>Instagram</a>
                                    <a className="a3" href="https://www.facebook.com/abdullahmunir.munir.58"><Facebook/>Facebook</a>
                                </div>
                                <div className='Child3'><a className="a4" href="https://github.com/AbdullahMunir9"><Github/> Github</a></div>
                                
                            </div>
                        </div>
                    </div>
                </SpotlightCard>
                <Animation2/>
            </div>
        </>
    )
}
export default Contact;