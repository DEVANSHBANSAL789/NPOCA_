import React, { useState, useEffect } from "react";
import "./Slider.css";
import slide1 from "../Image/slide1.png";
import slide2 from "../Image/slide2.png";
import studentbenefit from "../Image/studentbenefit.png";
import participating from "../Image/participating.png";
import exception from "../Image/exception.png";
import student1 from "../Image/student1.png";

const images = [slide1, slide2];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically change the image every 3 seconds (3000ms)
  useEffect(() => {
    const interval = setInterval(nextImage, 4500); // Change image every 3 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);
  useEffect(() => {
    const counters = document.querySelectorAll(".number");
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText.replace("+", ""); // Remove "+" if already present
        const increment = target / 40; // Adjust speed

        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}+`; // Append "+"
          setTimeout(updateCount, 100); // Adjust delay
        } else {
          counter.innerText = `${target}+`; // Append "+" when target is reached
        }
      };

      updateCount();
    });
  }, []);

  return (
    <div className="slider">
      <button className="prev" onClick={prevImage}>
        &#10094;
      </button>
      <div className="slider-image-container">
        <img
          className="slider-image"
          src={images[currentIndex]}
          alt={`Slider ${currentIndex}`}
        />
      </div>
      <button className="next" onClick={nextImage}>
        &#10095;
      </button>
      <div className="image-grid">
        <div className="image-item">
          <img src={student1} alt="Image 1" />
          <p className="number" data-target="5">
            0+
          </p>
          <p className="text1">Countries</p>
        </div>
        <div className="image-item">
          <img src={exception} alt="Image 2" />
          <p className="number" data-target="150">
            0+
          </p>
          <p className="text1">Exceptional Speakers</p>
        </div>
        <div className="image-item">
          <img src={participating} alt="Image 3" />
          <p className="number" data-target="700">
            0+
          </p>
          <p className="text1">Participating Schools</p>
        </div>
        <div className="image-item">
          <img src={studentbenefit} alt="Image 4" />
          <p className="number" data-target="38000">
            0+
          </p>
          <p className="text1">Students Benefitted</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
