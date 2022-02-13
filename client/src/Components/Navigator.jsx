import Style from "./Styles/Navigator.module.css";
import { Link, useLocation } from "react-router-dom";
import Board from "./Board";

const Links = () => {
  const Path = useLocation().pathname;
  return (
    <nav className={Style.navigator}>
      <ul className={Style.list}>
        {Path !== "/" && (
          <Board type='primary'>
            <li className={Style.item}>
              <Link to='/'>Single Numbers</Link>
            </li>
          </Board>
        )}
        {Path !== "/Random" && (
          <Board type='secondary'>
            <li className={Style.item}>
              <Link to='Random'>Random Numnbers</Link>
            </li>
          </Board>
        )}
        {Path !== "/Multiple" && (
          <Board type='primary'>
            <li className={Style.item}>
              <Link to='Multiple'>Multiple Numbers</Link>
            </li>
          </Board>
        )}
        {Path !== "/Math" && (
          <Board type='secondary'>
            <li className={Style.item}>
              <Link to='Math'>Mathematicians Tale</Link>
            </li>
          </Board>
        )}
      </ul>
    </nav>
  );
};

export default Links;
