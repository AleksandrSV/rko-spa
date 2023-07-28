<script setup lang="ts">
import { router } from 'app/providers';
import { BadgeBtnGrad } from 'shared/ui/badge-btn-grad';
import { Menu, type IMenuItem } from 'shared/ui/menu';

const isCur = route => router.currentRoute.value.path==route

const createItmes: IMenuItem[] = [
      {text: "Обращение", action: () => router.push(`/claim`)},
      {text: "Открытие счета"},
      {text: "Доставка"},
      {text: "Закрыть счёт"}
    ]
</script>
<template>
    <BadgeBtnGrad @click="$router.push('/')" :active="isCur('/')">Мои задачи</BadgeBtnGrad>
    <BadgeBtnGrad @click="$router.push('/all')" :active="isCur('/all')">Все задачи</BadgeBtnGrad>
    <Menu type="badge" :items="createItmes"></Menu>
</template>