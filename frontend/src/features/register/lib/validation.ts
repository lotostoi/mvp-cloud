import { ValidationError } from "yup";
import { watch, computed, type Ref } from "vue";
import {
  type RegisterFormType,
  registerSchema,
  type Errors,
} from "../model/registerSchema";
import { AxiosError } from "axios";

export const validateForm = (
  form: RegisterFormType,
  errors: Ref<Errors>,
  startValidation: Ref<boolean>
) => {
  watch(
    [form, startValidation],
    async ([formValue, startValidationValue]) => {
      if (startValidationValue) {
        try {
          errors.value = {} as Errors;
          await registerSchema.validate(formValue, { abortEarly: false });
        } catch (error) {
          if (error instanceof ValidationError) {
            errors.value = error.inner.reduce((acc, curr: ValidationError) => {
              if (curr.path) {
                acc[curr.path] = curr.message;
              }
              return acc;
            }, {} as Errors);
          }
        }
      }
    },
    { deep: true }
  );
};

export const isValidated = (errors: Ref<Errors>) =>
  computed(() => {
    return Object.values(errors.value).every((error) => error === "");
  });

export const handleServerErrors = (err: unknown, errors: Ref<Errors>) => {
  if (err instanceof AxiosError) {
    const serverErrors = err.response?.data?.error?.errors;
    if (typeof serverErrors === "object") {
      Object.entries(serverErrors).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          errors.value[key] = value[0];
        } else if (typeof value === "string") {
          errors.value[key] = value;
        }
      });
    }
  }
};
