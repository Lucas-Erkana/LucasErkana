import React, { useState, useEffect } from "react";
import aboutMeImg from "../images/portfolio3.webp";
import aboutMeImgMobile from "../images/portfolio3.png";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";

const AboutMe = ({ name, email, location, availability, brand, CTA }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);
  const [showH5, setShowH5] = useState(false);
  const [showP, setShowP] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1XTAwnk3XhgQQwkOIGOnGwdw87Deq6eTj/view?usp=sharing";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    window.open(link.href);
  };

  const handleTitleClick = (index) => {
    if (index === 1) {
      setShowH5(true);
      setTimeout(() => {
        setShowH5(false);
      }, 4000);
    } else if (index === 2) {
      setShowP(true);
      setTimeout(() => {
        setShowP(false);
      }, 4000);
    }
  };

  return (
    <div className="aboutContainer container">
      <div className="row">
        <motion.div
          className="personalImage col-12 col-lg-4"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img className="photo" src={aboutMeImg} alt={name} />
          <img className="photoMobile" src={aboutMeImgMobile} alt={name} />
        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h4 className="titleclick1" onClick={() => handleTitleClick(1)}>
              Hello there! Nice to meet you
            </h4>
            <h5 className={`visible1 ${showH5 ? "active" : ""}`}>
              I'm a Full-stack Web Developer with a passion for creating
              exceptional digital products!
            </h5>
            <div className="contentDescription">
              <span
                className="fun-fact titleclick2"
                onClick={() => handleTitleClick(2)}
              >
                Here is a fun fact about me:
              </span>{" "}
              <p className={`visible2 ${showP ? "active" : ""}`}>{brand}</p>
              <p className={`visible2 ${showP ? "active" : ""}`}>
                I love to create amazing web experiences for users!
              </p>
              <p className={`visible2 ${showP ? "active" : ""}`}>{CTA}</p>
            </div>
            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Name:</span>
                  <p>{name}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Location:</span>
                  <p>{location}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Availability:</span>
                  <p>{availability}</p>
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn downloadCV"
                onClick={handleDownload}
                disabled={downloading}
              >
                {downloading ? "Downloading..." : "Resume"}
              </motion.button>{" "}
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
