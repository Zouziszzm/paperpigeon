"use client";
import { UserButton, SignOutButton } from "@clerk/nextjs";
import React, { useState } from "react";
import { motion } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { TbLogout } from "react-icons/tb";
import { LuHardDriveUpload } from "react-icons/lu";
import { LuFileStack } from "react-icons/lu";
import { GrUpgrade } from "react-icons/gr";
import { VscSignOut } from "react-icons/vsc";

const Sidebar = () => {
  const tabItems = [
    {
      icon: <LuHardDriveUpload />,
      name: "Upload",
    },
    {
      icon: <LuFileStack />,
      name: "Files",
    },
    {
      icon: <GrUpgrade />,
      name: "Upgrad",
    },
  ];
  return (
    <>
      <Tabs.Root className="w-full mx-auto p-2" defaultValue="Overview">
        <Tabs.List
          className="w-full border-b flex justify-between items-center gap-x-3 overflow-x-auto text-sm px-4"
          aria-label="Manage your own account"
        >
          <UserButton />
          <div>
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
          </div>
          <SignOutButton>
            <button className="flex" title="Sign out">
              <VscSignOut className="outline-none text-gray-500 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium scale-125" />
            </button>
          </SignOutButton>
        </Tabs.List>
        {tabItems.map((item, idx) => (
          <Tabs.Content key={idx} className="py-6" value={item.name}>
            <p className="text-xs leading-normal">
              This is <b>{item.name}</b> Tab containing the items to put in
              here.
            </p>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </>
  );
};

export default Sidebar;
