import Style from "./Styles/TitleName.module.css";

const TitleName = ({ title }) => {
  return (
    <div id='header' className='container rounded'>
      <h1 className={Style.Title}>{title}</h1>
    </div>
  );
};
export default TitleName;
