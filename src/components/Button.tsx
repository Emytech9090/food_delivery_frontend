import type { FormEventHandler, ReactNode } from "react";
import { Link } from "react-router";
type ButtonType = {
  title: string;
  onClick?: () => void;
  onSubmit?: FormEventHandler<HTMLButtonElement>;
  path?: string;
  type?: string;
  className?: string;
};
const Button = ({
  title,
  onClick,
  onSubmit,
  path,
  className = "hover:bg-blue-300/10",
}: ButtonType): ReactNode => {
  const btnStyle = `flex bg-blue-800 rounded-full px-8 py-2 whitespace-nowrap text-white font-semibold  cursor-pointer items-center justify-center ${className} `;
  if (onclick && path) {
    return <p>You cannot use onClick and path together</p>;
  }
  if (path) {
    return (
      <Link to={path} className={btnStyle}>
        {title}
      </Link>
    );
  } else if (typeof onclick === "object") {
    return (
      <button onSubmit={onSubmit} onClick={onClick} className={btnStyle}>
        {title}
      </button>
    );
  }
};
export default Button;
