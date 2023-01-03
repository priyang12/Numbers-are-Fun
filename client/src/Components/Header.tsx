const Header = ({ Title }: { Title: string }) => {
  return (
    <header
      style={{
        fontSize: "5rem",
        textAlign: "center",
        textOverflow: "ellipsis",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Title}
    </header>
  );
};

export default Header;
