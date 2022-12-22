import Bored from "../../Components/Board";
import TitleName from "../../Components/TitleName";
import Mathematician from "./Mathematician";
import ramaImg from "../../assets/Ramanujan.jpeg";
import MathematicianData from "../../Data/Math.json";
import AnimateWrapper from "../../Components/AnimateWrapper";

const Mathematicians = () => {
  const { Title, Description, blockquote } = MathematicianData;
  return (
    <AnimateWrapper>
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
    </AnimateWrapper>
  );
};

export default Mathematicians;
