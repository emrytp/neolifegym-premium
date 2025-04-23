import React from "react";

const OurClassesSection = () => {
  return (
<<<<<<< HEAD
    <section className="classes-section">
      <div className="section-title">
        <span>OUR CLASSES</span>
        <h2>WHAT WE CAN OFFER</h2>
      </div>

      <div className="classes-wrapper">
        <div className="classes-grid">
          {/* Üstteki 3 küçük kart */}
          <div className="our-class-item">
            <div className="ci-pic">
              <img src="/assets/img/classes/class-1.jpg" alt="Weightlifting" />
            </div>
            <div className="ci-text">
              <span>STRENGTH</span>
              <h5>Weightlifting</h5>
              <a href="#">→</a>
            </div>
          </div>

          <div className="our-class-item">
            <div className="ci-pic">
              <img src="/assets/img/classes/class-2.jpg" alt="Indoor Cycling" />
            </div>
            <div className="ci-text">
              <span>CARDIO</span>
              <h5>Indoor Cycling</h5>
              <a href="#">→</a>
            </div>
          </div>

          <div className="our-class-item">
            <div className="ci-pic">
              <img src="/assets/img/classes/class-3.jpg" alt="Kettlebell Power" />
            </div>
            <div className="ci-text">
              <span>STRENGTH</span>
              <h5>Kettlebell Power</h5>
              <a href="#">→</a>
            </div>
          </div>

          {/* Alttaki 2 büyük kart */}
          <div className="our-class-item large">
            <div className="ci-pic">
              <img src="/assets/img/classes/class-4.jpg" alt="Indoor Cycling 2" />
            </div>
            <div className="ci-text">
              <span>CARDIO</span>
              <h5>Indoor Cycling</h5>
              <a href="#">→</a>
            </div>
          </div>

          <div className="our-class-item large">
            <div className="ci-pic">
              <img src="/assets/img/classes/class-5.jpg" alt="Boxing" />
            </div>
            <div className="ci-text">
              <span>TRAINING</span>
              <h5>Boxing</h5>
              <a href="#">→</a>
            </div>
          </div>
        </div>
      </div>
    </section>
=======
    <>
      <style>
        {`
        .classes-section {
          background: #151515;
          padding: 80px 0;
        }

        .section-title {
          text-align: left;
          margin-bottom: 20px;
        }

        .section-title span {
          color: #f36100;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: block;
        }

        .section-title h2 {
          font-size: 34px;
          color: #fff;
          margin-top: 5px;
          font-weight: 700;
        }

        .appointment-btn {
          text-align: right;
        }

        .appointment-btn .primary-btn {
          background-color: transparent;
          border: 2px solid #f36100;
          color: #fff;
          font-weight: 600;
          padding: 10px 25px;
          transition: 0.3s;
        }

        .appointment-btn .primary-btn:hover {
          background-color: #f36100;
          color: #fff;
        }

        .classes-wrapper {
          display: flex;
          justify-content: center;
        }

        .classes-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 30px;
          max-width: 1140px;
          width: 100%;
          padding: 0 15px;
        }

        .our-class-item {
          grid-column: span 2;
          background: #0a0a0a;
          overflow: hidden;
          position: relative;
          transition: transform 0.3s ease;
        }

        .our-class-item.large {
          grid-column: span 3;
        }

        .our-class-item .ci-pic img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          display: block;
        }

        .our-class-item .ci-text {
          position: absolute;
          bottom: -100px;
          left: 0;
          right: 0;
          padding: 20px 25px;
          background: rgba(0, 0, 0, 0.75);
          transition: bottom 0.3s ease;
        }

        .our-class-item:hover .ci-text {
          bottom: 0;
        }

        .our-class-item .ci-text span {
          color: #f36100;
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 700;
        }

        .our-class-item .ci-text h5 {
          font-size: 18px;
          color: #fff;
          font-weight: 600;
          margin-top: 5px;
        }

        .our-class-item .ci-text a {
          position: absolute;
          right: 20px;
          bottom: 20px;
          display: inline-block;
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.1);
          line-height: 36px;
          text-align: center;
          font-size: 18px;
          color: #fff;
          border-radius: 50%;
        }

        @media (max-width: 992px) {
          .classes-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .our-class-item,
          .our-class-item.large {
            grid-column: span 2;
          }

          .appointment-btn {
            text-align: left;
            margin-top: 15px;
          }
        }

        @media (max-width: 576px) {
          .classes-grid {
            grid-template-columns: 1fr;
          }

          .our-class-item,
          .our-class-item.large {
            grid-column: span 1;
          }
        }
      `}
      </style>

      <section className="classes-section">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-5 px-3">
            <div className="col-lg-6">
              <div className="section-title">
                <span>OUR CLASSES</span>
                <h2>WHAT WE CAN OFFER</h2>
              </div>
            </div>
            <div className="col-lg-3 appointment-btn">
              <a href="#" className="primary-btn">APPOINTMENT</a>
            </div>
          </div>

          <div className="classes-wrapper">
            <div className="classes-grid">
              <div className="our-class-item">
                <div className="ci-pic">
                  <img src="/assets/img/classes/class-1.jpg" alt="Weightlifting" />
                </div>
                <div className="ci-text">
                  <span>STRENGTH</span>
                  <h5>Weightlifting</h5>
                  <a href="#">→</a>
                </div>
              </div>

              <div className="our-class-item">
                <div className="ci-pic">
                  <img src="/assets/img/classes/class-2.jpg" alt="Indoor Cycling" />
                </div>
                <div className="ci-text">
                  <span>CARDIO</span>
                  <h5>Indoor Cycling</h5>
                  <a href="#">→</a>
                </div>
              </div>

              <div className="our-class-item">
                <div className="ci-pic">
                  <img src="/assets/img/classes/class-3.jpg" alt="Kettlebell Power" />
                </div>
                <div className="ci-text">
                  <span>STRENGTH</span>
                  <h5>Kettlebell Power</h5>
                  <a href="#">→</a>
                </div>
              </div>

              <div className="our-class-item large">
                <div className="ci-pic">
                  <img src="/assets/img/classes/class-4.jpg" alt="Indoor Cycling 2" />
                </div>
                <div className="ci-text">
                  <span>CARDIO</span>
                  <h5>Indoor Cycling</h5>
                  <a href="#">→</a>
                </div>
              </div>

              <div className="our-class-item large">
                <div className="ci-pic">
                  <img src="/assets/img/classes/class-5.jpg" alt="Boxing" />
                </div>
                <div className="ci-text">
                  <span>TRAINING</span>
                  <h5>Boxing</h5>
                  <a href="#">→</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
>>>>>>> 247e312 (Completed final layout and fixed remaining bugs-m)
  );
};

export default OurClassesSection;
<<<<<<< HEAD
=======

>>>>>>> 247e312 (Completed final layout and fixed remaining bugs-m)
