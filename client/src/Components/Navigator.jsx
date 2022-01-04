import { Link, useLocation } from "react-router-dom";
import Board from "./Board";

const Links = () => {
  const Path = useLocation().pathname;
  return (
    <nav className='mx-auto navigator '>
      <ul className='d-flex flex-column flex-md-row align-items-center justify-content-around p-4 text-center'>
        {Path !== "/" && (
          <Board type='primary'>
            <li className='list-group-item mx-3 h1 bg-transparent '>
              <Link to='/' className='text-light'>
                Single Numbers
              </Link>
            </li>
          </Board>
        )}
        {Path !== "/Random" && (
          <Board type='secondary'>
            <li className='list-group-item mx-3 h1 bg-transparent '>
              <Link to='Random' className='text-light'>
                Random Numnbers
              </Link>
            </li>
          </Board>
        )}
        {Path !== "/Multiple" && (
          <Board type='primary'>
            <li className='list-group-item mx-3 h1 bg-transparent'>
              <Link to='Multiple' className='text-light'>
                Multiple Numbers
              </Link>
            </li>
          </Board>
        )}
        {Path !== "/Math" && (
          <Board type='secondary'>
            <li className='list-group-item  h1 bg-transparent'>
              <Link to='Math' className='text-light'>
                Mathematicians Tale
              </Link>
            </li>
          </Board>
        )}
      </ul>
    </nav>
  );
};

export default Links;
