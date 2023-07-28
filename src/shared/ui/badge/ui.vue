<script setup lang="ts">
defineProps<{
    color?: string
    size?: string
    type?: string
}>()
</script>

<template>
   <div class="badge b3" :class="size, type" :style="{backgroundColor: color}">
        <slot></slot>
   </div>
</template>

<style scoped>
    .badge{
        display: flex;
        padding: 0.25rem 0.75rem;
        flex-direction: column;
        align-items: center;
        border-radius: 1.25rem;
        background: var(--surface-opacity-2);

        color: var(--text-icons-primary);
    }
    .small{
        padding: 0rem 0.5rem;
        justify-content: center;
        align-items: center;
        
        /* Body/B2-Medium */
        font-family: Inter;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem; /* 171.429% */
        letter-spacing: 0.00525rem;
        border-radius: 0.75rem;
    }
    .red{
        color: var(--text-icons-error);
        background: var(--system-surface-error);
    }
    .expired{
        color: white;
        background: var(--text-icons-error);
    }
</style>
