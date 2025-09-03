<script setup lang="ts">
const route = useRoute();
const error = route.query.error || "Oh no! An unknown error occurred";
</script>

<template>
  <div class="card bg-base-300 container mt-4 min-h-72 mx-auto flex flex-col justify-center items-center gap-4">
    <div role="alert" class="text-center alert alert-error min-w-1/2">
      {{ error }}
    </div>
    <NuxtLink to="/" class="btn btn-primary">
      Go Home
      <Icon name="tabler:arrow-left" size="24" />
    </NuxtLink>
  </div>
</template>
