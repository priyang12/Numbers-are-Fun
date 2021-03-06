import { useEffect, useState } from "react";
import Board from "./Board";
import Style from "./Styles/List.module.css";
import TitleName from "./TitleName";

const FactsList = ({ Facts }) => {
  const [ArrayFacts, setArrayFacts] = useState([]);
  useEffect(() => {
    for (const i in Facts) {
      setArrayFacts((pre) => pre.concat(Facts[i]));
    }
  }, [Facts]);

  if (!Facts)
    return (
      <div className='mt-5'>
        <Board type='secondary'>
          <TitleName title='Empty List' />
        </Board>
      </div>
    );

  return (
    <div className='mt-5'>
      <Board type='secondary'>
        <ul className={Style.list} data-testid='ListItems'>
          {ArrayFacts.length > 0 &&
            ArrayFacts.map((item, index) => (
              <li className={Style.listItem} key={index}>
                {item}
              </li>
            ))}
        </ul>
      </Board>
    </div>
  );
};

export default FactsList;
