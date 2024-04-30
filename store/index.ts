import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    username: null as null | string,
    token: null as null | string,
    id: null as null | string,
  }),
  actions: {
    setUser(username: string, token: string, id: string) {
      this.username = username;
      this.token = token;
      this.id = id;
    },
    logout() {
        this.username = null;
        this.token = null;
        this.id = null;
    }
  },
  getters: {
    isLoggedIn: (state): boolean => {
      if (state.id) return true;
      return false;
    },
    user: (state): { username: string; id: string; token: string } => {
      return {
        username: state.username as string,
        id: state.id as string,
        token: state.token as string,
      };
    },
  },
  persist: {
    storage : window.localStorage
  }
});
