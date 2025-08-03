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

function scroll(event) {
    const class_Name = event.currentTarget.className

    if (class_Name === 'Home') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    else if(class_Name === 'About'){
        window.scrollTo({
            top: 691.1111450195312,
            behavior: 'smooth'
        });
    }
    else if(class_Name === 'Projects'){
        window.scrollTo({
            top: 1844.444580078125,
            behavior: 'smooth'
        });
    }
    else{
        window.scrollTo({
            top: 3220.000244140625,
            behavior: 'smooth'
        });
    }
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
                        <button onClick={scroll} className='Home'>
                            <li>Home</li>
                        </button>
                        <button onClick={scroll} className='About'>
                            <li>About</li>
                        </button>
                        <button onClick={scroll} className='Projects'>
                            <li>Projects</li>
                        </button>
                        <button onClick={scroll} className='Contact'>
                            <li>Contact</li>
                        </button>
                </div>
                <div className='darkmode'>
                    <i onClick={toggle} className="bi bi-moon-fill"></i>
                </div>
            </div>
        </div>
    )
}

export default NavBar