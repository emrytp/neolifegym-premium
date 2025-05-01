import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="team-section spad">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5 team-title">
          <div className="section-title text-start">
            <span>Our Team</span>
            <h2>TRAIN WITH EXPERTS</h2>
          </div>
          <a href="#" className="primary-btn btn-normal appoinment-btn">APPOINTMENT</a>
        </div>

        <Slider {...settings} className="ts-slider">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div className="px-2" key={num}>
              <div
                className="ts-item"
                style={{
                  backgroundImage: `url("/assets/img/team/team-${num}.jpg")`,
                }}
              >
                <div className="ts_text">
                  <h4>Athart Rachel</h4>
                  <span>Gym Trainer</span>
                  <div className="tt_social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamSection;
