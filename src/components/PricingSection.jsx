import React from "react";

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="section-title">
          <span>OUR PLAN</span>
          <h2>CHOOSE YOUR PRICING PLAN</h2>
        </div>
        <div className="pricing-cards">
          {/* 1. Kart */}
          <div className="ps-item">
            <h3>Class drop-in</h3>
            <div className="pi-price">
              <h2>$ 39.0</h2>
              <span>SINGLE CLASS</span>
            </div>
            <ul>
              <li>Free riding</li>
              <li>Unlimited equipments</li>
              <li>Personal trainer</li>
              <li>Weight losing classes</li>
              <li>Month to mouth</li>
              <li>No time restriction</li>
            </ul>
            <a href="#" className="pricing-btn">ENROLL NOW</a>
          </div>

          {/* 2. Kart */}
          <div className="ps-item">
            <h3>12 Month unlimited</h3>
            <div className="pi-price">
              <h2>$ 99.0</h2>
              <span>SINGLE CLASS</span>
            </div>
            <ul>
              <li>Free riding</li>
              <li>Unlimited equipments</li>
              <li>Personal trainer</li>
              <li>Weight losing classes</li>
              <li>Month to mouth</li>
              <li>No time restriction</li>
            </ul>
            <a href="#" className="pricing-btn">ENROLL NOW</a>
          </div>

          {/* 3. Kart */}
          <div className="ps-item">
            <h3>6 Month unlimited</h3>
            <div className="pi-price">
              <h2>$ 59.0</h2>
              <span>SINGLE CLASS</span>
            </div>
            <ul>
              <li>Free riding</li>
              <li>Unlimited equipments</li>
              <li>Personal trainer</li>
              <li>Weight losing classes</li>
              <li>Month to mouth</li>
              <li>No time restriction</li>
            </ul>
            <a href="#" className="pricing-btn">ENROLL NOW</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
