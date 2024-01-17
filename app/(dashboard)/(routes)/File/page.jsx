import React from "react";
import { UserButton } from "@clerk/nextjs";
const File = () => {
  return (
    <>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};
export default File;
