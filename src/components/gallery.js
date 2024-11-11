import React from "react";
import "./gallery.css";

// Import images from local storage
import image1 from "./images/image1.webp";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";

const Gallery = () => {
    const images = [image1, image2, image3];

    return (
        <div id="Gallery" className="gallery-section">
            <h1 className="gallery-title">Gallery</h1>
            <div className="gallery-container">
                {images.map((img, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={img} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
