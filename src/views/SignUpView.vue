<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const emailModel = ref<string>("");
const passwordModel = ref<string>("");
const error = ref<string>("");

// the authStore
const { signUp } = useAuthStore();
const navigate = useRouter();

const handleSubmit = () => {
  error.value = "";
  if (emailModel.value.length === 0) {
    error.value = "Email is required";
    return;
  }
  if (passwordModel.value.length === 0) {
    error.value = "Password is required";
    return;
  }
  try {
    signUp(emailModel.value, passwordModel.value);
    navigate.replace("/");
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <div class="w-full h-screen">
    <img
      src="https://occ-0-4305-32.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABdKCSWpRppeTZUZkQXgCLMI-sPjxCxpwNnJq5yMky7v0L8cDZhfqnDHuY6JM0o2qL9KyYCawEz35ZBmVPbUuvcRdkrplN2zry9cYyQ3sKO1ALxNZEdyw36jdKVD8cBjL69F0j3dSHgLZ2rGoVoGX9aTSWvY5KxBfaxb2ixEiUmaopOtzYsZUF7B0E7lcUYEiAZc0-8-ZQR5LTAQK.jpg?r=c56"
      alt=""
      class="hidden sm:block absolute w-full h-full object-cover"
    />
    <div class="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
    <div class="w-full fixed px-4 z-50 py-24">
      <div class="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
        <div class="max-w-[320px] mx-auto py-16">
          <h1 class="text-3xl font-bold">Sign Up</h1>
          <form
            class="w-full flex flex-col py-4"
            @submit.prevent="handleSubmit"
          >
            <input
              class="p-3 my-2 bg-gray-700 rounded"
              type="email"
              placeholder="Email"
              v-model="emailModel"
            />
            <input
              class="p-3 my-2 bg-gray-700 rounded"
              type="password"
              placeholder="Password"
              v-model="passwordModel"
            />

            <p v-if="error" class="text-red-500 font-bold">{{ error }}</p>

            <button class="bg-red-600 py-3 my-6 rounded font-bold">
              Sign Up
            </button>
            <p class="py-8">
              <span class="text-gray-600">
                Already subscribed to Netflix?
              </span>
              <RouterLink to="/login"> Sign In</RouterLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
