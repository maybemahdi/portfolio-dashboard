
import Footer from "@/components/shared/Footer/Footer";
import NavBar from "@/components/shared/NavBar/NavBar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <NavBar />
      <div className="h-full min-h-[calc(100vh-0px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
