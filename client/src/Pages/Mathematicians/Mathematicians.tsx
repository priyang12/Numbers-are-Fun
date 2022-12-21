import Bored from "../../Components/Board";
import TitleName from "../../Components/TitleName";
import Mathematician from "./Mathematician";
import ramaImg from "../../assets/Ramanujan.jpeg";
import MathematicianData from "../../Data/Math.json";

const Mathematicians = () => {
  const { Title, Description, blockquote } = MathematicianData;
  return (
    <div className=" d-flex flex-column flex-md-row justify-content-centers container">
      <div className="order-2">
        <Bored type="secondary">
          <img src={ramaImg} alt="rama" />
        </Bored>
      </div>
      <div className="order-1">
        <Bored>
          <TitleName title="Tale of 1927" />
          <Mathematician
            title={Title}
            Description={Description}
            blockquote={blockquote}
          />
        </Bored>
      </div>
    </div>
  );
};

export default Mathematicians;
