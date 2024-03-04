import { progress } from "framer-motion";
import React from "react";

const Progress = ({progress}) => {
  return (
    <div className="bg-gray-400 w-full h-2 mt-3 rounded-full">
      <div className="p-1 bg-primary rounded-full"
      style={{width:`${progress}%`}}
      >
      </div>
    </div>
  );
};

export default Progress;
