import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { FiCodesandbox } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import subashpic from "../assets/subashpic.png";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-info">
      <div className="profile-details">
        <h1>Hey ! I'm</h1>
        <h1 className="profile-name">Subash B S</h1>
        <h2>ReactJS Developer</h2>
        <div>
          <a
            href="https://github.com/subash1201"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://codesandbox.io/u/subash1201/"
            target="_blank"
            rel="noreferrer"
          >
            <FiCodesandbox />
          </a>
          <a
            href="https://www.linkedin.com/in/subash-saravanan-86300b1a1/"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=subash3sj12@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdEmail />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/11UQvlumK_QiKmgz6cfYB2ptizCuzt4BY/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          download="Subash_Resume.pdf"
        >
          <button>Get Resume</button>
        </a>
      </div>
      <img className="profile-image" src={subashpic} alt="Subash B S" />
    </div>
  );
};

export default Profile;
