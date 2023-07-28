<script setup lang="ts">
defineProps<{
    active?: boolean
}>()
</script>

<template>
   <div class="outer" :class="active?'active':''">
        <div class="inner s2" :class="active?'active':''">
            <slot></slot>
        </div>
   </div>
</template>

<style scoped>

.outer{
    cursor: pointer;
    display: flex;
    background: var(--buttons-secondary, #EDEDED);
    width:7.5rem;
    height: 2.5rem; 
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
}
.inner{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 116px;
    height: 36px; 
    border-radius: 2rem;
    background: var(--buttons-secondary, #EDEDED);

    color: var(--text-icons-primary, #19191A);
}
.outer:hover>.inner{
    background-color: #e7e7e7;
}
.outer:hover{
    background-color: #e7e7e7;
}
.outer.active{
    background-image: radial-gradient(
        165.232px at 0 41.4286px,
        #F6B4C6,
        #CDA4CF 11.25%,
        #7085E6 36.5548%,
        #5790D7 50.0209%,
        #1FB4B4 66.534%,
        #A4D5D5 90.4167%,
        rgba(0, 170, 170, 0) 100%
    );
}
.inner.active{
    background: var(--surface-card, #FFF);
}
.outer:hover>.inner.inner.active{
    background-color: #f6f6f6;
}
</style>
