import React, { ReactNode } from "react";

const MyContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className="max-w-[1200px] w-[90%] mx-auto">{children}</div>;
};

export default MyContainer;
