import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./pages/landing/landing.css";
import "./pages/about/about.css";
import "./pages/portfolio/portfolio.css";
import "./pages/contact/contact.css";
import "./pages/feedback/feedback.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const ScrollToTop = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <App />
      {showScrollToTop && (
        <button
          className="scrollToTopBtn"
          title="Scroll to Top"
          onClick={scrollToTop}
          style={{ right: "30px", bottom: "30px", transform: "scale(1.2)" }}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
