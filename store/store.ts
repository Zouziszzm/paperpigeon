import { create } from "zustand";

interface AppState {
  isDeleModalOpen: boolean;
  setIsDeleteModalOpen: (open: boolean) => void;

  isRenameModalOpen: boolean;
  setIsRenameModalOpen: (open: boolean) => void;

  fileId: string | null;
  setFileId: (fileId: string) => void;

  filename: string | null;
  setFilename: (filename: string) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  fileId: null,
  setFileId: (fileId: string) => set((state) => ({ fileId })),


  filename: null,
  setFilename: (filename: string) => set((state) => ({ filename })),
  
  isDeleModalOpen:false,
  setIsDeleteModalOpen:(open) => set((state) => ({setIsDeleteModalOpen:open})),

  isRenameModalOpen:false,
  setIsRenameModalOpen:(open) => set((state) => ({isRenameModalOpen:open})),
}))
