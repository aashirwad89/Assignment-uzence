import React from "react";

type InputFieldProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export const InputField: React.FC<InputFieldProps> = ({ placeholder, value, onChange }) => {
  return (
    <input
      style={{
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "200px",
      }}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
