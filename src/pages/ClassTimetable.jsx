import React from "react";
import FooterSection from "../components/FooterSection";
import GetInTouchSection from "../components/GetInTouchSection";

const ClassTimetable = () => {
  const cellStyleDark = {
    backgroundColor: "#111",
    transition: "0.3s",
    padding: "20px",
  };

  const cellStyleLight = {
    backgroundColor: "#1a1a1a",
    transition: "0.3s",
    padding: "20px",
  };

  const textStyle = {
    color: "#fff",
    fontSize: "18px",
  };

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
                <h2>Timetable</h2>
                <div className="bt-option">
                  <a href="/">Home</a>
                  <span>Pages</span>
                  <span>Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Başlık */}
      <section className="class-timetable-section spad">
        <div className="container">
          <div
            className="section-title"
            style={{ textAlign: "left", marginBottom: "30px" }}
          >
            <span style={{ fontSize: "13px" }}>FIND YOUR TIME</span>
            <h2 style={{ fontSize: "37px", lineHeight: "1.2" }}>Find Your Time</h2>
          </div>

          {/* Tablo */}
          <div
            className="class-timetable details-timetable"
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              paddingTop: "30px",
              fontSize: "18px",
              minHeight: "700px"
            }}
          >
            <table>
              <thead>
                <tr>
                  <th style={{ fontSize: "20px", backgroundColor: "#ff5e13", color: "#fff" }}>Time</th>
                  <th style={{ backgroundColor: "#ff5e13", color: "#fff" }}>Monday</th>
                  <th style={{ backgroundColor: "#ff5e13", color: "#fff" }}>Tuesday</th>
                  <th style={{ backgroundColor: "#ff5e13", color: "#fff" }}>Wednesday</th>
                  <th style={{ backgroundColor: "#ff5e13", color: "#fff" }}>Thursday</th>
                  <th style={{ backgroundColor: "#ff5e13", color: "#fff" }}>Friday</th>
                  <th style={{ backgroundColor: "#ff5e13", color: "#fff" }}>Saturday</th>
                  <th style={{ backgroundColor: "#ff5e13", color: "#fff" }}>Sunday</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["6.00am - 8.00am", ["WEIGHT LOOSE", "RLefew D. Loee"], ["CARDIO", "RLefew D. Loee"], ["YOGA", "Keaf Shen"], ["FITNESS", "Kimberly Stone"], null, ["BOXING", "Rachel Adam"], ["BODY BUILDING", "Robert Cage"]],
                  ["10.00am - 12.00am", null, ["FITNESS", "Kimberly Stone"], ["WEIGHT LOOSE", "RLefew D. Loee"], ["CARDIO", "RLefew D. Loee"], ["BODY BUILDING", "Robert Cage"], ["KARATE", "Donald Grey"], null],
                  ["5.00pm - 7.00pm", ["BOXING", "Rachel Adam"], ["KARATE", "Donald Grey"], ["BODY BUILDING", "Robert Cage"], null, ["YOGA", "Keaf Shen"], ["CARDIO", "RLefew D. Loee"], ["FITNESS", "Kimberly Stone"]],
                  ["7.00pm - 9.00pm", ["CARDIO", "RLefew D. Loee"], null, ["BOXING", "Rachel Adam"], ["YOGA", "Keaf Shen"], ["KARATE", "Donald Grey"], ["BOXING", "Rachel Adam"], ["WEIGHT LOOSE", "RLefew D. Loee"]]
                ].map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="class-time">{row[0]}</td>
                    {row.slice(1).map((cell, i) => (
                      <td
                        key={i}
                        className={`hover-dp${(rowIndex + i) % 2 === 0 ? " dark-bg" : ""}`}
                        style={(rowIndex + i) % 2 === 0 ? cellStyleLight : cellStyleDark}
                      >
                        {cell ? (
                          <>
                            <h5 style={textStyle}>{cell[0]}</h5>
                            <span style={textStyle}>{cell[1]}</span>
                          </>
                        ) : (
                          <div style={{ height: "48px" }}></div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Inline hover CSS */}
      <style>
        {`
          .hover-dp:hover {
            background-color: #ff5e13 !important;
          }
          .hover-dp:hover h5,
          .hover-dp:hover span {
            color: #fff !important;
          }
        `}
      </style>

      <GetInTouchSection />
      <FooterSection />
    </>
  );
};

export default ClassTimetable;
