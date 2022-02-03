import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Treasury = () => {
  return (
    <React.Fragment>
      <div className="d-flex">
        <div className="treasury-left">
          <div>
            <Link to="#" className="none-decort">
              <div className="d-flex align-items-center treasury-left-title">
                <div>
                  <img src="/images/treasury/Icon.png" alt="Icon" />
                </div>
                <div className="mx-2">
                  <p className="my-0">Treasury Dashboard</p>
                </div>
              </div>
            </Link>

            <Link to="/dividend" className="none-decort">
              <div className="my-4 d-flex align-items-center treasury-left-title">
                <div>
                  <img src="/images/treasury/Icon1.png" alt="Icon" />
                </div>
                <div className="mx-2">
                  <p className="my-0">Dividend Dashboard</p>
                </div>
              </div>
            </Link>
            <p className="mt-5 test-start treasury-token-title">
              Latest trends
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="/images/treasury/bitcoin.png" alt="bitcoin" />
                <p className="my-0 mx-2 d-flex  treasury-token-text">
                  Bitcoin <p className="mx-2 my-0 treasury-part">BTC</p>
                </p>
              </div>
              <div>
                <p className="my-0 treasury-token-price">$000.00</p>
              </div>
            </div>

            <div className="my-4 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="/images/treasury/ethereum.png" alt="bitcoin" />
                <p className="my-0 mx-2 d-flex  treasury-token-text">
                  Ethereum<p className="mx-2 my-0 treasury-part">ETH</p>
                </p>
              </div>
              <div>
                <p className="my-0 treasury-token-price">$000.00</p>
              </div>
            </div>

            <div className="my-4 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="/images/treasury/fantom.png" alt="bitcoin" />
                <p className="my-0 mx-2 d-flex  treasury-token-text">
                  Fantom<p className="mx-2 my-0 treasury-part">FTM</p>
                </p>
              </div>
              <div>
                <p className="my-0 treasury-token-price">$000.00</p>
              </div>
            </div>

            <div className="my-4 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="/images/treasury/avalanche.png" alt="bitcoin" />
                <p className="my-0 mx-2 d-flex  treasury-token-text">
                  Avalanche<p className="mx-2 my-0 treasury-part">AVAX</p>
                </p>
              </div>
              <div>
                <p className="my-0 treasury-token-price">$000.00</p>
              </div>
            </div>

            <div className="my-4 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="/images/treasury/solana.png" alt="bitcoin" />
                <p className="my-0 mx-2 d-flex  treasury-token-text">
                  Solana<p className="mx-2 my-0 treasury-part">SOL</p>
                </p>
              </div>
              <div>
                <p className="my-0 treasury-token-price">$000.00</p>
              </div>
            </div>
          </div>

          <div className="row d-flex">
            <div className="col">
              <img src="/images/treasury/github.png" alt="github" />
            </div>
            <div className="col">
              <img src="/images/treasury/twitter.png" alt="twitter" />
            </div>
            <div className="col">
              <img src="/images/treasury/telegram.png" alt="telegram" />
            </div>
            <div className="col">
              <img src="/images/treasury/discord.png" alt="discord" />
            </div>
          </div>
        </div>
        <div className="row d-flex treasury-right">
          <div className="col-md-6 treasury-middle-content text-center">
            <div className="treasury-middle-title">
              <h1>Treasury Dashboard</h1>
            </div>
            <img
              src="/images/treasury/boiler.png"
              alt="boiler"
              className="my-5 boiler-img"
            />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 treasury-right-part">
                <img
                  src="/images/treasury/right-Icon1.png"
                  alt="right-Icon1"
                  className="mt-3 mb-4 ms-3"
                />
                <p className="ms-3 right-part-title">FSTEIN Price</p>
                <p className="ms-3 right-part-price">$00,000</p>
                <div className="my-5 ms-3 d-flex align-items-center">
                  <small className="right-percentage">+0.0%</small>
                  <img
                    src="/images/treasury/Dot.png"
                    alt="Dot"
                    className="mx-2 dot-image"
                  />
                  <small className="right-percentage-price">$00,00</small>
                </div>
              </div>

              <div className="ms-3 col-md-6 treasury-right-part">
                <img
                  src="/images/treasury/right-Icon2.png"
                  alt="right-Icon2"
                  className="mt-3 mb-4 ms-3"
                />
                <p className="ms-3 right-part-title">Market Cap</p>
                <p className="ms-3 right-part-price">$00,000</p>
                <div className="my-5 ms-3 d-flex align-items-center">
                  <small className="right-percentage">+0.0%</small>
                  <img
                    src="/images/treasury/Dot.png"
                    alt="Dot"
                    className="mx-2 dot-image"
                  />
                  <small className="right-percentage-price">$00,00</small>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 my-3 treasury-right-part1">
                <img
                  src="/images/treasury/right-Icon3.png"
                  alt="right-Icon1"
                  className="mt-3 mb-4 ms-3"
                />
                <p className="ms-3 right-part-title">Treasury Balance</p>
                <p className="ms-3 right-part-price">$00,000</p>
                <div className="my-5 ms-3 d-flex align-items-center">
                  <small className="right-percentage">+0.0%</small>
                  <img
                    src="/images/treasury/Dot.png"
                    alt="Dot"
                    className="mx-2 dot-image"
                  />
                  <small className="right-percentage-price">$00,00</small>
                </div>
              </div>

              <div className="ms-3 my-3 col-md-6 treasury-right-part1">
                <img
                  src="/images/treasury/right-Icon4.png"
                  alt="right-Icon2"
                  className="mt-3 mb-4 ms-3"
                />
                <p className="ms-3 right-part-title">Backing per FSTEIN</p>
                <p className="ms-3 right-part-price">$00,000</p>
                <div className="my-5 ms-3 d-flex align-items-center">
                  <small className="right-percentage">+0.0%</small>
                  <img
                    src="/images/treasury/Dot.png"
                    alt="Dot"
                    className="mx-2 dot-image"
                  />
                  <small className="right-percentage-price">$00,00</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Treasury;
