import Style from "./Styles/Header.module.css";

const Header = ({ Title }) => {
  return <header className={Style.Header}>{Title}</header>;
};

export default Header;
