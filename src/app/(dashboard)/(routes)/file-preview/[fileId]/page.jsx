"use client";
import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../../../../../../firbaseConfig";
import { MdOutlineContentCopy } from "react-icons/md";
import Image from "next/image";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Filepreview = ({ params }) => {
  const db = getFirestore(app);
  const [file, setFile] = useState();
  const [placeholderText, setPlaceholderText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [enablePassword, setEnablePassword] = useState(false); // State to manage enable/disable password input

  useEffect(() => {
    params?.fileId && getfileinfo();
  }, []);

  const getfileinfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setFile(docSnap.data());
      // Set the placeholder text here
      setPlaceholderText(docSnap.data().fileName); // or any other property you want to use
      setEnablePassword(docSnap.data().enablePassword); // Set enablePassword state
    } else {
      console.log("No such document!");
    }
  };

  const copyPlaceholderText = () => {
    navigator.clipboard.writeText(placeholderText);
    setShowAlert(true); // Show alert when text is copied
    setTimeout(() => {
      setShowAlert(false); // Hide alert after 3 seconds
    }, 3000);
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto">
      <div className="grid grid-cols-1 p-4 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="h-[400px] p-4 rounded-lg border-[1px] bg-gray-200/10 border-gray-200 flex flex-col items-center justify-center ">
          {file && file.fileUrl && file.fileName && file.fileType && (
            <>
              <Image
                src={file.fileUrl}
                className="h-[80%] w-fit object-contain border-[1px] border-gray-200/50 p-1"
                height={500}
                width={500}
                alt="Preview Img"
              />
              <div className="text-left text-gray-500">
                <h2 className="font-mono">File Name: {file.fileName}</h2>
                <h2 className="font-mono">File Type: {file.fileType}</h2>
              </div>
            </>
          )}
          {console.log(file)}
        </div>
        <div className="h-full rounded-lg bg-gray-200/10 border-[1px] border-gray-200 p-4">
          {file && file.shortUrl && file.fileName && file.fileType && (
            <>
              <div>
                <label
                  htmlFor="UserEmail"
                  className="block font-medium text-gray-700 p-2"
                >
                  Short Url
                </label>

                <div className="flex w-full rounded-md border-[1px] border-gray-200 p-2 relative">
                  <input
                    type="text"
                    placeholder={file.shortUrl}
                    className="my-1 p-1 w-full bg-transparent  sm:text-sm"
                    disabled
                  />
                  <button onClick={copyPlaceholderText} className="text-xl">
                    <MdOutlineContentCopy className="text-gray-400 hover:text-gray-800" />
                  </button>
                  {showAlert && (
                    <div role="alert" className="absolute top-0 right-0">
                      <div className="rounded-xl border border-gray-100 bg-white p-3">
                        <div className="flex items-start gap-4">
                          <span className="text-green-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </span>

                          <div className="flex-1">
                            <strong className="block font-medium text-gray-900">
                              Text Copied
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                <fieldset className="p-2">
                  <legend className="sr-only">Checkboxes</legend>
                  <div className="space-y-2">
                    <label
                      htmlFor="Option1"
                      className="flex cursor-pointer items-start gap-4"
                    >
                      <div className="flex items-center">
                        &#8203;
                        <input
                          type="checkbox"
                          className="size-4 rounded border-gray-300"
                          id="Option1"
                          checked={enablePassword}
                          onChange={(e) => setEnablePassword(e.target.checked)}
                        />
                      </div>
                      <div>
                        <strong className="font-medium text-gray-900">
                          {" "}
                          Do you want to Enable Password ?{" "}
                        </strong>
                      </div>
                    </label>
                  </div>
                </fieldset>
                <div className="flex w-full relative gap-2 justify-between">
                  <div className="flex w-full justify-between rounded-md border-[1px] border-gray-200 px-2 relative">
                    <input
                      type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
                      placeholder="Enter password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Password must contain at least one digit, one uppercase and one lowercase letter, and be at least 8 characters long"
                      className={`my-1 w-[85%] rounded-md  p-2 sm:text-sm ${!enablePassword ? "opacity-50 cursor-not-allowed" : ""}`}
                      disabled={!enablePassword}
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                      className="text-xl"
                    >
                      {showPassword ? (
                        <FaRegEyeSlash className="text-gray-400 hover:text-gray-800" />
                      ) : (
                        <FaRegEye className="text-gray-400 hover:text-gray-800" />
                      )}
                    </button>
                  </div>
                  <button
                    onClick={copyPlaceholderText}
                    className={`text-xl flex items-center ${!enablePassword ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={!enablePassword}
                  >
                    <a
                      className="group relative inline-block overflow-hidden border border-indigo-600 px-6 py-3 rounded-md"
                      href="#"
                    >
                      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>
                      <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                        save
                      </span>
                    </a>
                  </button>
                </div>
              </div>
            </>
          )}

          <div>
            <div className="p-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="UserEmail"
                  className="block font-medium text-gray-700 p-2"
                >
                  Short Url
                </label>

                <div className="flex w-full rounded-md border-[1px] border-gray-200 relative">
                  <input
                    type="text"
                    placeholder=""
                    className="my-1 p-2 w-full bg-transparent  sm:text-sm"
                  />
                </div>
                <div>
                  <a
                    className="group relative rounded-md inline-block overflow-hidden w-full border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                    href="#"
                  >
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

                    <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                      <p className="text-center">Send Email</p>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filepreview;
