import { defineStore } from "pinia";
import type { User } from "../model/user";

export const userStore = defineStore("user", {
  state: () => ({
    user: null as User | null,
  }),
});

export type UserStore = ReturnType<typeof userStore>;
