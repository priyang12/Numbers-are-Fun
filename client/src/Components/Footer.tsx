import GithubIcon from "../assets/github-brands.svg";
import LinkedinIcon from "../assets/linkedin-brands.svg";
import TwitterIcon from "../assets/twitter-brands.svg";
import Style from "./Styles/Footer.module.css";

const links = {
  linkedin: "https://www.linkedin.com/in/priyang-patel-948685176",
  github: "https://github.com/priyang12",
  twitter: "https://twitter.com/Priyang_Bawa",
};

const Footer = () => {
  return (
    <footer>
      <div className={Style.footerContainer}>
        <p className={Style.copyright}>
          © Copyright 2021 Made by Priyang Patel With love ❤️ for Math.
        </p>
        <ul className={Style.List}>
          <li className={Style.ListItem}>
            <a href={links.github}>
              <img src={GithubIcon} alt="GithubIcon" />
            </a>
          </li>
          <li className={Style.ListItem}>
            <a href={links.twitter}>
              <img src={TwitterIcon} alt="TwitterIcon" />
            </a>
          </li>
          <li className={Style.ListItem}>
            <a href={links.linkedin}>
              <img src={LinkedinIcon} alt="LinkedinIcon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
