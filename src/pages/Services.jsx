import React from 'react';
import RegistrationBannerSection from '../components/RegistrationBannerSection';
import PricingSection from '../components/PricingSection';
import GetInTouchSection from '../components/GetInTouchSection';
import FooterSection from '../components/FooterSection';

const servicesData = [
  {
    img: 'services-1.jpg',
    title: 'Personal training',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.',
  },
  {
    img: 'services-2.jpg',
    title: 'Group fitness classes',
    desc: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.',
  },
  {
    img: 'services-3.jpg',
    title: 'Strength training',
    desc: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.',
  },
  {
    img: 'services-4.jpg',
    title: 'Body building',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.',
  }
];

const Services = () => {
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
                <h2>Our Services</h2>
                <div className="bt-option">
                  <a href="/">Home</a>
                  <span>Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section spad">
        <div className="container">
          <div className="section-title text-center">
            <span>What We Do?</span>
            <h2>Push Your Limits Forward</h2>
          </div>
          <div className="row gx-0"> {/* gx-0 => yatay boşlukları sıfırlar */}
            {servicesData.map((item, index) => (
              <div className="col-lg-6 col-md-6 p-0" key={index}> {/* p-0 => iç boşluk sıfır */}
                <div className="d-flex" style={{ height: '220px' }}> {/* daha kompakt görünüm */}
                  <div className="ss-pic" style={{ flex: 1 }}>
                    <img
                      src={`/assets/img/services/${item.img}`}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className={`ss-text ${index % 2 !== 0 ? 'second-row' : ''}`}
                    style={{
                      flex: 1,
                      padding: '30px',
                      fontSize: '15px',
                      height: '100%'
                    }}
                  >
                    <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>{item.title}</h4>
                    <p style={{ fontSize: '13px', marginBottom: '10px' }}>{item.desc}</p>
                    <a href="#" style={{ fontSize: '13px' }}>Explore</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer bölümleri */}
      <RegistrationBannerSection />
      <PricingSection />
      <GetInTouchSection />
      <FooterSection />
    </>
  );
};

export default Services;
