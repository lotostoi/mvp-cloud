<template>
  <v-form :submit="handleSubmit" class="form">
    <v-text-field
      v-model="form.email"
      label="E-mail"
      :error-messages="errors.email"
      required
    ></v-text-field>
    <v-text-field
      v-model="form.password"
      label="Password"
      :error-messages="errors.password"
      required
    ></v-text-field>
    <v-btn type="submit" color="primary" :loading="isLoading"
      >Регистрация</v-btn
    >
  </v-form>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
import { useRegisterService } from "../services/registerService";
import {
  type Errors,
} from "../model/registerSchema";
import { validateForm, isValidated } from "../lib/validation";


const errors = ref<Errors>({ email: "", password: "" });

const form = ref<{ email: string; password: string; passport: string }>({
  email: "",
  password: "",
  passport: "password_client",
});

const startValidation = ref<boolean>(false);

const isLoading = ref<boolean>(false);

validateForm(form.value, errors, startValidation);

const _isValidated = isValidated(errors);

const handleSubmit = async (): Promise<void> => {
  startValidation.value = true;
  if (_isValidated.value) {
    isLoading.value = true;
    await useRegisterService(form.value, errors);
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
  
