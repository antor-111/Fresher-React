import React,{useState} from "react";
import "./index.css";

const ImageUploader= () => {
  const initialImages = [
    "images/image-11.jpeg",
    "images/image-1.webp",
    "images/image-2.webp",
    "images/image-3.webp",
    "images/image-4.webp",
    "images/image-5.webp",
    "images/image-6.webp",
    "images/image-7.webp",
    "images/image-8.webp",
    "images/image-9.webp",
    "images/image-10.jpeg",
    "images/3752804-200.png"
   
   
  ];

  const [images, setImages] = useState(initialImages);
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();

    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const updatedImages = [...images];
    const [draggedImage] = updatedImages.splice(dragIndex, 1);
    updatedImages.splice(dropIndex, 0, draggedImage);

    setImages(updatedImages);
  };

  

  const [selectedImages, setSelectedImages] = useState([]);

  const toggleImageSelection = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter((i) => i !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
  };

  const deleteSelectedImages = (x) => {
    const newImages = images.filter((_, index) => !selectedImages.includes(index));
    setImages(newImages);
    setSelectedImages([x.type.value]);
  };

  
  



  return (
    
     
     <>
     <h1 className="heading">Gallery</h1>
     <div className="action-bar">
    
    <div>
   
    <button onClick={deleteSelectedImages} >
   
      Files Delete</button>
    </div>
    
        
     
    <div className="image-gallery" onDragOver={handleDragOver}>

    
    {images.map((image, index) => (
     
        
        <div
          key={index}
          className={`image ${index === 0 ? 'large' : ''}`}
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={handleDragOver}
          draggable
        >
        <div className="input">
        
         <input
              type="checkbox"
              checked={selectedImages.includes(index)}
              onChange={() => toggleImageSelection(index)}
            />
          <img className="imageStyle"src={image} alt={`Image ${index + 1}`} />
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
    
);
};

export default ImageUploader;
