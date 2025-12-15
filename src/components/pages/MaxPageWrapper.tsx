import type { ReactNode } from "react";

const MaxPageWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="px-5 py-5">{children}</div>;
};
export default MaxPageWrapper;
