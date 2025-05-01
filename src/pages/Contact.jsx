import React from "react";
import FooterSection from "../components/FooterSection";
import GetInTouchSection from '../components/GetInTouchSection';

const Contact = () => {
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
                <h2>Contact Us</h2>
                <div className="bt-option">
                  <a href="/">Home</a>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section spad">
        <div className="container">
          <div className="row">
            {/* Sol Bilgiler */}
            <div className="col-lg-6">
              <div className="section-title contact-title">
                <span>CONTACT US</span>
                <h2>GET IN TOUCH</h2>
              </div>
              <div className="contact-widget">
                <div className="cw-text d-flex mb-4">
                  <i className="fa fa-map-marker"></i>
                  <p>333 Middle Winchendon Rd, Rindge, NH 03461</p>
                </div>
                <div className="cw-text d-flex mb-4">
                  <i className="fa fa-mobile"></i>
                  <p>125-711-811 | 125-668-886</p>
                </div>
                <div className="cw-text d-flex">
                  <i className="fa fa-envelope"></i>
                  <p>support.gymcenter@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Sağ Form */}
            <div className="col-lg-6">
              <form
                className="leave-comment"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  type="text"
                  placeholder="Name"
                  style={{
                    background: "#111",
                    color: "#fff",
                    border: "1px solid #333",
                    padding: "15px 20px",
                    marginBottom: "20px",
                    width: "100%",
                    fontSize: "16px",
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  style={{
                    background: "#111",
                    color: "#fff",
                    border: "1px solid #333",
                    padding: "15px 20px",
                    marginBottom: "20px",
                    width: "100%",
                    fontSize: "16px",
                  }}
                />
                <input
                  type="text"
                  placeholder="Website"
                  style={{
                    background: "#111",
                    color: "#fff",
                    border: "1px solid #333",
                    padding: "15px 20px",
                    marginBottom: "20px",
                    width: "100%",
                    fontSize: "16px",
                  }}
                />
                <textarea
                  placeholder="Comment"
                  style={{
                    background: "#111",
                    color: "#fff",
                    border: "1px solid #333",
                    padding: "15px 20px",
                    marginBottom: "20px",
                    width: "100%",
                    fontSize: "16px",
                    height: "150px",
                    resize: "none",
                  }}
                ></textarea>
                <button
                  type="submit"
                  style={{
                    background: "#ff5e13",
                    color: "#fff",
                    padding: "15px",
                    border: "none",
                    width: "100%",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    transition: "0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Harita */}
        <div className="map" style={{ width: '57%', margin: '0 auto', paddingTop: '40px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48345.73873450982!2d-74.25313739834978!3d40.768703043594115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ae84a380f257%3A0x6909c635aeb94ec5!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1str!2str!4v1684920215601!5m2!1str!2str"
            height="600"
            style={{ border: 0, width: '100%', height: '600px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </section>

      <GetInTouchSection />
      <FooterSection />
    </>
  );
};

export default Contact;
