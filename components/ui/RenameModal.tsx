import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import toast from "react-hot-toast";
function RenameModal() {
  const { user } = useUser();
  const [input, setInput] = useState("");

  const [
    isRenameModalOpen,
    setIsRenameModalOpen,
    fileId,
    setFileId,
    filename,
    setFilename,
  ] = useAppStore((state) => [
    state.isRenameModalOpen,
    state.setIsRenameModalOpen,
    state.fileId,
    state.setFileId,
    state.filename,
    state.setFilename,
  ]);

  const renameFile = async () => {
    if (!user || !fileId) return;

    const toastId = toast.loading("Reanaming..");
    await updateDoc(doc(db, "users", user.id, "files", fileId), {
      filename: input,
    });
    toast.success("Renamed Succesfully", {
      id: toastId,
    });
    setInput("");
    setIsRenameModalOpen(false);
  };

  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen) => {
        setIsRenameModalOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="pb-2">Rename the File</DialogTitle>
          <Input
            id="link"
            defaultValue={filename ?? ""}
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                renameFile();
              }
            }}
          />
        </DialogHeader>
        <DialogFooter className="w-full sm:justify-start">
          <div className="flex w-full space-x-2 py-3">
            <Button
              size="sm"
              className="px-3 flex-1"
              variant="outline"
              onClick={() => setIsRenameModalOpen(false)}
            >
              <span className="sr-only">Cancel</span>
              <span>Cancel</span>
            </Button>
            <Button
              type="submit"
              size="sm"
              variant="ghost"
              className="px-3 flex-1 bg-[#E72929] hover:bg-[#FF204E]"
              onClick={() => {
                renameFile();
                setIsRenameModalOpen(false);
              }}
            >
              <span className="sr-only">Rename</span>
              <span>Rename</span>
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default RenameModal;
