import DashboardLayout from "@/components/Layout/DashboardLayout";
import DashboardWrapper from "@/role-wrappers/DashboardWrapper";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return;
  <DashboardWrapper>
    <DashboardLayout>{children}</DashboardLayout>;
  </DashboardWrapper>;
};

export default layout;
