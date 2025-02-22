
'use client';
import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";

import { ThemeSwitch } from "../theme-switch";

import NavbarDropDown from "./NavbarDropDown";
import Link from "next/link";
import { Button } from "@heroui/button";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useSidebarContext } from "@/src/context/layout_context";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  const {setCollapsed}= useSidebarContext()

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar maxWidth="2xl">
        <div className="md:hidden flex items-center">
          <Button
            isIconOnly
            variant="light"
            onPress={() => setCollapsed()}
          >
            <FaBars size={20} />
          </Button>
        </div>

        <NavbarContent as="div" justify="end">
          <ThemeSwitch />
          <NavbarDropDown />
        </NavbarContent>
      </Navbar>

      

      {children}
    </div>
  );
};
