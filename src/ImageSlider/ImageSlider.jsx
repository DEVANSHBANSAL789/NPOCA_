import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/image1.jpg", "/image2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Slider"
          className={index === currentImage ? "active" : "fade"}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
