<script setup lang="ts">
defineProps<{
    active?: boolean
}>()
</script>

<template>
   <button :class="{active: active}">
        <slot></slot>
   </button>
</template>

<style scoped>
    button{
        box-sizing: border-box;
        display: flex;
        padding: 0.3125rem 0.75rem;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        align-self: stretch;
        border-radius: 3rem;
        border: 2px solid var(--border-inactive, #DADDE7);
        background-color: white;
    }
    .active{
        border: 2px solid var(--border-active, #4164EB);
    }
    button:hover{
        background: var(--surface-opacity-1, rgba(25, 25, 26, 0.04));
    }
    
</style>
