import Bored from "../../Components/Board";
import TitleName from "../../Components/TitleName";
import Mathematician from "./Mathematician";
import AnimateWrapper from "../../Components/AnimateWrapper";
import MathematicianData from "./MathematiciansData.json";
import Styles from "./Mathematicians.module.css";

type JsonData = {
  Title: string;
  image: string;
  Description: string[];
  blockquote: string;
};

const Mathematicians = () => {
  const { Maths } = MathematicianData as unknown as {
    Maths: JsonData[];
  };

  return (
    <AnimateWrapper>
      <div className={Styles.BoredWidth}>
        {Maths.map((item) => (
          <>
            <Bored>
              <div className={Styles.BoredContainer}>
                <div className={Styles.Image}>
                  <img src={item.image} alt="rama" width={300} height={400} />
                </div>
                <div className={Styles.MathContent}>
                  <TitleName title="Tale of 1927" />
                  <Mathematician
                    title={item.Title}
                    Description={item.Description}
                    blockquote={item.blockquote}
                  />
                </div>
              </div>
            </Bored>
            <br />
            <br />
            <br />
          </>
        ))}
      </div>
    </AnimateWrapper>
  );
};

export default Mathematicians;
