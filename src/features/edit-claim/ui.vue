<script setup lang="ts">
import EditNav from "./edit-nav.vue"

</script>

<template>
  <div class="gap-2 nc-container ecForm">
    <h5 class="m-0 form-title t1">Работа с задачей</h5> 
    <EditNav/>
    <RouterView/>
  </div>
</template>

<style scoped>
  .form-title{
    color: var(--text-icons-primary, #19191A);
  }
  .ecForm{
    height: 100%;

    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white !important;
    padding: 2rem;
    border-radius: 1rem;
    flex-grow: 1;
  }

</style>