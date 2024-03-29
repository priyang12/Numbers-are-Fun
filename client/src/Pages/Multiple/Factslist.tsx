import Board from "../../Components/Board";
import Style from "./List.module.css";
import TitleName from "../../Components/TitleName";

const FactsList = ({ Facts }: { Facts: string[] }) => {
  if (!Facts)
    return (
      <div className="mt-5">
        <Board type="secondary">
          <TitleName title="Empty List" />
        </Board>
      </div>
    );

  return (
    <div className="mt-5">
      <Board type="secondary">
        <ul className={Style.list} data-testid="ListItems">
          {Facts.length > 0 &&
            Facts.map((item, index) => (
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
