<script setup lang="ts">

import { SideBar } from "widgets/sidebar";
import { NavBar } from "widgets/navbar"
import { computed } from "vue";
import { router } from "app/providers";

const curRoute = computed(()=>{
    if(router.currentRoute.value.matched[0])
        return router.currentRoute.value.matched[0].name?.toString()
    else return ''
})

</script>

<template>
    <div class="d-flex container">
        <SideBar/>
        <div class="nm-cont d-flex">
            <NavBar :type="curRoute"/>
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