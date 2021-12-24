import GithubIcon from "../assets/github-brands.svg";
import LinkdinIcon from "../assets/linkedin-brands.svg";
import TwitterIcon from "../assets/twitter-brands.svg";
import "../Styles/Footer.css";
const Footer = ({ links }) => {
  return (
    <footer>
      <div className='footer-container'>
        <p className='copyright'>
          © Copyright 2021 Made by Priyang Patel With love ❤️ for Math.
        </p>
        <ul>
          <li className='p-3 m-2'>
            <a href={links.github}>
              <img src={GithubIcon} alt='GithubIcon' />
            </a>
          </li>
          <li className='p-3 m-2'>
            <a href={links.twitter}>
              <img src={TwitterIcon} alt='TwitterIcon' />
            </a>
          </li>
          <li className='p-3 m-2'>
            <a href={links.linkdin}>
              <img src={LinkdinIcon} alt='LinkdinIcon' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
