import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  IoCloudUploadOutline,
  IoWarningOutline,
  IoClose,
  IoCheckmarkOutline,
} from "react-icons/io5";
import { app } from "../../../firebaseConfig";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Progress from "../Progressbar/Progress";
import { useUser } from "@clerk/nextjs";
import { Genstring } from "@/_utils/Randomstrgen";

const Upload = () => {
  const { user } = useUser();
  const [fileinfo, setFileinfo] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [progress, setProgress] = useState();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const storage = getStorage(app);
  const db = getFirestore(app);
  const fileinfoRef = useRef();

  const uploadfile = () => {
    if (!fileinfo) return; // Check if fileinfo exists
    const metadata = {
      contentType: fileinfo.type,
    };
    const fileref = ref(storage, "Paper-pigeon/" + fileinfo.name);
    const uploadTask = uploadBytesResumable(fileref, fileinfo, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
        progress == 100 &&
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            saveInfo(fileinfo, downloadURL);
          });
      },
      (error) => {
        console.error("Error uploading file: ", error);
        setShowAlert(true);
        setShowErrorAlert(true); // Set showErrorAlert to true
        setFileinfo(null);
      },
      () => {
        console.log("Upload completed successfully");
        setShowAlert(false);
        setShowSuccessAlert(true); // Set showSuccessAlert to true
      },
    );
  };
  const onFileselect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.size > 2000000) {
      setShowAlert(true);
      setShowErrorAlert(true);
      setFileinfo(null);
    } else {
      setShowAlert(false);
      setShowErrorAlert(false);
      setFileinfo(selectedFile);
      fileinfoRef.current = selectedFile;
    }
  };

  const saveInfo = async (fileinfo, downloadURL) => {
    const docid = Date.now().toString();
    await setDoc(doc(db, "uploadedFile", docid), {
      fileName: fileinfo?.name,
      fileSzie: fileinfo?.size,
      fileType: fileinfo?.type,
      fileUrl: downloadURL,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
      password: "",
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + Genstring(),
    });
  };

  const hideAlert = () => {
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const removeFile = () => {
    setFileinfo(null);
  };

  return (
    <>
      <div className="p-2">
        <p className="text-base text-center p-2">
          Start <b className="text-primary">Uploading</b> File and{" "}
          <b className="text-primary">Share</b> It
        </p>
        <div className="px-4 mdw-fit mx-auto my-4">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent  hover:bg-gray-50/50 md:w-[70%]"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <IoCloudUploadOutline className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Any Media or File (Max Size: 2 MB)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={onFileselect}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="p-4 mx-auto">
        {progress > 0 ? (
          <div className="w-[95%] md:w-[70%] mx-auto">
            <Progress progress={progress} />
            <p className="text-center text-sm font-mono text-primary p-2">
              {progress}%
            </p>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <button
              disabled={!fileinfo}
              className="group relative rounded-md inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring disabled:bg-gray-100 disabled:cursor-not-allowed"
              onClick={uploadfile}
            >
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500/80 group-disabled:bg-gray-100"></span>
              <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white group-disabled:text-indigo-600">
                Upload
              </span>
            </button>
          </div>
        )}
      </div>
      <div>
        <p className="text-center text-primary">File Preview</p>
        {fileinfo && (
          <div className="flex items-center justify-center mt-4">
            <div className="p-2 flex items-center border-primary border-[1px] rounded-lg gap-2">
              <button
                onClick={removeFile}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                <IoClose />
              </button>
              <span className="text-sm font-medium text-gray-500">
                {fileinfo.name}
              </span>
            </div>
          </div>
        )}
      </div>
      {showAlert && (
        <motion.div
          role="alert"
          className="fixed top-16 right-8 rounded border-s-4 border-red-500 bg-red-50 p-4 z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 4 }}
        >
          <div className="flex items-center gap-2 text-red-800">
            <IoWarningOutline className="h-5 w-5" />
            <strong className="block font-medium">
              {" "}
              Something went wrong{" "}
            </strong>
          </div>

          <p className="mt-2 text-sm text-red-700">
            The file size exceeds 2 MB. Please upload a smaller file.
          </p>
        </motion.div>
      )}
      {showSuccessAlert && (
        <motion.div
          role="alert"
          className="fixed top-16 right-8 rounded border-s-4 border-green-500 bg-green-50 p-4 z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 4 }}
        >
          <div className="flex items-center gap-2 text-green-800">
            <IoCheckmarkOutline className="h-5 w-5" />
            <strong className="block font-medium"> Success! </strong>
          </div>

          <p className="mt-2 text-sm text-green-700">
            File uploaded successfully.
          </p>
        </motion.div>
      )}
      {showErrorAlert && (
        <motion.div
          role="alert"
          className="fixed top-16 right-8 rounded border-s-4 border-red-500 bg-red-50 p-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 4 }}
        >
          <div className="flex items-center gap-2 text-red-800">
            <IoWarningOutline className="h-5 w-5" />
            <strong className="block font-medium">
              {" "}
              Something went wrong{" "}
            </strong>
          </div>

          <p className="mt-2 text-sm text-red-700">
            Error uploading file. Please try again.
          </p>
        </motion.div>
      )}
    </>
  );
};

export default Upload;
