const Header = ({ Title }: { Title: string }) => {
  return (
    <header
      style={{
        fontSize: "5rem",
        textAlign: "center",
        paddingTop: "0.5em",
        textOverflow: "ellipsis",
        overflow: "hidden",
      }}
    >
      {Title}
    </header>
  );
};

export default Header;
