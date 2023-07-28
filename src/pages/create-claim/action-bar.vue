<script setup lang="ts">
defineEmits(['create'])
</script>

<template>
    <div class="a-bar">
        <div class="content">
            <div>
                <PlButton type="empty" icon="ArrowLeft24"  @click="$router.push('/')">Вернуться к обращениям</PlButton>
            </div>
        </div>
        <div class="btns">
            <PlButton size="medium" type="alternative">Отмена</PlButton>
            <PlButton size="medium" type="alternative">Зарегестрировать + Новое</PlButton>
            <PlButton size="medium" @click="$emit('create')">Зарегестрировать</PlButton>
        </div>
    </div>
</template>

<style scoped>
    .a-bar{
        display: flex;
        width: 100%;
        padding: 1rem 18rem 1rem 13rem;
        justify-content: space-between;
        align-items: center;
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
    }
</style>