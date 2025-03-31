import { registerUser } from "@/entities/user/api/userApi";
import type { RegisterFormType } from "@/features/register/model/registerSchema";
import { type Ref } from "vue";
import { type Errors } from "../model/registerSchema";
import { handleServerErrors } from "../lib/validation";

export const useRegisterService = async (
  form: RegisterFormType,
  errors: Ref<Errors>
) => {
  try {
    await registerUser(form);
  } catch (err) {
    handleServerErrors(err, errors);
  }
};
