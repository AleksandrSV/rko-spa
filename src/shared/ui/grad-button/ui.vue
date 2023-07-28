<script setup lang="ts">
//вцелом пойдет, но стремноватый градиент
</script>

<template>
   <div class="outer">
        <div class="inner">
            <slot></slot>
        </div>
   </div>
</template>

<style scoped>
.outer{
    cursor: pointer;
    display: flex;
    background-image: radial-gradient(
        91.7525px at 0 49.7143px,
        #F6B4C6,
        #CDA4CF 11.25%,
        #7085E6 36.5548%,
        #5790D7 50.0209%,
        #1FB4B4 66.534%,
        #A4D5D5 90.4167%,
        #00AAAA 100%
    );
    width:3rem;
    height: 3rem; 
    border-radius: .75rem;
    justify-content: center;
    align-items: center;
}
.inner{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px; 
    border-radius: .6rem;
    background: var(--buttons-secondary);

    color: var(--text-icons-primary);
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.00675rem;
}
.outer:hover>.inner{
    background-color: #ededed;
}
</style>
