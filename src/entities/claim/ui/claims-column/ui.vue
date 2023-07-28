<script setup lang="ts">
import { Badge } from 'shared/ui/badge'
import { ClaimCard } from '..';
import { useClaimStore } from 'entities/claim';

defineProps<{
    title: string,
    type: string
}>()

const cStore = useClaimStore()

</script>

<template>
    <div class="col">
        <div class="d-flex-cb w-100 no-select">
            <Badge>{{ title }}</Badge>
            <Badge>{{cStore.sorted[type].length}}</Badge>
        </div>
        <ClaimCard v-for="claim in cStore.sorted[type]" :claim="claim" :type="type" />
    </div>
</template>

<style scoped>
    
   .col{
        display: flex;
        padding: 0.75rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
        flex-grow: 1;
        width: 27rem;
        border-radius: 1rem;
        background: var(--surface-opacity-2, rgba(25, 25, 26, 0.08));
   }
</style>