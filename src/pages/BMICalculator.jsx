import React, { useState } from "react";
import FooterSection from "../components/FooterSection";
import GetInTouchSection from "../components/GetInTouchSection";

const BMICalculator = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(25);
  const [sex, setSex] = useState("");

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  let message = "";
  if (bmi < 18.5) message = "Underweight";
  else if (bmi < 25) message = "Healthy";
  else if (bmi < 30) message = "Overweight";
  else message = "Obese";

  return (
    <>
      {/* Breadcrumb */}
      <section
        className="breadcrumb-section set-bg"
        style={{ backgroundImage: `url("/assets/img/breadcrumb-bg.jpg")` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text">
                <h2>BMI Calculator</h2>
                <div className="bt-option">
                  <a href="/">Home</a>
                  <span>Pages</span>
                  <span>BMI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BMI Section */}
      <section className="bmi-section spad">
        <div className="container">
          <div className="row align-items-start">
            {/* BMI Chart */}
            <div className="col-lg-6 mb-5">
              <div className="section-title mb-4">
                <span style={{ color: '#ff5e13', textTransform: 'uppercase', fontWeight: 600 }}>Check your body</span>
                <h2 style={{ color: '#fff', fontWeight: 700 }}>BMI Calculator Chart</h2>
              </div>
              <table style={{ width: '100%', backgroundColor: '#111', borderCollapse: 'collapse', color: '#fff' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #333' }}>
                    <th style={{ padding: '12px', textAlign: 'left' }}>BMI</th>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Weight Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: '#000' }}>
                    <td style={{ padding: '12px' }}>Below 18.5</td>
                    <td style={{ padding: '12px' }}>Underweight</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px' }}>18.5 - 24.9</td>
                    <td style={{ padding: '12px' }}>Healthy</td>
                  </tr>
                  <tr style={{ backgroundColor: '#000' }}>
                    <td style={{ padding: '12px' }}>25.0 - 29.9</td>
                    <td style={{ padding: '12px' }}>Overweight</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px' }}>30.0 - and Above</td>
                    <td style={{ padding: '12px' }}>Obese</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* BMI Form */}
            <div className="col-lg-6">
              <div className="section-title mb-4">
                <span style={{ color: '#ff5e13', textTransform: 'uppercase', fontWeight: 600 }}>Check your body</span>
                <h2 style={{ color: '#fff', fontWeight: 700 }}>Calculate your BMI</h2>
              </div>
              <p style={{ color: '#aaa', marginBottom: '25px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="number" placeholder="Height / cm" value={height} onChange={(e) => setHeight(e.target.value)}
                    style={{ backgroundColor: '#000', border: '1px solid #333', color: '#fff', padding: '12px', width: '100%' }} />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="number" placeholder="Weight / kg" value={weight} onChange={(e) => setWeight(e.target.value)}
                    style={{ backgroundColor: '#000', border: '1px solid #333', color: '#fff', padding: '12px', width: '100%' }} />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}
                    style={{ backgroundColor: '#000', border: '1px solid #333', color: '#fff', padding: '12px', width: '100%' }} />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" placeholder="Sex" value={sex} onChange={(e) => setSex(e.target.value)}
                    style={{ backgroundColor: '#000', border: '1px solid #333', color: '#fff', padding: '12px', width: '100%' }} />
                </div>
              </div>
              <div className="text-center">
                <button style={{ backgroundColor: '#ff5e13', color: '#fff', padding: '14px', width: '100%', border: 'none', fontWeight: 600, marginTop: '10px' }}>
                  CALCULATE
                </button>
                <div className="mt-4">
                  <h4 style={{ fontSize: '22px', color: '#fff' }}>Your BMI: <span style={{ color: '#ff5e13' }}>{bmi}</span></h4>
                  <p style={{ fontSize: '18px', color: '#ccc' }}>{message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetInTouchSection />
      <FooterSection />
    </>
  );
};

export default BMICalculator;
