import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Feedback from "../pages/feedback/Feedback"; // Import the Feedback component
import Contact from "../pages/contact/Contact";
import Tech from "../pages/tech/Tech";

const AnimatedRoutes = ({ personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing name={personalDetails.name} tagline={personalDetails.tagline} />} />
      <Route
        path="/about"
        element={
          <About
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
            availability={personalDetails.availability}
            brand={personalDetails.brand}
            CTA={personalDetails.CTA}
          />
        }
      />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/feedback" element={<Feedback />} /> {/* Add the Feedback route */}
      <Route
        path="/contact"
        element={
          <Contact name={personalDetails.name} location={personalDetails.location} email={personalDetails.email} />
        }
      />
      <Route
        path="/tech"
        element={
          <Tech />
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
