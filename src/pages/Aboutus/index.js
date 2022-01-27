import React from "react";
import Footer from "../../components/Footer";

import "./style.css";

const Aboutus = () => {
  return (
    <React.Fragment>
      <div className="text-center about-content">
        <h1 className="about-title">About Us</h1>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="mx-2 my-2 about-part">
            <img src="/images/aboutus/head1.png" alt="head1" className="mt-5" />
            <div className="mt-4">
              <span className="about-head1-text">Dr. Frankenstein</span>
            </div>
            <div className="mt-3">
              <span className="about-head2-text">Project Lead</span>
            </div>
          </div>
          <div className="mx-2 my-2 about-part">
            <img src="/images/aboutus/head2.png" alt="head2" className="mt-5" />
            <div className="mt-4">
              <span className="about-head1-text">Frankenstein's Bride</span>
            </div>
            <div className="mt-3">
              <span className="about-head2-text">Treasury Investment Lead</span>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="mx-2 my-2 about-part">
            <img src="/images/aboutus/head3.png" alt="head3" className="mt-5" />
            <div className="mt-4">
              <span className="about-head1-text">Hallenstein</span>
            </div>
            <div className="mt-3">
              <span className="about-head2-text">Lead Project Developer</span>
            </div>
          </div>
          <div className="mx-2 my-2 about-part">
            <img src="/images/aboutus/head4.png" alt="head4" className="mt-5" />
            <div className="mt-4">
              <span className="about-head1-text">Fenoherystein</span>
            </div>
            <div className="mt-3">
              <span className="about-head2-text">Lead project designer</span>
            </div>
          </div>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <div className="about-under-content">
            <div className="mt-2">
              <span className="about-head1-text">
                Our team has decided to remain
                <span className="about-head2-text"> anonymous</span>
              </span>
            </div>
            <div>
              <span className="about-head1-text">
                Our team’s goal is simple: to make our
                <span className="about-head2-text"> investors wealthy</span>
              </span>
            </div>
            <div>
              <span className="about-head1-text">
                by providing them with access to the best NFT projects
              </span>
            </div>
            <div className="mb-2">
              <span className="about-head2-text">
                without having to research them
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Aboutus;
