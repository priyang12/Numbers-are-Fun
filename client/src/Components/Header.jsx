const Style = {
  fontSize: "5rem",
  textAlign: "center",
  paddingTop: "1em",
};

const Header = ({ Title }) => {
  return <header style={Style}>{Title}</header>;
};

export default Header;
