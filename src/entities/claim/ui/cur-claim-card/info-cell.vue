<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
   <div class="info">
        <span class="title b2">{{ title }}</span>
        <div class="content s1">
            <slot></slot>
        </div>
   </div> 
</template>

<style scoped>
    .title{
        white-space: nowrap;
        color: var(--text-icons-secondary, #5E6271);
    }
    .info{
        display: flex;
        flex-direction: column;
        gap: .75rem
    }
    .content{
        color: var(--text-icons-primary, #141414);
    }
</style>