// stores/modalStore.ts
import { create } from 'zustand';

export const ModalType = {
 GUIDE: 'guide',
 SETTINGS: 'settings',
 PROFILE: 'profile',
 PAYMENT: 'payment',
} as const;

export type ModalType = typeof ModalType[keyof typeof ModalType];

interface ModalStore {
 activeModal: ModalType | null;
 modalData: Record<string, any>;
 openModal: (type: ModalType, data?: any) => void;
 closeModal: () => void;
 isOpen: (type: ModalType) => boolean;
}

export const useModalStore = create<ModalStore>((set, get) => ({
 activeModal: null,
 modalData: {},
 
 openModal: (type, data = {}) => {
   const prevModal = get().activeModal;
   if (prevModal) {
     (document.getElementById(prevModal) as HTMLDialogElement)?.close();
   }
   
   set({ activeModal: type, modalData: data });
   setTimeout(() => {
     (document.getElementById(type) as HTMLDialogElement)?.showModal();
   }, 50);
 },
 
 closeModal: () => {
   const modal = get().activeModal;
   if (modal) {
     (document.getElementById(modal) as HTMLDialogElement)?.close();
   }
   set({ activeModal: null, modalData: {} });
 },
 
 isOpen: (type) => get().activeModal === type,
}));

export const useModal = (type: ModalType) => {
 const { openModal, closeModal, isOpen, modalData } = useModalStore();
 
 return {
   open: (data?: any) => openModal(type, data),
   close: closeModal,
   isOpen: isOpen(type),
   data: modalData,
 };
};