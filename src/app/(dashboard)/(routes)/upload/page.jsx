"use client"
import React, { useState } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import { FileInput, Label } from "flowbite-react";
import AlertMsg from "../../_components/Alert";
const Upload = () => {
  const [fileSizeExceed, setFileSizeExceed] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const fileSizeInMB = file.size / (1024 * 1024); // Convert bytes to MB
    if (fileSizeInMB > 2) {
      setFileSizeExceed(true);
    } else {
      setFileSizeExceed(false);
      // Handle file upload logic here
    }
  };

  return (
    <>
      {fileSizeExceed ? (
        <AlertMsg />
      ) : ("")
      }
      <div className="w-[70%] mx-auto h-fit">
      <div>
        <div className="inset-x-0 bottom-0 p-4">
          <div className="rounded-lg bg-indigo-600 px-4 py-3 text-white shadow-lg">
            <p className="text-center text-sm font-medium">
              Start Uploading File and Start Sharing it.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center py-8">
        <Label
          htmlFor="dropzone-file"
          className="dark:hover:bg-bray-800 flex p-36 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <div className="h-[50px] w-[50px]">
              <IoCloudUploadSharp className="text-gray-500 h-[45px] w-[45px]" />
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG, or GIF (MAX: 2 MB)
            </p>
          </div>
          <FileInput id="dropzone-file" className="hidden" onChange={handleFileChange} />
        </Label>
      </div>
      <div className="p-4 w-fit mx-auto">
        <a
          className="group relative rounded-lg inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
          href="#"
        >
          <span className="absolute inset-x-0 rounded- bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

          <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
            Download
          </span>
        </a>
      </div>
    </div >
    </>
  );
};

export default Upload;
