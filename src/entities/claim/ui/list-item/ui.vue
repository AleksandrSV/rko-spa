<script setup lang="ts">
import { useClaimConfig, type Claim } from 'entities/claim';
import { SqBadge } from 'shared/ui/sq-badge';
import { computed } from 'vue';


const props = defineProps<{
    claim: Claim
}>()

const conf = useClaimConfig(props.claim)

const inProgress = computed(()=>props.claim.status=='IN_PROGRESS')
const workDate = computed(()=>inProgress.value?`В работе с${conf.updDate.value}`:`По плану до ${conf.pauseTill.value}`)
</script>

<template>
    <div class="d-grid item gap-6" style="grid-template-columns: 2fr 1fr 1fr 2fr 2fr 1fr 1fr">
        <div class="type">
            <router-link class="b2" :to="`/client/${claim.client?.id}/${claim.id}`">{{conf.type}}</router-link>
        </div>
        <div class="cell">
            <div class="b2">Обращение</div>
            <SqBadge :type="claim.priority!" small>{{ conf.priority }}</SqBadge>
        </div>
        <div class="cell">
            <div class="b2">rko-{{claim.id}}</div>
            <SqBadge :type="claim.status" small>{{ conf.status }}</SqBadge>
        </div>
        <div class="cell">
            <div class="b2">{{ claim.client?.short_name }}</div>
            <div class="inn cap">ИНН: {{ claim.client?.inn }}</div>
        </div>
        <div class="cell">
            <SqBadge :type="inProgress?'gray':'red'">{{workDate}}</SqBadge>
        </div>
        <div  class="cell b2">{{ claim.assignee }}</div>
        <div  class="cell b2">{{ conf.createdDate.value }}</div>
    </div>
</template>

<style scoped>
   .item{
        margin: 1rem 0;
   }
   .cell{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .4rem
   }
   .inn{
        color: var(--text-icons-secondary, #656567);
   }
</style>