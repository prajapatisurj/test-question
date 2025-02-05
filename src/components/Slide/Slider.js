import React, { useEffect, useState } from "react";
import "./Slide.css";

const Slider = () => {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleSlides = 3; // Show 3 images at a time

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      console.log("Failed to fetch data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (data.length - visibleSlides + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? data.length - visibleSlides : prev - 1
    );
  };

  return (
    <div className="slider">
      <h2>Image Slider</h2>
      {data.length >= visibleSlides ? (
        <div className="slider__wrapper">
          <div
            className="slider__container"
            style={{
              transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
            }}
          >
            {data.map((item, index) => (
              <div key={index} className="slider__item">
                <img src={item.url} alt={item.title} loading="lazy" />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading images...</p>
      )}
      <button className="slider__prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="slider__next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
