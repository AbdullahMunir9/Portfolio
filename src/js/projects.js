import '../css/projects.css';
import CircularGallery from '../blocks/Components/CircularGallery/CircularGallery';


function Project() {
    return(
        <div style={{width: '100%',height: '600px', position: 'relative' }}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        </div>
    )
}

export default Project;

    