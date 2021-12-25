import { useEffect, useState } from "react";
import Board from "../utils/Board";
import "../Styles/List.css";

const Factslist = ({ Facts }) => {
  const [ArrayFacts, setArrayFacts] = useState([]);
  useEffect(() => {
    for (const i in Facts) {
      setArrayFacts((pre) => pre.concat(Facts[i]));
    }
  }, [Facts]);
  if (!Facts) return;
  return (
    <div className='mt-5'>
      <Board type='secondary'>
        <ul className='list' data-testid='ListItems'>
          {ArrayFacts.length > 0 &&
            ArrayFacts.map((item, index) => (
              <li className='list-item' key={index}>
                {item}
              </li>
            ))}
        </ul>
      </Board>
    </div>
  );
};

export default Factslist;
