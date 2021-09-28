const Board = (props) => {
  const { type } = props;
  return (
    <section id={`blackboard-${type || 'primary'}`} className='container'>
      {props.children}
    </section>
  );
};

export default Board;
