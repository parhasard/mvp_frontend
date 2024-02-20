// navbarStore.js
import { defineStore } from 'pinia';

export const useNavbarStore = defineStore('navbar', {
  state: () => ({
    isControlPanelActive: false,
    isPoseDisplayActive: false,
  }),
  actions: {
    toggleControlPanel() {
      this.isControlPanelActive = !this.isControlPanelActive;
    },
    togglePoseDisplay() {
      this.isPoseDisplayActive = !this.isPoseDisplayActive;
    },
  },
});
