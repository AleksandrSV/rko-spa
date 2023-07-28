<script setup lang="ts">
//@ts-ignore
import Logo from '/logo.svg'
import {IcoBtn} from 'shared/ui/ico-button'
import { links } from './const';
</script>

<template>
    <div class="sidebar no-select">
        <div class="items">
            <img :src="Logo" alt="R" id="logo">
            <div class="top-items">
                <IcoBtn v-for="link in links.top" :data="link" />
            </div>
        </div>
        <div class="items mt-4">
            <IcoBtn v-for="link in links.bot" :data="link"/>
        </div>
    </div>
</template>

<style scoped>
    .sidebar{
        display: flex;
        width: 5rem;
        padding: 1.5rem 0;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
        border-right: 1px solid var(--surface-fill-2, #EFEFEB);
        background: var(--background-surface-area, #FFF);
    }
    .items{
        width: 3rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .top-items{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-self: stretch;
    }
</style>