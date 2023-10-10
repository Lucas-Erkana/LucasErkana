import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import closeModal from "../images/close.svg";

const FeedbackCard = ({
  id,
  name,
  github,
  title,
  company_name,
  image,
  description,
  bgcolor,
  textcolor,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  Modal.setAppElement("#root");

  return (
    <motion.div
      className="feedbackCard"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: id * 0.1 }}
    >
      <div className="feedbackCardInner">
        {/* <div className="imageContainers">
          <img src={image} alt="Laptop displaying the application" />
        </div> */}
        <div className="contentContainer" style={{ backgroundColor: bgcolor }}>
          <div className="bubble" style={{ color: textcolor }}>
            <h3 className="name">{name}</h3>
            <p className="github">
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </p>
            <h4 className="title">{title}</h4>
            <p className="company">
              <span class="companyTitle">Works at: </span>
              {company_name}
            </p>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            backgroundColor: "#101010",
            color: "#9f9f9f",
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            width: "400px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: "999",
          },
        }}
      >
        <img
          src={closeModal}
          className="closeMenu closeModal"
          onClick={handleCloseModal}
          alt="Close"
        ></img>
        <h3 className="modalTitle">{title}</h3>
        <p className="projectDescription">{description}</p>
        <a
          href={github}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile
        </a>
      </Modal>
    </motion.div>
  );
};

export default FeedbackCard;
