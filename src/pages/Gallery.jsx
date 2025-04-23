import React, { useState } from "react";
import FooterSection from "../components/FooterSection";
import GetInTouchSection from "../components/GetInTouchSection";

const images = [
  "/assets/img/gallery/gallery-1.jpg",
  "/assets/img/gallery/gallery-2.jpg",
  "/assets/img/gallery/gallery-3.jpg",
  "/assets/img/gallery/gallery-4.jpg",
  "/assets/img/gallery/gallery-5.jpg",
  "/assets/img/gallery/gallery-6.jpg",
  "/assets/img/gallery/gallery-7.jpg",
  "/assets/img/gallery/gallery-8.jpg",
  "/assets/img/gallery/gallery-9.jpg",
];

const wideIndexes = [0, 5, 6]; 

const Gallery = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <>
      {/* Breadcrumb */}
      <section
        className="breadcrumb-section set-bg"
        style={{ backgroundImage: `url('/assets/img/breadcrumb-bg.jpg')` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text">
                <h2>Gallery</h2>
                <div className="bt-option">
                  <a href="/">Home</a>
                  <span>Pages</span>
                  <span>Gallery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section gallery-page">
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div
              key={index}
              className={`gallery-item ${wideIndexes.includes(index) ? "grid-wide" : ""}`}
              style={{ backgroundImage: `url(${src})` }}
              onClick={() => setModalImg(src)}
            >
            </div>
          ))}
        </div>
      </section>
      <GetInTouchSection />
      <FooterSection />
    </>
  );
};

export default Gallery;
