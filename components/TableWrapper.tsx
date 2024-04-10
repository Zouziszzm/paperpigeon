"use client";
import { FileType } from "@/typings";
import { Button } from "./ui/button";
import { columns } from "./columns";
import { DataTable } from "./Table";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import { Skeleton } from "@/components/ui/skeleton";
function TableWrapper({ skeletonFiles }: { skeletonFiles: FileType[] }) {

  const { user } = useUser();
  const [initialFiles, setInitialFiles] = useState<FileType[]>([]);
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  const [docs, loading, error] = useCollection(
    user &&
      query(
        collection(db, "users", user.id, "files"),
        orderBy("timeStamp", sort),
      ),
  );

  useEffect(() => {
    if (!docs) return;
    const files: FileType[] = docs.docs.map((doc) => ({
      id: doc.id,
      filename: doc.data().filename || doc.id,
      timestamp: new Date(doc.data().timeStamp?.seconds * 1000) || undefined,
      fullName: doc.data().fullname,
      downloadURL: doc.data().downloadUrl,
      type: doc.data().type,
      size: doc.data().size,
    }));
    setInitialFiles(files);
  }, [docs]);

  if (docs?.docs.length === undefined)
    return (
      <div className="flex flex-col gap-2">
        <div className="flex justify-end">
          <Button
            variant="outline"
            className="w-[150px]"
            onClick={() => setSort(sort === "desc" ? "asc" : "desc")}
          >
            <Skeleton className="h-full w-full" />
          </Button>
        </div>
        <div className="border rounded-lg">
          <div className="border-b h-12" />
          {skeletonFiles.map((file) => (
            <div
              key={file.id}
              className="flex flex-col items-center  gap-2 p-5 w-full"
            >
              <Skeleton className="h-12 w-full" />
            </div>
          ))}
        </div>
      </div>
    );
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-end">
        <Button
          variant="outline"
          className="w-[150px]"
          onClick={() => setSort(sort === "desc" ? "asc" : "desc")}
        >
          Sort by {sort === "desc" ? "Desc" : "Asc"}
        </Button>
      </div>
      <DataTable columns={columns} data={initialFiles} />
    </div>
  );
}

export default TableWrapper;
