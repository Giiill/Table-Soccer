export type ModalState = {
    isAuthModalOpen: boolean;
    isRegisterModalOpen: boolean;
    isMenuModalOpen: boolean;
  };
  
  export const selectModalStatus = (state: { modalSlice: ModalState }) => state.modalSlice;