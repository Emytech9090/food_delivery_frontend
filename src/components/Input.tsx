import type { ChangeEventHandler, InputHTMLAttributes } from "react";

type InputType = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
  label: string;
  isReversed?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
const Input = ({
  value,
  onChange,
  id,
  name,
  type,
  placeholder,
  className = "h-14 w-full",
  label,
  isReversed,
  ...props
}: InputType) => {
  return (
    <div
      className={`w-full ${
        isReversed ? "flex flex-row-reverse items-center w-full" : ""
      }`}
    >
      <label htmlFor={id} className="px-3 whitespace-nowrap flex-1">
        {label}
      </label>
      <input
        {...props}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`rounded-lg border-2 border-blue-800/40 focus:outline-blue-800 px-2 ${className}`}
      />
    </div>
  );
};
export default Input;
