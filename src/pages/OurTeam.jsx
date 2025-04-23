import React from 'react';
import FooterSection from '../components/FooterSection';
import GetInTouchSection from '../components/GetInTouchSection';

const teamData = [
  { img: 'team-1.jpg', name: 'Kaitlyn Smith', role: 'GYM TRAINER' },
  { img: 'team-2.jpg', name: 'Jasmin Schowalter', role: 'CARDIO EXPERT' },
  { img: 'team-3.jpg', name: 'Rick Grimes', role: 'BODYBUILDING COACH' },
  { img: 'team-4.jpg', name: 'Bella Brown', role: 'YOGA TRAINER' },
  { img: 'team-5.jpg', name: 'Liam Johnson', role: 'MOBILITY COACH' },
  { img: 'team-6.jpg', name: 'Emily White', role: 'NUTRITION EXPERT' },
];

const OurTeam = () => {
  return (
    <>
      {/* Breadcrumb */}
      <section
        className="breadcrumb-section set-bg"
        style={{ backgroundImage: `url('/assets/img/breadcrumb-bg.jpg')` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-start">
              <div className="breadcrumb-text">
                <h2>Our Team</h2>
                <div className="bt-option">
                  <a href="/">Home</a>
                  <span>Our Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
{/* Team Section */}
<section className="team-section team-page spad">
  <div className="container">

    {/* Başlık ve Buton Satırı */}
    <div className="row justify-content-between align-items-center mb-5">
      <div className="col-lg-6">
        <div className="section-title text-start">
          <span>OUR TEAM</span>
          <h2 style={{ fontSize: '34px' }}>TRAIN WITH EXPERTS</h2>
        </div>
      </div>
      <div className="col-lg-3 text-lg-end text-start mt-3 mt-lg-0">
        <a href="#" className="primary-btn">APPOINTMENT</a>
      </div>
    </div>

    {/* Team Members */}
    <div className="row gy-5">
      {teamData.map((member, index) => (
        <div className="col-lg-4 col-sm-6" key={index}>
          <div
            className="ts-item"
            style={{
              backgroundImage: `url(/assets/img/team/${member.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '420px',
              position: 'relative',
            }}
          >
            <div className="ts_text">
              <h4>{member.name}</h4>
              <span>{member.role}</span>
              <div className="tt_social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

=======
      {/* Team Section */}
      <section className="team-section team-page spad">
        <div className="container">

          {/* Başlık ve Buton */}
          <div className="row justify-content-between align-items-center mb-5">
            <div className="col-lg-6">
              <div className="section-title text-start">
                <span>OUR TEAM</span>
                <h2 style={{ fontSize: '34px' }}>TRAIN WITH EXPERTS</h2>
              </div>
            </div>
            <div className="col-lg-3 text-lg-end text-start mt-3 mt-lg-0">
              <a href="#" className="primary-btn">APPOINTMENT</a>
            </div>
          </div>

          {/* Team Cards */}
          <div className="row gy-5">
            {teamData.map((member, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div
                  className="ts-item"
                  style={{
                    backgroundImage: `url(/assets/img/team/${member.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '420px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    className="ts_text"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      background: 'rgba(0, 0, 0, 0.6)',
                      color: 'white',
                      padding: '20px',
                      opacity: 0,
                      transform: 'translateY(100%)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <h4 style={{ margin: 0, color: 'white' }}>{member.name}</h4>
                    <span>{member.role}</span>
                    <div className="tt_social" style={{ marginTop: '10px' }}>
                      <a href="#"><i className="fa fa-facebook" style={{ marginRight: '10px', color: 'white' }}></i></a>
                      <a href="#"><i className="fa fa-twitter" style={{ marginRight: '10px', color: 'white' }}></i></a>
                      <a href="#"><i className="fa fa-instagram" style={{ color: 'white' }}></i></a>
                    </div>
                  </div>
                </div>

                {/* Hover Style */}
                <style>{`
                  .ts-item:hover .ts_text {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </section>
>>>>>>> 247e312 (Completed final layout and fixed remaining bugs-m)

      <GetInTouchSection />
      <FooterSection />
    </>
  );
};

export default OurTeam;
