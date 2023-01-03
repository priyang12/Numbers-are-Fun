import GithubIcon from "../assets/github-brands.svg";
import LinkedinIcon from "../assets/linkedin-brands.svg";
import TwitterIcon from "../assets/twitter-brands.svg";
import Style from "./Styles/Footer.module.css";
import Wave from "react-wavify";
import { useIsMobile } from "../Hooks/useIsMobile";

const links = {
  linkedin: "https://www.linkedin.com/in/priyang-patel-948685176",
  github: "https://github.com/priyang12",
  twitter: "https://twitter.com/Priyang_Bawa",
};

function Waves({}) {
  const { isMobile } = useIsMobile();
  const WaveOptions1 = isMobile
    ? { height: 55, amplitude: 20, speed: 0.5, points: 5 }
    : {
        height: 10,
        amplitude: 40,
        speed: 0.5,
        points: 2,
      };

  const WaveOption2 = isMobile
    ? {
        height: 70,
        amplitude: 60,
        speed: 0.2,
        points: 2,
      }
    : {
        height: 30,
        amplitude: 60,
        speed: 0.5,
        points: 3,
      };

  return (
    <>
      <Wave
        style={{
          zIndex: "-1",
          position: "absolute",
          bottom: "-10px",
          left: 0,
        }}
        fill="#e6c290"
        paused={false}
        options={WaveOptions1}
      />
      <Wave
        style={{
          zIndex: "-1",
          position: "absolute",
          bottom: "-10px",
          left: 0,
        }}
        fill="#cf8824"
        paused={false}
        options={WaveOption2}
      />
    </>
  );
}

const Footer = () => {
  return (
    <footer>
      <div className={Style.footerContainer}>
        <Waves />
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
        <p className={Style.copyright}>
          © Copyright 2021 Made by Priyang Patel With love ❤️ for Math.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
