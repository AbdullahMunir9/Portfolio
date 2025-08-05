import '../css/App.css';
import '../css/Home.css';
import '../css/About.css';
import '../css/portfolioshowcase.css';
import NavBar from'./NavBar'
import Home from'./Home'
import About from'./About'
import Footer from'./Footer'
import Contact from'./Contact'
import PortfolioShowcase from './PortfolioShowcase-Container'
import SplashCursor from '../blocks/Animations/SplashCursor/SplashCursor'

function App() {
  return (
    <>
      <SplashCursor />
      <NavBar/>
      <div className="Main-Body-Container">
        <Home/>
        <About/>
        <PortfolioShowcase/>
        <Contact/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
