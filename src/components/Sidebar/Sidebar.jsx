"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { UserButton, SignOutButton } from "@clerk/nextjs";
import * as Tabs from "@radix-ui/react-tabs";
import { LuHardDriveUpload } from "react-icons/lu";
import { LuFileStack } from "react-icons/lu";
import { GrUpgrade } from "react-icons/gr";
import { VscSignOut } from "react-icons/vsc";
import Upload from "../Upload/Upload";
import Files from "../Files/Files";
import Upgrade from "../Upgrade/Upgrade";
import Link from "next/link";

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
      name: "Upgrade",
      refers: Upgrade,
    },
  ];

  const [showNames, setShowNames] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowNames(window.innerWidth >= 480); // Adjust the threshold as needed
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="w-full flex justify-center p-2 ">
        <Link href="/" className=" flex items-center justify-center">
          <Image src="/Origami_b.svg" height={50} width={50} alt="Logo" />
          <p className="text-base font-sans font-semibold text-primary">Paper Pigeons</p>
        </Link>
      </div>
      <Tabs.Root className="w-full mx-auto p-2 px-4" defaultValue="Upload">
        <Tabs.List
          className="w-full  flex justify-between items-center gap-x-3 overflow-x-auto text-sm"
          aria-label="Manage your own account"
        >
          <div className="p-1">
            <div className="p-1.5 bg-gray-100 rounded-lg">
              <UserButton />
            </div>
          </div>
          <div className="flex gap-2 sm:px-8">
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
                  {showNames && item.name}
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
