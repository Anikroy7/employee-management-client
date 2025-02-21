import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@heroui/navbar";
import Link from "next/link";
import NavbarDropDown from "./NavbarDropDown";
import { ThemeSwitch } from "../theme-switch";

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
    return (
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Navbar>
              
                <NavbarContent as="div" justify="end">
                    <ThemeSwitch />
                    <NavbarDropDown />
                </NavbarContent>
            </Navbar>
            {children}
        </div>
    );
}   
