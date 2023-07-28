<script setup lang="ts">
import { Badge } from 'shared/ui/badge';
import { IcoBtn, type BtnData } from 'shared/ui/ico-button';
//@ts-ignore
import Phone from "/phone.svg"
//@ts-ignore,
import Chat from "/chat.svg"
import { DropDown } from 'shared/ui/drop-down';
import  Cell from './info-cell.vue'
import { useClaimConfig, type Claim } from 'entities/claim';
import { SqBadge } from 'shared/ui/sq-badge';
import { Divider } from 'shared/ui/divider';
import { Menu } from 'shared/ui/menu';

const props = defineProps<{
    claim: Claim
}>()

const callBtn: BtnData = {ico: Phone}
const chatBtn: BtnData = {ico: Chat}


const conf = useClaimConfig(props.claim!)

</script>

<template>
    <div class="cur-card">
            <div class="top">
                <Badge color="rgba(12, 163, 27, 0.08)">🕐 В работе {{ conf.inWorkFor() }}</Badge>
                <div class="d-flex-cb w-100">
                    <h3>{{ conf.type }}</h3>
                    <div class="d-flex gap-4 no-select">
                        <IcoBtn :data="callBtn" size="small"/>
                        <IcoBtn :data="chatBtn" size="small"/>
                        <Menu type="cur" :items="conf.menuItems()"></Menu>
                    </div>
                </div>
            </div>
            <div class="d-flex-cb pr-8">
                <!--както бы автоматически его вставлять, ну пока пусть так-->
                <Cell title="Номер заявки">
                    <SqBadge type="id">rko-{{ claim.id }}</SqBadge>
                </Cell>
                <Divider/>
                <Cell title="Дата создания">{{ conf.createdDate.value }}</Cell>
                <Divider/>
                <Cell title="Приоритет">
                    <SqBadge :type="claim.priority!">{{ conf.priority }}</SqBadge>
                </Cell>
                <Divider/>
                <Cell title="Наименование компании">{{ claim.client?.short_name }}</Cell>
                <Divider/>
                <Cell title="Тема обращения">{{ conf.theme }}</Cell>
            </div>
    </div>
</template>

<style scoped>
    .top{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .cur-card{
        margin-top: 3.5rem;
        display: flex;
        width: 100%;
        padding: 1.5rem;
        flex-direction: column;
        gap: 3rem;
        border-radius: 1.25rem;
        background: var(--surface-opacity-1, rgba(25, 25, 26, 0.04));
    }
</style>