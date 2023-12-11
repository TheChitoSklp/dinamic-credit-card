import React from "react";

export const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  error,
  showError,
}) => {
  const isError = showError && error && error.length > 0;

  return (
    <div className={`mb-4 w-full`}>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className={`shadow appearance-none border ${
          isError ? "border-red-500" : "border"
        } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {isError && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};
