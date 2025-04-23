<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 247e312 (Completed final layout and fixed remaining bugs-m)

const images = [
  '/assets/img/gallery/gallery-1.jpg',
  '/assets/img/gallery/gallery-2.jpg',
  '/assets/img/gallery/gallery-3.jpg',
  '/assets/img/gallery/gallery-4.jpg',
  '/assets/img/gallery/gallery-5.jpg',
  '/assets/img/gallery/gallery-6.jpg',
];

const GallerySection = () => {
<<<<<<< HEAD
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {images.map((src, index) => (
          <div
            key={index}
            className={`gs-item ${index === 0 || index === 5 ? 'grid-wide' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          >
            <a href={src} className="thumb-icon">
              <i className="fa fa-picture-o"></i>
            </a>
          </div>
        ))}
      </div>
=======
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-section">
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div
            key={index}
            className={`gallery-item ${index === 0 || index === 5 ? 'grid-wide' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
            onClick={() => setSelectedImage(src)}
          >
            <span className="thumb-icon">
              <i className="fa fa-picture-o"></i>
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Gallery Enlarged"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="modal-close"
          >
            ✕
          </button>
        </div>
      )}
>>>>>>> 247e312 (Completed final layout and fixed remaining bugs-m)
    </section>
  );
};

export default GallerySection;
