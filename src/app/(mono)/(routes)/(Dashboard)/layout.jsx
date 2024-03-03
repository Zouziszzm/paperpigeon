import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

function layout({ children }) {
  return (
    <div className="flex flex-col justify-between">
      <Sidebar />
      {children}
      <Footer/>
    </div>
  );
}

export default layout;
