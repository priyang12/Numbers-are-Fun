import Style from "./Styles/Navigator.module.css";
import { Link, useLocation } from "react-router-dom";
import Board from "./Board";

const Links = () => {
  const Path = useLocation().pathname;
  return (
    <nav className={Style.navigator}>
      <ul className={Style.list}>
        {Path !== "/" && (
          <div className={Style.Board}>
            <Board type={Path === "/Random" ? "secondary" : "primary"}>
              <li className={Style.item}>
                <Link to="/">Single Numbers</Link>
              </li>
            </Board>
          </div>
        )}
        {Path !== "/Random" && (
          <div className={Style.Board}>
            <Board type="secondary">
              <li className={Style.item}>
                <Link to="Random">Random Numnbers</Link>
              </li>
            </Board>
          </div>
        )}
        {Path !== "/Multiple" && (
          <div className={Style.Board}>
            <Board type="primary">
              <li className={Style.item}>
                <Link to="Multiple">Multiple Numbers</Link>
              </li>
            </Board>
          </div>
        )}
        {Path !== "/Math" && (
          <div className={Style.Board}>
            <Board type={Path === "/Multiple" ? "primary" : "secondary"}>
              <li className={Style.item}>
                <Link to="Math">Mathematicians Tale</Link>
              </li>
            </Board>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Links;
