"use client";

import { SidebarContext } from "@/src/context/layout_context";
import { useLockedBody } from "@/src/hooks/bodyLock.hook";
import React from "react";
import { SidebarWrapper } from "../sidebar/SidebarWrapper";
import { NavbarWrapper } from "../navbar/NavbarWrapper";


interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}>
      <section className='flex'>
        <SidebarWrapper />
        <NavbarWrapper>{children}</NavbarWrapper>
      </section>
    </SidebarContext.Provider>
  );
};
