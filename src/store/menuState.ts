import { create } from "zustand";

type menuState = {
  isMenuOpen: boolean;
  setIsMenuOpen: () => void;
};

const useMenuState = create<menuState>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: () =>
    set((state) => {
      return { isMenuOpen: !state.isMenuOpen };
    }),
}));

export default useMenuState;
