<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";

const { user, logout } = useAuthStore();
const router = useRouter();

const handleLogout = async () => {
  try {
    await logout();
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => console.log(user?.email));
</script>

<template>
  <div class="flex justify-between items-baseline p-4 z-[100] w-full absolute">
    <!-- the home logo -->
    <RouterLink to="/">
      <h1 class="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
    </RouterLink>
    <!-- the CTA login and sign up -->
    <div v-if="user && user.email">
      <RouterLink to="/account">
        <button className="text-white pr-4">Account</button>
      </RouterLink>

      <button
        @click="handleLogout"
        className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
      >
        Logout
      </button>
    </div>
    <div v-else>
      <RouterLink to="/login">
        <button className="text-white pr-4">Sign In</button>
      </RouterLink>
      <RouterLink to="/signup">
        <button
          className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
        >
          Sign Up
        </button>
      </RouterLink>
    </div>
  </div>
</template>
