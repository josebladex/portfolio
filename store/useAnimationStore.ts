import { create } from 'zustand';

type AnimationState = {
  isConsoleAnimating: boolean;
  startConsoleAnimation: () => void;
  stopConsoleAnimation: () => void;
};

export const useAnimationStore = create<AnimationState>(set => ({
  isConsoleAnimating: false, // Inicializado como false
  startConsoleAnimation: () => set({ isConsoleAnimating: true }),
  stopConsoleAnimation: () => set({ isConsoleAnimating: false })
}));
