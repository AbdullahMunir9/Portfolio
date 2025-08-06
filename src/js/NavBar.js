import { UserPen } from 'lucide-react';
import React from 'react';
import '../css/NavBar_Footer.css';
import { Link} from 'react-scroll';

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



// Bellow is the Main Component of NavBar
function NavBar(){
    const [selectedIndex,setSelectedIndex] = React.useState(0)

    function scroll(index) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

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
                    
                        <button key={0}>
                            <Link to="Home" smooth={true} duration={1000} offset={-100}>
                                <li 
                                    className={`Home ${selectedIndex === 0 ? 'style-text' : ''}`}
                                    onClick={()=>{setSelectedIndex(0)}} 
                                >
                                    Home
                                </li>
                            </Link>
                        </button>
                        
                        <button key={1}>
                            <Link to="About" smooth={true} duration={1000} offset={-75}>
                                <li 
                                    className={`About ${selectedIndex === 1 ? 'style-text' : ''}`}
                                    onClick={()=>{setSelectedIndex(1)}}
                                >
                                    About
                                </li>
                            </Link>
                        </button>
                    
                        <button key={2}>
                            <Link to="Projects" smooth={true} duration={1000} offset={-50}>
                                <li 
                                    className={`Projects ${selectedIndex === 2 ? 'style-text' : ''}`}
                                    onClick={()=>{setSelectedIndex(2)}}
                                >
                                    Projects
                                </li>
                            </Link>
                        </button>

                        <button key={3}>
                            <Link to="Contact" smooth={true} duration={1000} offset={-80}>
                                <li 
                                    className={`Contact ${selectedIndex === 3 ? 'style-text' : ''}`}
                                    onClick={()=>{setSelectedIndex(3)}}
                                >
                                    Contact
                                </li>
                            </Link>
                        </button>

                </div>
                <div className='darkmode'>
                    <i onClick={toggle} className="bi bi-moon-fill"></i>
                </div>
            </div>
        </div>
    )
}

export default React.memo(NavBar);