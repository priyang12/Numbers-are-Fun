import Styles from "./Mathematicians.module.css";

const Mathematician = ({
  title,
  blockquote,
  Description,
}: {
  title: string;
  blockquote: string;
  Description: string[];
}) => {
  return (
    <div className={Styles.List}>
      <h1>{title}</h1>
      <blockquote>{blockquote}</blockquote>
      <ul>
        {Description.map((item, index) => (
          <li key={index}>
            <h3>{item}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mathematician;
