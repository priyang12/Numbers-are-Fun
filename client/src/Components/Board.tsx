import React from "react";

const Board = ({
  type = "primary",
  ...props
}: React.ComponentPropsWithoutRef<"section"> & {
  type?: "primary" | "secondary";
}) => {
  return (
    <section id={`blackboard-${type}`} className="container board">
      {props.children}
    </section>
  );
};

export default Board;
