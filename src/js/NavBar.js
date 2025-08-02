import { UserPen } from 'lucide-react';
import React from 'react';

function toggle(event) {
    if (event.target.classList.contains('bi-sun-fill')) {
        event.target.classList.remove('bi-sun-fill')
        event.target.classList.add('bi-moon-fill')
        document.getElementsByTagName('body')[0].style.background = 'linear-gradient(90deg, #0d0a24 0%, #171435 50%, #101028 100%)';
        document.getElementsByTagName('body')[0].style.color = 'white'
    }
    else{
        event.target.classList.remove('bi-moon-fill')
        event.target.classList.add('bi-sun-fill')
        document.getElementsByTagName('body')[0].style.background = 'white';
        document.getElementsByTagName('body')[0].style.color = 'black'
    }
}

function scroll() {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Bellow is the Main Component of NavBar
function NavBar(){
    const navBarRef = React.useRef(null);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        function handleScrollAnimation() {
            setIsScrolled(window.scrollY !== 0);
        }

        handleScrollAnimation(); // Set once on load

        window.addEventListener("scroll", handleScrollAnimation);

        return () => {
            window.removeEventListener("scroll", handleScrollAnimation);
        };
    }, []);

    return (
        <div className='Fixed-NavBar'>
            <div className={`NavBar-Container ${isScrolled ? 'glass3d' : ''}`} ref={navBarRef}>
                <UserPen 
                    className="profile-icon"  
                    onClick={scroll} 
                    size={33} strokeWidth={1.5} 
                />
                <div className="NavBar-ListItems-container">
                        <a href="">
                            <li>Home</li>
                        </a>
                        <a href="">
                            <li>About</li>
                        </a>
                        <a href="">
                            <li>Projects</li>
                        </a>
                        <a href="">
                            <li>Contact</li>
                        </a>
                </div>
                <div className='darkmode'>
                    <i onClick={toggle} className="bi bi-moon-fill"></i>
                </div>
            </div>
        </div>
    )
}

export default NavBar