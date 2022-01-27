import React from "react";
import Footer from "../../components/Footer";

import "./style.css";

const Roadmap = () => {
  return (
    <React.Fragment>
      <div className="mt-5">
        <div className="d-flex justify-content-center book-angel-img">
          <div>
            <div className="text-center">
              <img
                src="/images/roadmap/cta.png"
                alt="cta"
                className="cta-img"
              />
            </div>
            <div className="text-start cta-text-group">
              <li>
                Project <span className="cta-text">development & testing</span>
              </li>
              <li>
                <span className="cta-text">Social media</span> creation
              </li>
              <li>
                Website (v1) go-live &
                <span className="cta-text">token launch</span>
              </li>
              <li>
                Contract <span className="cta-text">audit</span>
              </li>
              <li>
                Community <span className="cta-text">vote</span> – continuous
              </li>
              <li>
                Community <span className="cta-text"></span>growth
              </li>
              <li>
                <span className="cta-text">CoinGecko</span> and
                <span className="cta-text"> CoinMarketCap </span>
                Listing
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-center book-img">
        <div>
          <div className="text-center">
            <img
              src="/images/roadmap/cta2.png"
              alt="cta2"
              className="cta2-img"
            />
          </div>
          <div className="text-start cta-text-group">
            <li>
              Partner with artists for{" "}
              <span className="cta-text">NFT collection</span> – continuous
            </li>
            <li>
              <span className="cta-text">Community events</span> & meet-ups –
              continuous
            </li>
            <li>Website (v2) go-live</li>
            <li>
              Community <span className="cta-text">charity event</span>
            </li>
            <li>
              Exclusive <span className="cta-text">airdrops/</span> for holders
            </li>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Roadmap;
