import { create } from 'zustand';

interface UpdateFormState {
  isDifferent: boolean;
  setIsDifferent: (value: boolean) => void;
}

const useUpdateFormStore = create<UpdateFormState>((set) => ({
  isDifferent: false,
  setIsDifferent: (value: boolean) => set({ isDifferent: value }),
}));

export default useUpdateFormStore;
