<script setup lang="ts">
import { DividerSvg } from 'app/providers/icons';
</script>

<template>
    <img :src="DividerSvg" alt="|" class="no-select">
</template>

<style scoped>
    img{
        display: flex;
        padding: 0rem 0.5rem;
        justify-content: center;
        align-items: center;
        align-self: stretch;
    }
</style>