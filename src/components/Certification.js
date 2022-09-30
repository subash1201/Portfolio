import React from "../assets/React.jpg";
import Webdev from "../assets/Webdev.jpg";
import "./Certification.css";
const Ceritification = () => {
  return (
    <div className="certification-container">
      <h1>Certifications</h1>
      <div className="certification">
        <a
          className="react-certi"
          href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-7054758f-e463-4f65-8e15-9c9934a80438.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <img src={React} alt="React certificate" />
        </a>
        <a
          className="webdev-certi"
          href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-1ae13ab0-0cb3-4f5a-9aad-6fa84bd58c1e.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Webdev} alt="Web development certificate" />
        </a>
      </div>
    </div>
  );
};

export default Ceritification;
