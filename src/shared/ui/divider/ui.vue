<script setup lang="ts">
//@ts-ignore
import  DividerSvg  from '/divider.svg';
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