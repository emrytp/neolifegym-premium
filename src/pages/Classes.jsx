import React from 'react';
import FooterSection from '../components/FooterSection';
import GetInTouchSection from '../components/GetInTouchSection';

const Classes = () => {
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
                <h2>Classes Detail</h2>
                <div className="bt-option">
                  <a href="/">Home</a>
                  <span>Classes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Details */}
      <section className="class-details-section spad">
        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="col-lg-8">
              <div className="class-details-text">
                <div className="cd-pic">
                  <img
                    src="/assets/img/classes/class-details/class-detailsl.jpg"
                    alt=""
                  />
                </div>
                <div className="cd-text">
                  <div className="cd-single-item">
                    <h3>Body Buiding</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <h3>Trainer</h3>
                    <p>
                      Dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>

                {/* Trainer */}
                <div className="cd-trainer">
                  <div className="row align-items-center">
                    <div className="col-lg-5 col-md-5">
                      <div className="cd-trainer-pic">
                        <img
                          src="/assets/img/classes/class-details/trainer-profile.jpg"
                          alt="Trainer"
                          style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                      <div className="cd-trainer-text">
                        <div className="trainer-title">
                          <h4>Athart Rachel</h4>
                          <span>GYM TRAINER</span>
                        </div>
                        <div className="trainer-social">
                          <a href="#"><i className="fa fa-facebook"></i></a>
                          <a href="#"><i className="fa fa-twitter"></i></a>
                          <a href="#"><i className="fa fa-youtube-play"></i></a>
                          <a href="#"><i className="fa fa-envelope"></i></a>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua viverra maecenas lacus vel facilisis.
                        </p>
                        <ul className="trainer-info">
                          <li><span>Age</span>35</li>
                          <li><span>Weight</span>148lbs</li>
                          <li><span>Height</span>10’ 2’’</li>
                          <li><span>Occupation</span>No-founder</li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua viverra maecenas lacus vel facilisis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timetable */}
                <div
                  className="class-details-timetable_title"
                  style={{ textAlign: 'left' }}
                >
                  <h5>Classes timetable</h5>
                </div>
                <div
                  className="class-timetable details-timetable"
                  style={{ maxWidth: '870px', marginLeft: 'auto' }}
                >
                  <table>
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="class-time">6.00am - 8.00am</td>
                        <td className="hover-dp"><h5>WEIGHT LOOSE</h5><span>RLefew D. Loee</span></td>
                        <td className="hover-dp dark-bg"><h5>CARDIO</h5><span>RLefew D. Loee</span></td>
                        <td className="hover-dp"><h5>YOGA</h5><span>Keaf Shen</span></td>
                        <td className="hover-dp dark-bg"><h5>FITNESS</h5><span>Kimberly Stone</span></td>
                        <td className="blank-td"></td>
                        <td className="hover-dp"><h5>BOXING</h5><span>Rachel Adam</span></td>
                        <td className="hover-dp dark-bg"><h5>BODY BUILDING</h5><span>Robert Cage</span></td>
                      </tr>
                      <tr>
                        <td className="class-time">10.00am - 12.00am</td>
                        <td className="blank-td"></td>
                        <td className="hover-dp dark-bg"><h5>FITNESS</h5><span>Kimberly Stone</span></td>
                        <td className="hover-dp"><h5>WEIGHT LOOSE</h5><span>RLefew D. Loee</span></td>
                        <td className="hover-dp dark-bg"><h5>CARDIO</h5><span>RLefew D. Loee</span></td>
                        <td className="hover-dp"><h5>BODY BUILDING</h5><span>Robert Cage</span></td>
                        <td className="hover-dp dark-bg"><h5>KARATE</h5><span>Donald Grey</span></td>
                        <td className="blank-td"></td>
                      </tr>
                      <tr>
                        <td className="class-time">5.00pm - 7.00pm</td>
                        <td className="hover-dp dark-bg"><h5>BOXING</h5><span>Rachel Adam</span></td>
                        <td className="hover-dp"><h5>KARATE</h5><span>Donald Grey</span></td>
                        <td className="hover-dp dark-bg"><h5>BODY BUILDING</h5><span>Robert Cage</span></td>
                        <td className="blank-td"></td>
                        <td className="hover-dp dark-bg"><h5>YOGA</h5><span>Keaf Shen</span></td>
                        <td className="hover-dp dark-bg"><h5>CARDIO</h5><span>RLefew D. Loee</span></td>
                        <td className="hover-dp"><h5>FITNESS</h5><span>Kimberly Stone</span></td>
                      </tr>
                      <tr>
                        <td className="class-time">7.00pm - 9.00pm</td>
                        <td className="blank-td"></td>
                        <td className="hover-dp dark-bg"><h5>CARDIO</h5><span>RLefew D. Loee</span></td>
                        <td className="blank-td"></td>
                        <td className="hover-dp dark-bg"><h5>BOXING</h5><span>Rachel Adam</span></td>
                        <td className="hover-dp"><h5>YOGA</h5><span>Keaf Shen</span></td>
                        <td className="hover-dp"><h5>KARATE</h5><span>Donald Grey</span></td>
                        <td className="hover-dp dark-bg"><h5>WEIGHT LOOSE</h5><span>RLefew D. Loee</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-5">
              <div className="sidebar-option">
                <div className="so-categories">
                  <div className="title">Categories</div>
                  <ul>
                    <li><a href="#">Yoga <span>12</span></a></li>
                    <li><a href="#">Runing <span>32</span></a></li>
                    <li><a href="#">Weightloss <span>86</span></a></li>
                    <li><a href="#">Cardio <span>25</span></a></li>
                    <li><a href="#">Body building <span>36</span></a></li>
                    <li><a href="#">Nutrition <span>15</span></a></li>
                  </ul>
                </div>

                <div className="so-latest">
                  <div className="title">LATEST POSTS</div>
                  <div
                    className="latest-large set-bg"
                    style={{
                      backgroundImage: `url('/assets/img/letest-blog/latest-1.jpg')`,
                    }}
                  >
                    <div className="ll-text">
                      <h5>
                        <a href="#">
                          This Japanese Way of Making Iced Coffee Is a Game...
                        </a>
                      </h5>
                      <ul>
                        <li>Aug 20, 2019</li>
                        <li>20 Comment</li>
                      </ul>
                    </div>
                  </div>

                  {[
                    {
                      img: 'latest-2.jpg',
                      title: 'Grilled Potato and Green Bean Salad',
                      date: 'Aug 15, 2019',
                    },
                    {
                      img: 'latest-3.jpg',
                      title: 'The $8 French Rosé I Buy in Bulk Every Summer',
                      date: 'Aug 15, 2019',
                    },
                    {
                      img: 'latest-4.jpg',
                      title: "Ina Garten's Skillet-Roasted Lemon Chicken",
                      date: 'Aug 15, 2019',
                    },
                    {
                      img: 'latest-5.jpg',
                      title: 'The Best Weeknight Baked Potatoes, 3 Creative Ways',
                      date: 'Aug 15, 2019',
                    },
                  ].map((post, index) => (
                    <div className="latest-item" key={index}>
                      <div className="li-pic">
                        <img
                          src={`/assets/img/letest-blog/${post.img}`}
                          alt={post.title}
                        />
                      </div>
                      <div className="li-text">
                        <h6>
                          <a href="#">{post.title}</a>
                        </h6>
                        <span className="li-time">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="so-banner set-bg"
                  style={{
                    backgroundImage: `url('/assets/img/sidebar-banner.jpg')`,
                  }}
                >
                  <h5>Join Our Classes Today!</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <GetInTouchSection />
      <FooterSection />
    </>
  );
};

export default Classes;
