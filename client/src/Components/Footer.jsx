import GithubIcon from "../assets/github-brands.svg";
import LinkdinIcon from "../assets/linkedin-brands.svg";
import TwitterIcon from "../assets/twitter-brands.svg";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <ul>
          <li className='p-3 m-2'>
            <a href='https://github.com/priyang12'>
              <img src={GithubIcon} alt='GithubIcon' />
            </a>
          </li>
          <li className='p-3 m-2'>
            <a href='https://twitter.com/Priyang_Bawa'>
              <img src={TwitterIcon} alt='TwitterIcon' />
            </a>
          </li>
          <li className='p-3 m-2'>
            <a href='https://www.linkedin.com/in/priyang-patel-948685176/'>
              <img src={LinkdinIcon} alt='LinkdinIcon' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
