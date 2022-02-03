import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Treasury from "./pages/Treasury";
import Dividend from "./pages/Dividend";
import Roadmap from "./pages/Roadmap";
import Faq from "./pages/Faq";
import Aboutus from "./pages/Aboutus";
import Greenpaper from "./pages/Greenpaper";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <div className="App">
        <Container>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/treasury" component={Treasury} />
            <Route path="/dividend" component={Dividend} />
            <Route path="/roadmap" component={Roadmap} />
            <Route path="/faq" component={Faq} />
            <Route path="/aboutus" component={Aboutus} />
          </Switch>
          {showButton && (
            <div onClick={scrollToTop} className="back-to-top">
              <BsFillArrowUpCircleFill className="cl-green" />
            </div>
          )}
        </Container>
        <Route path="/greenpaper" component={Greenpaper} />
      </div>
    </Router>
  );
};

export default App;
