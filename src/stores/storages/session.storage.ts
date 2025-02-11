import { createJSONStorage, StateStorage } from "zustand/middleware";

// Guarda en el session storage del navegador
const storageApi: StateStorage = {
  getItem: function (name: string): string | Promise<string | null> | null {
    const data = sessionStorage.getItem(name);
    return data;
  },
  setItem: function (name: string, value: string): void {
    sessionStorage.setItem(name, value);
  },
  removeItem: function (name: string): void | Promise<unknown> {
    console.log("removeItem", name);
  },
};

export const customSessionStorage = createJSONStorage(() => storageApi);
