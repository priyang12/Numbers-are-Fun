import * as React from "react";
import Style from "./Styles/TitleName.module.css";

const TitleName = ({
  title,
}: { title: string } & React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div id="header" className="container rounded">
      <h1 className={Style.Title}>{title}</h1>
    </div>
  );
};
export default TitleName;
