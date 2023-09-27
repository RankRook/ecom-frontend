import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, className, value, onChange, onBlur} = props;
  return (
    <div className="">
      <input
        type={type}
        name={name}
        className={`form-control ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default CustomInput;