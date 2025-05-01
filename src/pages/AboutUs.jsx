import React from 'react';
import Slider from 'react-slick';

import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TeamSection from '../components/TeamSection';
import RegistrationBannerSection from '../components/RegistrationBannerSection';
import GetInTouchSection from '../components/GetInTouchSection';
import FooterSection from '../components/FooterSection';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutUs = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // 💪 Barları buradan yönet
  const progressBars = [
    { label: "Body building", percentage: 80 },
    { label: "Training", percentage: 90 },
    { label: "Fitness", percentage: 75 },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url('/assets/img/breadcrumb-bg.jpg')` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text">
                <h2>About us</h2>
                <div className="bt-option">
                  <a href="/">Home</a>
                  <span>About</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* About Us Text & Video */}
      <section className="aboutus-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div
                className="about-video set-bg"
                style={{ backgroundImage: `url('/assets/img/about-us.jpg')` }}>
                <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup">
                  <i className="fa fa-caret-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="about-text">
                <div className="section-title">
                  <span>About Us</span>
                  <h2>What we have done</h2>
                </div>
                <div className="at-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>

                {/* 💥 Progress Bars */}
                <div className="about-bar">
                  {progressBars.map((bar, i) => (
                    <div className="ab-item" key={i}>
                      <p>{bar.label}</p>
                      <div className="barfiller" data-percentage={bar.percentage} style={{ background: "#333", height: "10px", borderRadius: "5px", overflow: "hidden" }}>
                        <span
                          className="fill"
                          style={{
                            width: `${bar.percentage}%`,
                            background: '#ff5e13',
                            display: 'block',
                            height: '100%',
                            transition: 'width 1.5s ease',
                          }}
                        ></span>
                        <div className="tipWrap">
                          <span className="tip" style={{ color: "#fff", fontSize: "12px", marginLeft: "5px" }}>{bar.percentage}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      {/* Banner */}
      <RegistrationBannerSection />

      {/* Testimonial */}
      <section className="testimonial-section spad">
        <div className="container">
          <div className="section-title text-center">
            <span>Testimonial</span>
            <h2>Our client say</h2>
          </div>
          <Slider {...sliderSettings}>
            {[1, 2].map((i) => (
              <div className="ts-item text-center" key={i}>
                <div className="ti-pic">
                  <img src={`/assets/img/testimonial/testimonial-${i}.jpg`} alt="" />
                </div>
                <div className="ti-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <h5>Marshmello Gomez</h5>
                  <div className="tt-rating">
                    {[...Array(5)].map((_, j) => (
                      <i className="fa fa-star" key={j}></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Contact */}
      <GetInTouchSection />
      <FooterSection />
    </>
  );
};

export default AboutUs;
