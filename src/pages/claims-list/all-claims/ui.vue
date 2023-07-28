<script setup lang="ts">
import { useClaimStore } from 'entities/claim';
import { ListItem } from 'entities/claim/ui/list-item';
import { DropDown } from 'shared/ui/drop-down';
import { ref } from 'vue';
import { IcoBtn } from 'shared/ui/ico-button';
import { Sort } from 'app/providers/icons'
const store = useClaimStore()
const sortBtn = {ico: Sort, active: true}
const search = ref()
</script>
<template>
    <div class="cont">
        <div class="d-flex-cb">
            <PlInputPlus class="search" placeholder="Поиск" leftIcon="Search20" width="20rem" v-model="search"/>
            <div class="filters d-flex gap-6">
                <DropDown grey placeholder="Все"/>
                <DropDown grey placeholder="Последние 30 дней"/>
                <IcoBtn size="small" :data="sortBtn"></IcoBtn>
            </div>
        </div>
        <div class="d-grid">
            <ListItem v-for="claim in store.claims" :claim="claim"/>
        </div>
    </div>
</template>

<style scoped>
    .cont{
        margin-top: 2.5rem;
        display: flex;
        width: 100%;
        padding: 1.5rem;
        flex-direction: column;
        gap: 2.5rem;

        border-radius: 1rem;
        border: 1px solid var(--border-divider);
        background: var(--background-surface-area);
    }
</style>