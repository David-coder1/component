// src/components/Button.js
import React from "react";
import "./Button.css"; // Optionally add a CSS file for styles
const Button = ({
  label,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
}) => {
  const className = `btn ${variant} ${size} ${disabled ? "disabled" : ""}`;

  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {label}
      Normal Button Tomato Button
    </button>
  );
};

export default Button;
