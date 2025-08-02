import React from 'react';
import '../css/projects.css';

function Project() {
    const images = [
        '/certifications/img1.png',
        '/certifications/img2.png',
        '/certifications/img3.png',
        '/certifications/img4.png',
        '/certifications/img5.png'
    ];

    const initialVisibleCount = 4
    const [visibleItemsCount, setVisibleItemsCount] = React.useState(initialVisibleCount);

    const showMore = () => {
        setVisibleItemsCount(images.length);
    };

    const showLess = () => {
        setVisibleItemsCount(initialVisibleCount);
    };


    return(
        <div className="certification-Container">
            <div className="img-container">
                {
                    images.slice(0,visibleItemsCount).map((img,index)=>{
                        return <img key={index} className="certificate-img" src={img} alt="Certification Images" />
                    })
                }
            </div>
            <div className='Button-Contain'>
                {visibleItemsCount < images.length && (
                    <button className="glowing-button" onClick={showMore}>Show More</button>
                )}
                {visibleItemsCount === images.length && images.length > initialVisibleCount && (
                    <button className="glowing-button" onClick={showLess}>Show Less</button>
                )}
            </div>
        </div>
    )
}

export default Project;

    