import type { ChangeEventHandler, TextareaHTMLAttributes } from "react";

type TextareaType = {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
  label: string;
  isReversed?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
const Textarea = ({
  id,
  value,
  onChange,
  className = " w-full",
  label,
  isReversed,
  ...props
}: TextareaType) => {
  return (
    <div
      className={`w-full ${
        isReversed ? "flex flex-row-reverse items-center w-full" : ""
      }`}
    >
      <label htmlFor={id} className="px-3 whitespace-nowrap flex-1">
        {label}
      </label>
      <textarea
        {...props}
        value={value}
        onChange={onChange}
        className={`rounded-lg border-2 border-blue-800/40 focus:outline-blue-800 px-2 ${className}`}
      ></textarea>
    </div>
  );
};
export default Textarea;
