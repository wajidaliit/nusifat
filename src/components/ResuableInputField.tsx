import React, { memo } from "react";

interface ResuableInputFieldProps {
  label?: string;
  type?: string;
  id?: string;
  rows?: number;
  name?: string;
  maxHeight?: string | number;
  value?: string;
  placeholder?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  className?: string;
  classNameDiv?: string;
  error?: string;
}

const ResuableInputField: React.FC<ResuableInputFieldProps> = ({
  label,
  type = "text",
  id,
  name,
  rows = 5,
  maxHeight = "20rem",
  value,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  className = "",
  classNameDiv = "",
  error,
}) => {
  return (
    <div className={`w-full mb-4 ${classNameDiv}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-ferrari-red focus:border-ferrari-red  sm:text-sm text-black ${className} ${error ? "border-ferrari-red" : ""}`}
          rows={rows} // You can adjust the number of rows as needed
          style={{ maxHeight: maxHeight }}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          className={`appearance-none block w-full px-3 py-4 border border-cool-grey shadow-sm placeholder-gray-400 focus:outline-none focus:ring-ferrari-red focus:border-ferrari-red sm:text-sm text-black ${className} ${error ? "border-ferrari-red" : ""}`}
        />
      )}
      {error && <p className="mt-1 text-sm text-ferrari-red">{error}</p>}
    </div>
  );
};

export default memo(ResuableInputField);
