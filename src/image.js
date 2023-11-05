import React from "react";
import "./index.css";

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className={index === 0 ? "feature" : "thumbnail"}>
          <img src={image} alt={`image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
