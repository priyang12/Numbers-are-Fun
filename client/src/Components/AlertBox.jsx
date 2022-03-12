import Styles from "./Styles/AlertBox.module.css";

export const AlertBox = ({ alertMessage, display }) => {
  return (
    <div className={`${Styles.Container} ${display ? Styles.show : null}`}>
      <div className={Styles.Message}>{alertMessage}</div>
    </div>
  );
};
