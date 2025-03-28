<template>
  <form @submit.prevent="handleSubmit" class="form">
    <input
      v-model="form.email"
      label="Email"
      :class="{ error: errors.email }"
    />
    <input
      v-model="form.password"
      label="Password"
      type="password"
      :error="errors.password"
      :class="{ error: errors.password }"
    />
    <button type="submit">Register</button>
  </form>
</template>
  
  <script setup>
import { ref } from "vue";
import { useRegisterService } from "../services/registerService";

const { register, errors } = useRegisterService();
const form = ref({ email: "", password: "" });

const handleSubmit = async () => {
  await register(form.value);
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  input {
    height: 30px; 
    padding: 8px 12px; 
    font-size: 14px; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease; 

    &:focus {
      border-color: #007bff; 
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
    }

    &::placeholder {
      color: #999; 
    }

    &.error {
      border-color: red;
    }
  }

  button {
    height: 40px; 
    padding: 8px 16px; 
    font-size: 14px; 
    font-weight: 500; 
    color: #fff; // Цвет текста
    background-color: #007bff; // Цвет фона
    border: none; // Убираем границу
    border-radius: 4px; // Скругление углов
    cursor: pointer; // Курсор в виде указателя
    transition: background-color 0.3s ease, transform 0.2s ease; // Плавные переходы

    &:hover {
      background-color: #0056b3; // Цвет фона при наведении
    }

    &:active {
      transform: scale(0.98); // Легкое уменьшение при нажатии
    }

    &:focus {
      outline: none; // Убираем стандартный outline
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25); // Тень при фокусе
    }

    &:disabled {
      background-color: #ccc; // Цвет фона для неактивной кнопки
      cursor: not-allowed; // Курсор "недоступно"
    }
  }
}
</style>
  
