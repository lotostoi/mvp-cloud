import * as yup from "yup";
import { type InferType, ValidationError } from "yup";
import { watch, computed, type Ref } from "vue";

export type Errors = {
  email: string;
  password: string;
  serverError: boolean | undefined;
  [key: string]: string | boolean | undefined;
};

export const registerSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 8 characters")
    .required("Password is required"),
  passport: yup.string().required("Passport is required"),
});

export type RegisterFormType = InferType<typeof registerSchema >;

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
