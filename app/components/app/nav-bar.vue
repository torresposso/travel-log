<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <AppThemeToggle />
      <button class="btn">
        Sign In with GitHub
        <Icon name="tabler:brand-github" size="24" />
      </button>
    </div>
  </div>
</template>
