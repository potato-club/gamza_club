import { create } from "zustand";

interface Prop {
  count: number;
  inc: () => void;
  dec: () => void;
}

const useSignupState = create<Prop>((set) => ({
  count: 1,
  inc: () =>
    set((state) => {
      if (state.count < 3) {
        return { count: state.count + 1 };
      }
      return state;
    }),
  dec: () =>
    set((state) => {
      if (state.count > 1) {
        return { count: state.count - 1 };
      }
      return state;
    }),
}));

export default useSignupState;
