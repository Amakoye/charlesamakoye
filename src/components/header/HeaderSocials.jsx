import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/charles-amakoye/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Amakoye" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/charlesamakoye"
        target="_blank"
        rel="noreferrer"
      >
        <FiTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials;
