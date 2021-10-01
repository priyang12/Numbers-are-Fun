import GithubIcon from '../assets/github-brands.svg';
import LinkdinIcon from '../assets/linkedin-brands.svg';
import TwitterIcon from '../assets/twitter-brands.svg';

const Footer = () => {
  return (
    <footer>
      <svg
        id='wave'
        style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
        viewBox='0 0 1440 150'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'>
            <stop
              stopColor='rgba(159.802, 127.358, 22.16, 1)'
              offset='0%'
            ></stop>
            <stop
              stopColor='rgba(255, 207.215, 101.586, 1)'
              offset='100%'
            ></stop>
          </linearGradient>
        </defs>
        <path
          style={{
            transform: 'rotate(0deg)',
            transition: '0.3s',
            opacity: '0.5',
          }}
          fill='url(#sw-gradient-0)'
          d='M0,135L10,117.5C20,100,40,65,60,52.5C80,40,100,50,120,65C140,80,160,100,180,97.5C200,95,220,70,240,70C260,70,280,95,300,95C320,95,340,70,360,60C380,50,400,55,420,50C440,45,460,30,480,25C500,20,520,25,540,42.5C560,60,580,90,600,85C620,80,640,40,660,27.5C680,15,700,30,720,42.5C740,55,760,65,780,70C800,75,820,75,840,67.5C860,60,880,45,900,40C920,35,940,40,960,47.5C980,55,1000,65,1020,65C1040,65,1060,55,1080,52.5C1100,50,1120,55,1140,62.5C1160,70,1180,80,1200,85C1220,90,1240,90,1260,75C1280,60,1300,30,1320,25C1340,20,1360,40,1380,57.5C1400,75,1420,90,1430,97.5L1440,105L1440,150L1430,150C1420,150,1400,150,1380,150C1360,150,1340,150,1320,150C1300,150,1280,150,1260,150C1240,150,1220,150,1200,150C1180,150,1160,150,1140,150C1120,150,1100,150,1080,150C1060,150,1040,150,1020,150C1000,150,980,150,960,150C940,150,920,150,900,150C880,150,860,150,840,150C820,150,800,150,780,150C760,150,740,150,720,150C700,150,680,150,660,150C640,150,620,150,600,150C580,150,560,150,540,150C520,150,500,150,480,150C460,150,440,150,420,150C400,150,380,150,360,150C340,150,320,150,300,150C280,150,260,150,240,150C220,150,200,150,180,150C160,150,140,150,120,150C100,150,80,150,60,150C40,150,20,150,10,150L0,150Z'
        ></path>
      </svg>
      <div className='footer-container'>
        <ul>
          <li className='p-3 m-2'>
            <a href='https://github.com/priyang12'>
              <img src={GithubIcon} alt='GithubIcon' />
            </a>
          </li>
          <li className='p-3 m-2'>
            <a href='google.com'>
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
