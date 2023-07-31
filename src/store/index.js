import { writable } from "svelte/store";

function createFormStore() {
  const defaultStore = {
    templateName: "Career",
    lifeExpectancy: 80,
    dateOfBirth: "",
    collapsed: false,
  };

  const { subscribe, update } = writable(defaultStore);

  return {
    subscribe,
    setTemplateName: (value) =>
      update((n) => {
        n.templateName = value;

        return n;
      }),
    setLifeExpectancy: (value) =>
      update((n) => {
        n.lifeExpectancy = value;

        return n;
      }),
    setDateOfBirth: (value) =>
      update((n) => {
        n.dateOfBirth = value;

        return n;
      }),
    setCollapsed: (value) =>
      update((n) => {
        n.collapsed = value;

        return n;
      }),
  };
}

export const formStore = createFormStore();
