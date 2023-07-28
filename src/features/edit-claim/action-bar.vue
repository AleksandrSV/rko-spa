<script setup lang="ts">
import { useClaimConfig, type Claim } from 'entities/claim';
import { computed, ref } from 'vue';
import { Badge } from 'shared/ui/badge';
import { useEditClaimStore } from '.';
const props = defineProps<{
    claim: Claim
}>()
const conf = computed(() => useClaimConfig(props.claim))

const {edit} = useEditClaimStore()

</script>

<template>
    <div class="a-bar">
        <div class="content">
            <Badge color="rgba(12, 163, 27, 0.08)">🕐 В работе {{ conf.inWorkFor() }}</Badge>
            <div>
                <span class="id t1">RKO-{{ claim.id }} / </span>
                <span class="type t1">{{ conf.type }}</span>
            </div>
        </div>
        <div class="btns">
            <PlButton size="medium" type="alternative">Отложить</PlButton>
            <PlButton size="medium" type="alternative">Перевести</PlButton>
            <PlButton size="medium" type="alternative" @click="edit">Сохранить изменения</PlButton>
            <PlButton size="medium">Закрыть обращение</PlButton>
        </div>
    </div>
</template>

<style scoped>
    .a-bar{
        display: flex;
        width: 100%;
        padding: 1rem 3rem;
        justify-content: space-between;
        gap: 1rem;

        border-right: 1px solid var(--surface-fill-2);
        border-bottom: 1px solid var(--surface-fill-2);
        background: var(--background-surface-area);
    }
    .content{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: start
    }
    .id{
        color: var(--text-icons-tertiary);
    }
    .type{
        color: var(--text-icons-primary);
    }
    .btns{
        display: flex;
        gap: .75rem;
        align-items: flex-end;
    }
</style>