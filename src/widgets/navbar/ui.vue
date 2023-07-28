<script setup lang="ts">
import { IcoBtn } from 'shared/ui/ico-button';
//@ts-ignore
import Exit from '/exit.svg'
import { GradBtn } from 'shared/ui/grad-button';
//@ts-ignore
import {useKeycloak} from "shared/lib/vue-keycloak"
import { ref } from 'vue';
const {keycloak} = useKeycloak();

//шоб вуе не ругался
const search = ref()
</script>

<template>
    <nav class="no-select ">
        <PlInputPlus class="search" placeholder="Поиск" leftIcon="Search20" width="20rem" v-model="search"/>
        <div class="d-flex gap-4">
            <GradBtn>KK</GradBtn>
            <IcoBtn :data="{ico: Exit, action: () => keycloak.logout()}"/>
        </div>
    </nav>
    <div class="temp"></div>
</template>

<style scoped>
    
    nav{
        border-bottom: 1px solid #EFEFEB;
        height: 5rem;
        flex-shrink: 0;
        background: var(--background-surface-area, #FFF);
        display: flex;
        padding-left: 3rem;
        padding-right: 2.5rem;
        align-items: center;
        justify-content: space-between;
    }
</style>
