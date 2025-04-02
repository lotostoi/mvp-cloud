import { defineStore } from 'pinia';
import { registerUser } from "@/entities/user/api/userApi";
import type { RegisterFormType } from "@/features/register/model/registerSchema";
import { type Ref } from "vue";
import { type Errors } from "../model/registerSchema";
import { handleServerErrors } from "../lib/validation";
import type { RegisterResponse } from "@/shared/types/user";
import router from "@/router";
import { userStore } from "@/entities/user/service";
import type { UserStore } from "@/entities/user/service";

export const useRegisterService = defineStore('register', {
  actions: {
   async register(form: RegisterFormType, errors: Ref<Errors>) {
      const user: UserStore = userStore();
      try {
        const data: RegisterResponse = await registerUser(form);
        localStorage.setItem("access_token", data.access_token);
        user.user = data.user;
        await router.push("/main");
      } catch (err) {
        handleServerErrors(err, errors); 
      }
    }
  }
});
