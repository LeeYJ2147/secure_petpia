import React from "react";
import classNames from "classnames";
import "./Grid.scss";

function Grid({ children, as = "div", className = "", ...props }) {
  const Component = as;
  return (
    <Component className={classNames("grid", className)} {...props}>
      {children}
    </Component>
  );
}

export default Grid;
