"use client";

import UserProvider from "@/context/UserContext";
import ReduxStoreProvider from "@/redux/ReduxStoreProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <ReduxStoreProvider>{children}</ReduxStoreProvider>
    </UserProvider>
  );
};

export default Providers;