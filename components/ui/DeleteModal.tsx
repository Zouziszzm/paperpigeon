"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "@/firebase";
import { deleteDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { doc } from "firebase/firestore";
import toast from "react-hot-toast";
export function DeleteModal() {
  const { user } = useUser();
  const [isDeleteModalOpen, setIsDeleteModalOpen, fileId, setFileId] =
    useAppStore((state) => [
      state.isDeleteModalOpen,
      state.setIsDeleteModalOpen,
      state.fileId,
      state.setFileId,
    ]);

  async function deleteFile() {
    if (!user || !fileId) return;
    const toastId = toast.loading("Deleting..");
    const fileRef = ref(storage, `users/${user.id}/files/${fileId}`);
    try {
      deleteObject(fileRef)
        .then(async () => {
          deleteDoc(doc(db, "users", user.id, "files", fileId)).then(() => {
            console.log("Deleted");
            toast.success("Deleted Succesfully", {
              id: toastId,
            });
          });
        })
        .finally(() => {
          setIsDeleteModalOpen(false);
        });
    } catch (error) {
      console.log(error);
    }
    setIsDeleteModalOpen(false);
  }
  return (
    <Dialog
      open={isDeleteModalOpen}
      onOpenChange={(isOpen) => {
        setIsDeleteModalOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="w-full sm:justify-start">
          <div className="flex w-full space-x-2 py-3">
            <Button
              size="sm"
              className="px-3 flex-1"
              variant="outline"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              <span className="sr-only">Cancel</span>
              <span>Cancel</span>
            </Button>
            <Button
              type="submit"
              size="sm"
              variant="ghost"
              className="px-3 flex-1 bg-[#E72929] hover:bg-[#FF204E]"
              onClick={() => deleteFile()}
            >
              <span className="sr-only">Delete</span>
              <span>Delete</span>
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
