"use client";
import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChevronDownIcon } from "../icons";

interface menuItem {
  name: string;
  path: string;
}

interface Props {
  icon: React.ReactNode;
  title: string;
  items: menuItem[];
}

export const CollapseItems = ({ icon, items, title }: Props) => {
  const pathname = usePathname();

  return (
    <div className="flex gap-4 h-full items-center cursor-pointer">
      <Accordion className="px-0" defaultExpandedKeys={["1"]}>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          classNames={{
            indicator: "data-[open=true]:-rotate-180",
            trigger:
              "py-0 min-h-[44px] hover:bg-default-100 rounded-xl active:scale-[0.98] transition-transform px-3.5",

            title:
              "px-0 flex text-base gap-2 h-full items-center cursor-pointer",
          }}
          indicator={<ChevronDownIcon />}
          title={
            <div className="flex flex-row gap-2">
              <span>{icon}</span>
              <span>{title}</span>
            </div>
          }
        >
          <div className="pl-12 flex flex-col gap-2 py-2">
            {items.map((item, index) => (
              <Link
                key={index}
                className={`${pathname.includes(item.path) && "bg-default-200"} w-full flex items-center gap-2 text-default-500 hover:text-default-900 transition-all duration-150 py-2 px-3 rounded-lg hover:bg-default-100 active:scale-[0.98] cursor-pointer`}
                href={item.path}
              >
                <div className="w-1 h-1 rounded-full bg-default-400" />
                {item.name}
              </Link>
            ))}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
