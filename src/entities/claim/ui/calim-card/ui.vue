<script setup lang="ts">
import { useClaimConfig, type Claim } from 'entities/claim';
import { SqBadge } from 'shared/ui/sq-badge';
import { Badge } from 'shared/ui/badge';
import { Menu } from 'shared/ui/menu'
import { computed } from 'vue';
//@ts-ignore 
import Alert from '/alert.svg'

const props = defineProps<{
    type: string
    claim: Claim
}>()

const conf = useClaimConfig(props.claim)

const badgeType = computed(()=>conf.isExpired.value?'red':'gray')

</script>

<template>
    <div class="card d-grid gap-3">
        <div class="d-flex-cb">
            <div class="d-flex gap-3">
                <SqBadge type="id">rko-{{ claim.id }}</SqBadge>
                <SqBadge v-if="type=='new'" type="gray">Созданно {{ conf.createdDate.value }}</SqBadge>
                <SqBadge v-else :type="badgeType">По плану до {{ conf.pauseTill.value }}</SqBadge>
            </div>
            <Menu :items="conf.menuItems()"></Menu>
        </div>
        <div>
            <div class="name b2">{{ claim.client?.short_name }}</div>
            <div class="type s1">{{ conf.type }}</div>
            <div class="d-flex-cb">
                 <div class="theme b2">{{ conf.theme || 'Нет данных' }}</div>
                 <div class="d-flex gap-2">
                    <Badge v-if="type=='new'" size="small" type="red">{{ conf.minsFromCreation() }} мин</Badge>
                    <Badge v-else-if="conf.isExpired.value" size="small" type="expired">Просрочена</Badge>
                    <img  v-if="claim.priority=='CRITICAL'" :src="Alert"/>
                 </div>
                 
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card{
        width: 100%;
        padding: 1rem;
        border-radius: 0.75rem;
        background: var(--background-surface-area, #FFF);
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
    }
    .name{
        overflow: hidden;
        color: var(--text-icons-primary, #19191A);
        text-overflow: ellipsis;
    }
    .type{
        overflow: hidden;
        color: var(--text-icons-primary, #19191A);
        text-overflow: ellipsis;
    }
    .theme{
        overflow: hidden;
        color: var(--text-icons-secondary, #656567);
        text-overflow: ellipsis;
    }
</style>