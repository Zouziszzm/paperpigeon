"use client";
import { UserButton, SignOutButton } from "@clerk/nextjs";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { LuHardDriveUpload } from "react-icons/lu";
import { LuFileStack } from "react-icons/lu";
import { GrUpgrade } from "react-icons/gr";
import { VscSignOut } from "react-icons/vsc";
import Upload from "../Upload/Upload";
import Files from "../Files/Files";
import Upgrade from "../Upgrade/Upgrade";
const Sidebar = () => {
  const tabItems = [
    {
      icon: <LuHardDriveUpload />,
      name: "Upload",
      refers: Upload,
    },
    {
      icon: <LuFileStack />,
      name: "Files",
      refers: Files,
    },
    {
      icon: <GrUpgrade />,
      name: "Upgrad",
      refers: Upgrade,
    },
  ];
  return (
    <>
      <Tabs.Root className="w-full mx-auto p-2" defaultValue="Upload">
        <Tabs.List
          className="w-full border-b flex justify-between items-center gap-x-3 overflow-x-auto text-sm px-4"
          aria-label="Manage your own account"
        >
          <div className="p-1">
            <div className="p-1.5 bg-gray-100 rounded-lg">
              <UserButton />
            </div>
          </div>
          <div>
            {tabItems.map((item, idx) => (
              <Tabs.Trigger
                key={idx}
                className="group outline-none py-1.5 border-b-2 border-white text-gray-500 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
                value={item.name}
              >
                <div
                  className={`
                  flex items-center gap-x-2 py-1.5 px-3 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-50 group-active:bg-gray-100 font-medium`}
                >
                  {item.icon}
                  {item.name}
                </div>
              </Tabs.Trigger>
            ))}
          </div>
          <div className="p-1 h-[40px] w-[40px] bg-gray-100 rounded-lg flex justify-center items-center">
            <div className="p-1.5">
              <SignOutButton>
                <button className="flex" title="Sign out">
                  <VscSignOut className="outline-none text-gray-500 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium scale-125" />
                </button>
              </SignOutButton>
            </div>
          </div>
        </Tabs.List>
        {tabItems.map((item, idx) => (
          <Tabs.Content key={idx} className="py-6" value={item.name}>
            <item.refers />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </>
  );
};

export default Sidebar;
