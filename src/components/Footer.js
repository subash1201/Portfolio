import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { FiCodesandbox } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3>Get in touch</h3>
      <a href="https://github.com/subash1201" target="_new">
        <BsGithub />
      </a>
      <a href="https://codesandbox.io/u/subash1201/" target="_new">
        <FiCodesandbox />
      </a>
      <a
        href="https://www.linkedin.com/in/subash-saravanan-86300b1a1/"
        target="_new"
      >
        <GrLinkedin />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=subash3sj12@gmail.com"
        target="_new"
      >
        <MdEmail />
      </a>
    </div>
  );
};

export default Footer;
