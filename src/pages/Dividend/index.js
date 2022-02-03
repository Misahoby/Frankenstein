import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/Chart";
import Dough from "../../components/Dough";

import "./style.css";

const Dividend = () => {
  return (
    <React.Fragment>
      <div className="d-flex">
        <div className="dividend-left">
          <div>
            <Link to="/treasury" className="none-decort">
              <div className="d-flex align-items-center dividend-left-title">
                <div>
                  <img src="/images/treasury/Icon.png" alt="Icon" />
                </div>
                <div className="mx-2">
                  <p className="my-0">Treasury Dashboard</p>
                </div>
              </div>
            </Link>

            <Link to="#" className="none-decort">
              <div className="my-4 d-flex align-items-center dividend-left-title">
                <div>
                  <img src="/images/treasury/Icon1.png" alt="Icon" />
                </div>
                <div className="mx-2">
                  <p className="my-0">Dividend Dashboard</p>
                </div>
              </div>
            </Link>
            <p className="mt-5 test-start dividend-token-title">
              Latest trends
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="/images/treasury/bitcoin.png" alt="bitcoin" />
                <p className="my-0 mx-2 d-flex  dividend-token-text">
                  Bitcoin <p className="mx-2 my-0 dividend-part">BTC</p>
                </p>
              </div>
              <div>
                <p className="my-0 dividend-token-price">$000.00</p>
              </div>
            </div>

            <div className="my-4 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="/images/treasury/ethereum.png" alt="bitcoin" />
                <p className="my-0 mx-2 d-flex  dividend-token-text">
                  Ethereum<p className="mx-2 my-0 dividend-part">ETH</p>
                </p>
              </div>
              <div>
                <p className="my-0 dividend-token-price">$000.00</p>
              </div>
            </div>

            <div className="my-4 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="/images/treasury/fantom.png" alt="bitcoin" />
                <p className="my-0 mx-2 d-flex  dividend-token-text">
                  Fantom<p className="mx-2 my-0 dividend-part">FTM</p>
                </p>
              </div>
              <div>
                <p className="my-0 dividend-token-price">$000.00</p>
              </div>
            </div>

            <div className="my-4 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="/images/treasury/avalanche.png" alt="bitcoin" />
                <p className="my-0 mx-2 d-flex  dividend-token-text">
                  Avalanche<p className="mx-2 my-0 dividend-part">AVAX</p>
                </p>
              </div>
              <div>
                <p className="my-0 dividend-token-price">$000.00</p>
              </div>
            </div>

            <div className="my-4 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="/images/treasury/solana.png" alt="bitcoin" />
                <p className="my-0 mx-2 d-flex  dividend-token-text">
                  Solana<p className="mx-2 my-0 dividend-part">SOL</p>
                </p>
              </div>
              <div>
                <p className="my-0 dividend-token-price">$000.00</p>
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
        <div className="dividend-right">
          <div className="d-flex align-items-center">
            <h1 className="dividend-title">Dividend Dashboard</h1>
            <div className="mx-3 dividend-select">
              <select name="" id="">
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="Auguest">Auguest</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
          </div>
          <div className="mx-3 my-3 chart-show">
            <Chart />
          </div>
          <div className="mx-3 row d-flex">
            <div className="col dividend-bottom-group">
              <img
                src="/images/dividend/Icon1.png"
                alt="Icon1"
                className="mx-2 my-3"
              />
              <p className="title-style">Your FSTEIN Balance</p>
              <p className="text-style">$00,000</p>
              <img
                src="/images/dividend/Chart1.png"
                alt="Chart1"
                className="my-3 img-width"
              />
            </div>
            <div className="col mx-2 dividend-bottom-group">
              <img
                src="/images/dividend/Icon2.png"
                alt="Icon1"
                className="mx-2 my-3"
              />
              <p className="title-style">Total FTM Distributed to Date</p>
              <p className="text-style">$00,000</p>
              <img
                src="/images/dividend/Chart2.png"
                alt="Chart1"
                className="my-4 img-width"
              />
            </div>
            <div className="col dividend-bottom-group">
              <img
                src="/images/dividend/Icon3.png"
                alt="Icon1"
                className="mx-2 my-3"
              />
              <p className="title-style">Your Pending Rewards</p>
              <p className="text-style">$00,000</p>
              <img
                src="/images/dividend/Frame.png"
                alt="Chart1"
                className="my-4 img-width"
              />
            </div>
            <div className="col mx-2 dividend-bottom-group">
              <img
                src="/images/dividend/Icon4.png"
                alt="Icon1"
                className="mx-2 my-3"
              />
              <p className="title-style">Your FTM Distributed To Date</p>
              <p className="my-0 text-style">$00,000</p>
              <Dough />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dividend;
