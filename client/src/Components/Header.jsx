const Style = {
  fontSize: "5rem",
  textAlign: "center",
  paddingTop: "0.5em",
  textOverflow: "ellipsis",
  overflow: "hidden",
};

const Header = ({ Title }) => {
  return <header style={Style}>{Title}</header>;
};

export default Header;
