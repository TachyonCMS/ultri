import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", {
  state: () => ({
    title: "Ultri"
  }),
  getters: {},
  actions: {
    setTitle(title) {
      this.title = title;
    }
  }
});
