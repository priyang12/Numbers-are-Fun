const Header = ({ title }) => {
  return (
    <nav id='header' className='container rounded'>
      <h1 className='display-2 text-center text-light '>{title}</h1>
    </nav>
  );
};
export default Header;
