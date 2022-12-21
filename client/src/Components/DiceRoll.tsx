import DiceGif from "../assets/diceGif.gif";

const style = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Dice = () => {
  return (
    <div style={style}>
      <img src={DiceGif} alt="Loading" />
    </div>
  );
};
export default Dice;
