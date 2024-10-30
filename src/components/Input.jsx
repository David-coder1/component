import React from "react";

const Input = ({
  type = "text",

  placeholder = "Enter you text here",
  value,
  onChange,
  className = "",
  disabled = false,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input ${className}`}
      disabled={disabled}
    />
  );
};

export default Input;
