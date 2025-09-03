<script setup lang="ts">
import AuthButton from "../auth-button.vue";
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <AppThemeToggle />
      <AuthButton />
    </div>
  </div>
</template>
