import React from "react";
import { usePathname } from "next/navigation";
import { useSidebarContext } from "@/src/context/layout_context";
import { Sidebar } from "./sidebar.styles";
import {Avatar} from "@heroui/avatar";
import { CollapseItems } from "./CollapseItems";
import { BalanceIcon } from "../icons";
import { SidebarMenu } from "./SidebarMenuItems";

export const SidebarWrapper = () => {
    const pathname = usePathname();
    const { collapsed, setCollapsed } = useSidebarContext();

    return (
        <aside className="h-screen z-[20] sticky top-0">
            {collapsed ? (
                <div className={Sidebar.Overlay()} onClick={setCollapsed} />
            ) : null}
            <div
                className={Sidebar({
                    collapsed: collapsed,
                })}
            >
                <div className="flex justify-center">
                    <Avatar 
                        as='button'
                        color='secondary'
                        size='lg'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdu_cMzmPjjvoTtzsqtNpKNTzabogAiqdDA&s'
                    />
                </div>
                <div className="flex flex-col justify-between h-full">
                    <div className={Sidebar.Body()}>
                        <SidebarMenu title="Main Menu">
                            <CollapseItems
                                icon={<BalanceIcon />}
                                items={["Employee List", "Employee Table"]}
                                title="Employees"
                            />
                        </SidebarMenu>
                    </div>
                </div>
            </div>
        </aside>
    );
};
