<script setup lang="ts">
defineProps<{
    type: string
    small?: boolean
}>()
</script>

<template>
   <div class="ci-badge " :class="[type, small?'cap':'b2']">
        <slot></slot>
   </div>
</template>

<style scoped>
    
    .ci-badge{
        display: flex;
        padding: 0.125rem 0.5rem;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        border-radius: 0.375rem;
    }
    .ci-badge.cap{
        padding: 0.3125rem 0.75rem;
    }
    .id{
        padding: 0rem 0.5rem;
        border: 1px solid var(--border-divider);
        background: var(--surface-card);
        color: var(--text-icons-interactive);

        /* Subtitle/S1-Semi Bold */
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.5rem; /* 150% */
        letter-spacing: 0.006rem;
    }
    .CRITICAL, .PENDING{
        background: var(--system-surface-warning);
        color: var(--text-icons-warning);
    }
    .gray{
        border: 1px solid var(--border-divider);
        background: var(--surface-card);
    }
    .red{
        color: var(--text-icons-error);
        background: var(--system-surface-error);
    }
    .HIGH, .REJECTED{
        color: white;
        background: var(--text-icons-error);
    }
    .LOW, .PAUSE, .MEDIUM, .DRAFT, .DONE{
        color: var(--text-icons-secondary);
        background: var(--surface-opacity-1);
    }
    
    .NEW{
        color: var(--text-icons-interactive);
        background: var(--system-surface-interactive);
    }
    .IN_PROGRESS{
        color: var(--text-icons-success);
        background: var(--system-surface-success);
    }
   
</style>
