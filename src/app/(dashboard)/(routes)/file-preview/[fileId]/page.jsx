"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../../../../../../firbaseConfig";
const Filepreview = ({ params }) => {
  const db = getFirestore(app);
  const[file,setFile]=useState()
  useEffect(() => {
    console.log(params?.fileId);
    params?.fileId && getfileinfo();
  }, []);

  const getfileinfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data())
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  return <div>Filepreview</div>;
};

export default Filepreview;
