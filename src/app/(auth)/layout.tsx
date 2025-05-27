import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <div className="bg-[#F3F4F8]">{children}</div>;
};

export default layout;
