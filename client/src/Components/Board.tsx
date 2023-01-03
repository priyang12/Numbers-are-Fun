import React from "react";

const Board = ({
  type = "primary",
  ...props
}: React.ComponentPropsWithoutRef<"section"> & {
  type?: "primary" | "secondary";
}) => {
  return (
    <section className={`container board blackboard-${type}`}>
      {props.children}
    </section>
  );
};

export default Board;
