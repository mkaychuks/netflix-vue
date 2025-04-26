<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { useAuthStore } from "./stores/authStore";
import { onMounted } from "vue";

const authStore = useAuthStore();

onMounted(() => authStore.initAuth());
</script>

<template>
  <Navbar />
  <RouterView />
</template>
