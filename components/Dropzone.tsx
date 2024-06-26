"use client";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import {
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useState } from "react";
import { db, storage } from "@/firebase";
import { addDoc } from "firebase/firestore";
import DropzoneComp from "react-dropzone";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import toast from "react-hot-toast";
function Dropzone() {
  const [loading, setLoading] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = async () => {
        await uploadPost(file);
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const uploadPost = async (selectedFile: File) => {
    if (loading) return;
    if (!user) return;
    setLoading(true);
    const toastId = toast.loading("uploading..");
    const docRef = await addDoc(collection(db, "users", user.id, "files"), {
      userId: user.id,
      filename: selectedFile.name,
      fullname: user.fullName,
      profileImg: user.imageUrl,
      timeStamp: serverTimestamp(),
      type: selectedFile.type,
      size: selectedFile.size,
    });

    const imageRef = ref(storage, `users/${user.id}/files/${docRef.id}`);

    uploadBytes(imageRef, selectedFile).then(async (snapshot) => {
      const downloadUrl = await getDownloadURL(imageRef);

      await updateDoc(doc(db, "users", user.id, "files", docRef.id), {
        downloadUrl: downloadUrl,
      });
    });
    toast.success("Upload Complete", {
      id: toastId,
    });

    setLoading(false);
  };
  const maxSize = 20971520;

  return (
    <DropzoneComp minSize={0} maxSize={maxSize} onDrop={onDrop}>
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
        return (
          <section className="m-4  mt-0 pt-[80px]">
            <div
              {...getRootProps()}
              className={cn(
                "w-full h-[400px] lg:h-72 lg:w-[70%] mx-auto flex justify-center items-center p-5 border border-dashed rounded-md text-center ",
                isDragActive
                  ? "bg-blue-600 text-white animate-pulse"
                  : "bg-slate-100/50 dark:bg-slate-800/80 text-slate-400",
              )}
            >
              <input {...getInputProps()} />
              {!isDragActive && "Click here or Drop a file to Upload!"}
              {isDragActive && !isDragReject && "Drop to upload this file!"}
              {isDragReject && "Filetype not accepted, sorry!"}
              {isFileTooLarge && (
                <div className="text-danger mt-2">
                  File is to Large. Try again with a smaller file.
                </div>
              )}
            </div>
          </section>
        );
      }}
    </DropzoneComp>
  );
}
export default Dropzone;

function serveTimeStamp(): any {
  throw new Error("Function not implemented.");
}
