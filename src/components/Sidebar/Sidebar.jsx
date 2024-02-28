"use client";
import { UserButton } from "@clerk/nextjs";
import React, { useState } from "react";
import { motion } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { TbLogout } from "react-icons/tb";
import { RiArchiveDrawerFill, RiArchiveFill } from "react-icons/ri";
const Sidebar = () => {
  const tabItems = [
    {
      icon: <RiArchiveFill />,
      name: "Overview",
    },
    {
      icon: <RiArchiveFill />,
      name: "Integration",
    },
    {
      icon: <RiArchiveFill />,
      name: "Billing",
    },
    {
      icon: <RiArchiveFill />,
      name: "Transactions",
    },
    {
      icon: <RiArchiveFill />,
      name: "plans",
    },
  ];
  return (
    <>
      <Tabs.Root
        className="max-w-screen-xl mx-auto px-4 md:px-8"
        defaultValue="Overview"
      >
        <Tabs.List
          className="w-full border-b flex items-center gap-x-3 overflow-x-auto text-sm"
          aria-label="Manage your own account"
        >
          {tabItems.map((item, idx) => (
            <Tabs.Trigger
              key={idx}
              className="group outline-none py-1.5 border-b-2 border-white text-gray-500 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
              value={item.name}
            >
              <div className="flex items-center gap-x-2 py-1.5 px-3 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-50 group-active:bg-gray-100 font-medium">
                {item.icon}
                {item.name}
              </div>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabItems.map((item, idx) => (
          <Tabs.Content key={idx} className="py-6" value={item.name}>
            <p className="text-xs leading-normal">
              This is <b>{item.name}</b> Tab
            </p>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </>
  );
};

export default Sidebar;
