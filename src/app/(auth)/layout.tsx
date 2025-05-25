import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div> 
      <h3 className="w-full bg-white py-3 text-2xl text-center">
        Hamnat-Probetest.de
      </h3>
      <div className="bg-[#F3F4F8]">{children}</div>
    </div>
  );
};

export default layout;
