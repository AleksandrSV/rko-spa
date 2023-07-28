<script setup lang="ts">
import { IcoBtn } from 'shared/ui/ico-button';
import { Search, Exit } from 'app/providers/icons'
import { GradBtn } from 'shared/ui/grad-button';
import { useKeycloak } from "shared/lib/vue-keycloak"
import { ref } from 'vue';

const {keycloak} = useKeycloak();
defineProps<{
    type?: string
}>()
//шоб вуе не ругался 
const search = ref()
</script>

<template>
    <nav class="no-select">
        <PlInputPlus v-if="type=='claims-list'" class="search" placeholder="Поиск"
              leftIcon="Search20" width="20rem" v-model="search"/>
        <div v-else class="d-flex-cb gap-2">
            <router-link to="/" class="b2 main">Главная</router-link>
            <PlIcon color="#656567" name="ChevronRight20"/>
            <span class="b2 cur-page" v-if="type=='client'">Обращение</span>
            <span class="b2 cur-page" v-if="type=='create-claim'">Создание обращения</span>
        </div>
        <div class="d-flex gap-4">
            <IcoBtn v-if="type!='claims-list'" :data="{ico: Search}"/>
            <GradBtn>KK</GradBtn>
            <IcoBtn v-if="type=='claims-list'" :data="{ico: Exit, action: () => keycloak.logout()}"/>
        </div>
    </nav>
</template>

<style scoped>
    nav{
        border-bottom: 1px solid #EFEFEB;
        height: 5rem;
        flex-shrink: 0;
        background: var(--background-surface-area);
        display: flex;
        padding-left: 3rem;
        padding-right: 2.5rem;
        align-items: center;
        justify-content: space-between;
    }
    .main{
        text-decoration: none;
        color: var(--text-icons-secondary);
    }
    .cur-page{
        cursor: pointer;
        color: var(--text-icons-interactive);
    }
</style>
