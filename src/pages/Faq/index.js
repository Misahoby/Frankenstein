import React from "react";
import Footer from "../../components/Footer";
import CollapseItem from "../../components/CollapseItem";

import "./style.css";

const Faq = () => {
  return (
    <React.Fragment>
      <div className="mt-5 d-flex justify-content-center">
        <div className="faq-content">
          <div className="text-center">
            <img src="/images/faq/ghost-angle.png" alt="ghost-angle" />
          </div>
          <div className="text-center">
            <h1 className="mt-5 angle-text">Frequently asked questions</h1>
          </div>
          <CollapseItem />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Faq;
