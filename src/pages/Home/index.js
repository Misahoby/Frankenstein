import React from "react";
import Footer from "../../components/Footer";

import "./style.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="row mx-0 mt-5 d-flex align-items-center">
        <div className="col-md-6 text-center my-3">
          <img
            src="/images/head/head.svg"
            alt="head-left"
            className="head-img"
          />
        </div>
        <div className="col-md-6 my-3">
          <img
            src="/images/home/ghost.png"
            alt="ghost"
            className="ghost-img mb-4"
          />
          <p className="font-family-com fs-5">
            Our mission is to provide everyday crypto investors access to the
            best NFT projects without having to spend the time and intensive
            capital to do so.
          </p>
        </div>
      </div>
      <div className="row mx-0 mt-5 d-flex align-items-center">
        <div className="col-md-6 text-center my-3">
          <img
            src="/images/home/hands_loween.png"
            alt=""
            className="hands-img"
          />
        </div>
        <div className="col-md-6 my-3 d-flex justify-content-center">
          <div>
            <h1 className="my-4">10% Buy and Sell Tax</h1>
            <div className="d-flex align-items-center my-2">
              <img src="/images/home/head1.svg" alt="" />
              <p className="head-text mb-0 ms-2">
                Buy Tax = 10% distributed to the Treasury
              </p>
            </div>
            <div className="d-flex align-items-center my-2">
              <img src="/images/home/head2.svg" alt="" />
              <p className="head-text mb-0 ms-2">
                Sell Tax = 10% paid to FSTEIN Token Holders in FTM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <div className="hands-text">
          <div className="hands-text-style d-flex justify-content-center">
            <h1 className="hands-text-box">
              Our Treasury invests in blue-chip and up-and-coming NFTs across
              all sectors.
            </h1>
          </div>
          <div className="text-center mt-2">
            <p className="hands-text-p mb-0">
              - 60% of investments are voted by the community
            </p>
            <p className="hands-text-p mb-4">
              - 40% of investments are selected by our investment lead
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/home/hands_loween1.png"
              alt=""
              className="hands-text-img"
            />
          </div>
        </div>
      </div>
      <div className="row mx-0 mt-5 d-flex align-items-center">
        <div className="col-md-6 text-center">
          <h2 className="font-family-com my-3">
            FSTEIN token holders are continuously rewarded in FTM dividends.
          </h2>
        </div>
        <div className="col-md-6 text-center my-3">
          <img src="/images/home/group.png" alt="" className="hands-folder" />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
