"use client";
import React, { useState } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FileInput, Label, Progress } from "flowbite-react";
import AlertMsg from "../../_components/Alert";
import { app } from "../../../../../firbaseConfig";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Progressbar from "../../_components/Progressbar";
import Success from "../../_components/Success";
const Upload = () => {
  const [fileSizeExceed, setFileSizeExceed] = useState(false);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const storage = getStorage(app);
  const metadata = {
    contentType: "file.type",
  };

  const upploadbtnclick = (file) => {
    const storageRef = ref(storage, "Paper-pigeon/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);
      console.log("Upload is " + progress + "% done");
    });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const fileSizeInMB = selectedFile.size / (1024 * 1024); // Convert bytes to MB
    if (fileSizeInMB > 2) {
      setFileSizeExceed(true);
      setFile(null); // Reset file state
      setTimeout(() => {
        setFileSizeExceed(false);
      }, 2000); // Hide alert after 2 seconds
    } else {
      setFileSizeExceed(false);
      setFile(selectedFile); // Set selected file
      // Handle file upload logic here
    }

    // Manually clear the file input
    event.target.value = null;
  };

  const removeFile = () => {
    setFile(null);
  };

  const isDownloadDisabled = !file;

  return (
    <>
      {fileSizeExceed && <AlertMsg />}
      {progress === 100 ? (
        <Success />
      ) : progress === 0 ? null : null }
      <div className="w-[90%] md:w-[70%] mx-auto h-fit">
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
            className="dark:hover:bg-bray-800 flex py-36  w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5 w-full">
              <div className="h-[50px] w-[50px]">
                <IoCloudUploadSharp className="text-gray-500 h-[45px] w-[45px]" />
              </div>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG, or GIF (MAX: 2 MB)
              </p>
            </div>
            <FileInput
              id="dropzone-file"
              className="hidden"
              onChange={handleFileChange}
            />
          </Label>
        </div>

        {file && <Progressbar progress={progress} />}

        <div className="p-4 w-fit mx-auto">
          <button
            disabled={isDownloadDisabled}
            className={`group relative rounded-lg inline-block overflow-hidden border ${
              isDownloadDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "border-indigo-600"
            } px-8 py-3 focus:outline-none focus:ring`}
            onClick={() => upploadbtnclick(file)}
          >
            <span className="absolute inset-x-0 rounded- bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>
            <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
              Upload
            </span>
          </button>
        </div>
        {file && (
          <>
            <div className="p-4 w-fit mx-auto">
              <div className="border border-gray-300 rounded p-2 flex items-center">
                <span className="mr-2">{file.name}</span>
                <button className="text-red-500" onClick={removeFile}>
                  <IoMdClose />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Upload;
