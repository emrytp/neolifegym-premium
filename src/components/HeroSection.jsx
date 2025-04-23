import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const slides = [
    "/assets/img/hero/hero-1.jpg",
    "/assets/img/hero/hero-2.jpg"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hs-slider">
        {slides.map((img, index) => (
          <div
            key={index}
            className={`hs-item ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-6">
                  <div className="hi-text">
                    <span>Shape your body</span>
                    <h1>
                      Be <strong>strong</strong> training hard
                    </h1>
                    <a href="#" className="primary-btn">
                      Get info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
