<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="flex justify-between items-baseline p-4 z-[100] w-full absolute">
    <!-- the home logo -->
    <RouterLink to="/">
      <h1 class="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
    </RouterLink>
    <!-- the CTA login and sign up -->
    <div>
      <RouterLink to="/account">
        <button className="text-white pr-4">Account</button>
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
