const Ramanurjan = ({ title, blockquote, Description }) => {
  return (
    <div className='hero-container p-3'>
      <div className='Title '>
        <h1>{title}</h1>
        <blockquote className=' m-4'>{blockquote}</blockquote>
        <ul className='list-group'>
          {Description.map((item, index) => (
            <li
              className='list-group-item bg-transparent text-light'
              key={index}
            >
              <h3>{item}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ramanurjan;
