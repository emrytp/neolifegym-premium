import React from "react";

const RegistrationBannerSection = () => {
  return (
    <section className="registration-banner set-bg" style={{ backgroundImage: `url("/assets/img/banner-bg.jpg")` }}>
      <div className="container">
        <div className="rb-text text-center">
          <h2>REGISTRATION NOW TO GET MORE DEALS</h2>
          <p>WHERE HEALTH, BEAUTY AND FITNESS MEET.</p>
          <a href="#contact" className="primary-btn">APPOINTMENT</a>
        </div>
      </div>
    </section>
  );
};

export default RegistrationBannerSection;
