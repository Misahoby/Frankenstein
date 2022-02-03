import React from "react";
import Footer from "../../components/Footer";

import "./style.css";

const Greenpaper = () => {
  return (
    <React.Fragment>
      <div>
        <div>
          <img
            src="/images/greenpaper/Cover.png"
            alt="cover"
            className="paper-img"
          />
        </div>
        <div>
          <img
            src="/images/greenpaper/Missions.png"
            alt="mission"
            className="my-2 paper-img"
          />
        </div>
        <div>
          <img
            src="/images/greenpaper/Tokenomics.png"
            alt="Tokenomics"
            className="my-2 paper-img"
          />
        </div>
        <div>
          <img
            src="/images/greenpaper/investing.png"
            alt="Tokenomics"
            className="my-2 paper-img"
          />
        </div>
        <div>
          <img
            src="/images/greenpaper/Dividends.png"
            alt="Tokenomics"
            className="my-2 paper-img"
          />
        </div>
        <div>
          <img
            src="/images/greenpaper/Team.png"
            alt="Tokenomics"
            className="my-2 paper-img"
          />
        </div>
        <div>
          <img
            src="/images/greenpaper/Roadmap.png"
            alt="Tokenomics"
            className="my-2 paper-img"
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Greenpaper;
