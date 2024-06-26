import { create } from "zustand";

interface AppState {
  isDeleteModalOpen: boolean;
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
  setFileId: (fileId: string) => set({ fileId }), // Corrected update
  
  filename: null,
  setFilename: (filename: string) => set({ filename }), // Corrected update
  
  isDeleteModalOpen: false,
  setIsDeleteModalOpen: (open) => set({ isDeleteModalOpen: open }), // Corrected update
  
  isRenameModalOpen: false,
  setIsRenameModalOpen: (open) => set({ isRenameModalOpen: open }), // Corrected update
}));

