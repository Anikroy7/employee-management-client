import React from "react";
import { Avatar } from "@heroui/avatar";
import { FaUsers } from "react-icons/fa";
import Link from "next/link";

import { Sidebar } from "./sidebar.styles";
import { CollapseItems } from "./CollapseItems";
import { SidebarMenu } from "./SidebarMenuItems";

import { useSidebarContext } from "@/src/context/layout_context";

export const SidebarWrapper = () => {
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div
          className={Sidebar.Overlay()}
          role="button"
          tabIndex={0}
          onClick={setCollapsed}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setCollapsed();
            }
          }}
        />
      ) : (
        <></>
      )}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <Link className="flex justify-center" href="/">
          <Avatar
            as="button"
            color="secondary"
            size="lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdu_cMzmPjjvoTtzsqtNpKNTzabogAiqdDA&s"
          />
        </Link>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarMenu title="Main Menu">
              <CollapseItems
                icon={<FaUsers className="w-5 h-5" />}
                items={[
                  { name: "Employee Table", path: "/employee-table" },
                  { name: "Employee List", path: "/employee-list" },
                ]}
                title="Employees"
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
