<script setup lang="ts">
import { onMounted } from "vue";
import { registerUser } from "../../../entities/user/api/userApi";

const register = async () => {
  try {
    const result = registerUser({
      email: "test",
      password: "ee",
    });
    console.log("====================================");
    console.log(result);
    console.log("====================================");
  } catch (e) {
    console.log("====================================");
    console.log(e);
    console.log("====================================");
  }
};

onMounted(() => {
  register();
});
</script>

<template>
  <div>
    <h1>Main</h1>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
