<script setup lang="ts">
//@ts-ignore
import Austro from '/astronaut.svg'

</script>

<template>
    <div class="em-card">
       <img :src="Austro" alt="">
       <div class="bot">
            <h4>Нет задач в работе</h4>
            <span class="s2">Выберите задачу и из списка ниже</span>
       </div>
    </div>
</template>

<style scoped>
    .bot{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        align-self: stretch;
    }
    .em-card{
        margin-top: 3.5rem;
        display: flex;
        width: 84rem;
        height: 14.5rem;
        padding: 0.75rem 1.5rem 1.5rem 1.5rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        flex-shrink: 0;

        border-radius: 1.25rem;
        background: var(--surface-opacity-1, rgba(25, 25, 26, 0.04));
    }
    h4{
        color: var(--text-icons-primary, #19191A);
        text-align: center;
        margin: 0;
    }
    span{
        color: var(--text-icons-secondary, #656567);
        text-align: center;
    }
</style>