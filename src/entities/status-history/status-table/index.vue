<script setup lang="ts">
import type { Claim } from 'entities/claim';
import { StatusRow } from 'entities/status-history';

defineProps<{
   claim: Claim
}>()
</script>

<template>
   <div class="container">
     <StatusRow v-for="status in claim.status_history " :status="status"/>
   </div>
</template>

<style scoped>
   .container{
      width: 60rem;
   }
   hr{
      border-top: 1px solid #c0c0bd;
   }
</style>