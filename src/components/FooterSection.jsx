import React from 'react';

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="fs-about">
              <div className="fa-logo">
                <a href="#"><img src="/assets/img/logo.png" alt="logo" /></a>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <div className="fa-social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-youtube-play"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-envelope-o"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="fs-widget">
              <h4>Useful links</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Classes</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="fs-widget">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Login</a></li>
                <li><a href="#">My account</a></li>
                <li><a href="#">Subscribe</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="fs-widget">
              <h4>Tips & Guides</h4>
              <div className="fw-recent">
                <h6><a href="#">Physical fitness may help prevent depression...</a></h6>
                <ul>
                  <li>3 min read</li>
                  <li>20 Comment</li>
                </ul>
              </div>
              <div className="fw-recent">
                <h6><a href="#">Fitness: The best exercise to lose belly fat...</a></h6>
                <ul>
                  <li>3 min read</li>
                  <li>20 Comment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <div className="copyright-text">
              <p>
                Copyright &copy;{new Date().getFullYear()} All rights reserved |
                Template by <a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
