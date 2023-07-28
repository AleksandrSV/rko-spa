<script setup lang="ts">

import { SideBar } from "widgets/sidebar";
import { NavBar } from "widgets/navbar"
/*import { computed, ref } from 'vue';
import { router } from "app/providers";
import { CFooter } from "widgets/footer";

const sideOpen = ref(false)
const sideControl = () =>{
    sideOpen.value = !sideOpen.value
}
const curRoute = computed(()=>router.currentRoute.value.name?.toString())*/
</script>

<template>
    <div class="d-flex container">
        <SideBar/>
        <div class="nm-cont d-flex">
            <NavBar/>
            <div class="main-content">
                <slot></slot>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
    .container{
        height: 100vh;
    }
    .nm-cont{
        flex-direction: column;
        flex-grow: 1;
    }
    .main-content{
        overflow-x: auto;
        height: 100%;
    }
</style>