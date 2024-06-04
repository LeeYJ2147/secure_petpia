import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Button.scss";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  const buttonClass = classNames(
    "button",
    {
      [`button-${variant}`]: variant,
    },
    className
  );

  return (
    <button type={type} className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "tertiary"]),
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  type: "button",
  variant: "primary",
  className: "",
};

export default Button;
