import React from "react";
import { usePathname } from "next/navigation";
import { useSidebarContext } from "@/src/context/layout_context";
import { Sidebar } from "./sidebar.styles";
import {Avatar} from "@heroui/avatar";
import { CollapseItems } from "./CollapseItems";
import { SidebarMenu } from "./SidebarMenuItems";
import { FaUsers } from "react-icons/fa"; 
import Link from "next/link";

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
                <Link href={'/'} className="flex justify-center">
                    <Avatar 
                        as='button'
                        color='secondary'
                        size='lg'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdu_cMzmPjjvoTtzsqtNpKNTzabogAiqdDA&s'
                    />
                </Link>
                <div className="flex flex-col justify-between h-full">
                    <div className={Sidebar.Body()}>
                        <SidebarMenu title="Main Menu">
                            <CollapseItems
                                icon={<FaUsers className="w-5 h-5" />}
                                items={[{name:"Employee List", path: '/employee-list'}, {name:"Employee Table", path: '/employee-table'}]}
                                title="Employees"
                            />
                        </SidebarMenu>
                    </div>
                </div>
            </div>
        </aside>
    );
};
