import { ref } from "vue";
import { registerSchema } from "@/features/auth/model/registerSchema";
import { registerUser } from "@/entities/user/api/userApi";
import type { RegisterFormType } from "@/features/auth/model/registerSchema";
import { ValidationError } from "yup";

export function useRegisterService() {
  type Errors = {
    email: string;
    password: string;
    [key: string]: string | undefined; 
  };
  const errors = ref<Errors>({ email: "", password: "" });

  const register = async (form: RegisterFormType) => {
    try {
      await registerSchema.validate(form, { abortEarly: false });
      await registerUser(form);
    } catch (err) {
      if (err instanceof ValidationError) {
        errors.value = err.inner.reduce((acc, curr: ValidationError) => {
          if (curr.path) {
            acc[curr.path] = curr.message;
          }
          return acc;
        }, {} as Errors);
      }
    }
  };

  return { register, errors };
}
