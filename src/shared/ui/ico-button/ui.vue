<script setup lang="ts">
import { computed } from 'vue';
import type { BtnData } from '.';


const props = defineProps<{
    data: BtnData
    size?: string
}>()

const isSmall = computed(()=>props.size=="small")
</script>

<template>
    <div class="btn" :class="{active: data.active, small: isSmall}" @click="data.action">
        <img :src="data.ico" alt="ico">
    </div>
</template>

<style scoped>
   
    .btn{
        cursor: pointer;
        display: flex;
        padding: 0.75rem;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        background: var(--surface-opacity-1, rgba(25, 25, 26, 0.04));
    }
   
    .btn:hover{
        background-color: rgba(25, 25, 26, 0.08);
    }

    div.small{
        padding: 0.5rem 0.625rem;
        gap: 0.25rem;/*?*/
        background: var(--surface-opacity-2, rgba(25, 25, 26, 0.08));
    }

    img{
        height: 1.5rem;
        width: 1.5rem;
    }
 
    .active {
        background: var(--buttons-alternative, #E8ECFD);
    }
    .active:hover{
        background: #dbe1fa
    }
    .active>img{
        filter: invert(37%) sepia(83%) 
                saturate(3561%) hue-rotate(219deg)
                brightness(95%) contrast(94%);
    }
</style>