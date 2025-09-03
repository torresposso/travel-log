<script setup lang="ts">
import AuthButton from "~/components/auth-button.vue";
</script>

<template>
  <div class="hero bg-base-200 container mx-auto mt-4">
    <div class="hero-content text-center min-h-96">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Travel Log
        </h1>
        <p class="py-6">
          Keep track of your travels and share them with your friends.
          Add locations, photo and notes to your travel log.
          Sign in with your GitHub account to get started.
        </p>
        <AuthButton />
      </div>
    </div>
  </div>
</template>
