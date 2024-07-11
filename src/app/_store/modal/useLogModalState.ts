import { create } from 'zustand';

interface Prop {
  isOpen: boolean;
  id: number;
  open: (id: number) => void;
  close: () => void;
}

const useLogModalState = create<Prop>((set) => ({
  isOpen: false,
  id: 0,
  open: (id: number) => set(() => ({ isOpen: true, id: id })),
  close: () => set(() => ({ isOpen: false, id: 0 })),
}));

export default useLogModalState;
