import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

function layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}

export default layout;
