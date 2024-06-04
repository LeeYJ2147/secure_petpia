import React from "react";
import classNames from "classnames";
import "./Grid.scss";

function Column({ span, children, as = "div", className = "", ...props }) {
  const Component = as;
  return (
    <Component className={classNames(`col-${span}`, className)} {...props}>
      {children}
    </Component>
  );
}

export default Column;
