<script setup lang="ts">
import { computed, ref } from 'vue';
import { DropDown } from "shared/ui/drop-down"
import { useEditClaimStore } from '.';
import { useReferenceStore, type ReferenceData } from 'entities/reference';
import { storeToRefs } from 'pinia';
import { useClaimConfig } from 'entities/claim';
defineProps(['claimId', 'clientId'])
const {claim} = storeToRefs(useEditClaimStore())
const {refernces} = useReferenceStore()
const rules = {}
const category = computed(()=>{
    return refernces!.categories.find((item: ReferenceData) => item.code == claim.value!.category)!.text
})
const formRef = ref(null);
</script>

<template>
    <PlForm  v-if="claim" :key="claim.id" ref="formRef" :model="claim"  class="d-grid gap-6 w-100" :rules="rules">
        <div class="d-grid gap-4" style="grid-template-columns: 1fr 1fr .25fr">
            <DropDown label="Канал сообщений" 
            :options="refernces?.channels!" 
            v-model="claim.channel"/>
            <DropDown label="Инициатор" 
            :options="refernces?.initiatorTypes!" 
            v-model="claim.initiator_type"/>
            <div class="d-flex dir-container">
                <div class="d-flex-cb direction">
                    <h6>{{category}}</h6>
                </div>
            </div>
        </div>
        <div class="d-flex gap-4">
            <PlInputPlus
                v-model="claim.client!.inn"
                prop="clientInfo"
                label="Клиент"
                placeholder="Введите ИНН"
                width="100%"
            />
        </div>
        <div class="d-grid gap-4" style="grid-template-columns: 1fr 1.25fr">
            <DropDown label="Тип сообщения"
            :options="refernces?.claimTypes!" 
            v-model="claim.claim_type"
            />
            <DropDown label="Тема"
            :options="refernces?.claimThemes!" 
            v-model="claim.claim_theme"
            />
        </div>
        <PlInputPlus
                textarea
                v-model="claim.description"
                prop="descrClaim"
                label="Описание обращения"
                placeholder="Введите описание обращения"
                width="100%"
            />
        <div class="d-grid gap-4" style="grid-template-columns: 1fr 1.25fr">
            <DropDown label="Приоритет"
            :options="refernces?.priority!" 
            v-model="claim.priority"/>
            <PlInputPlus
                v-model="claim.priority_reason"
                prop="priority_reason"
                label="Обоснование"
                placeholder="Повышение приоритета"
                width="100%"
            />
        </div>
        <div class="d-grid gap-4" style="grid-template-columns: 1fr 1.25fr">
            <!--потом-->
            <DropDown label="Исполнитель"/>
            <PlInputPlus
                :style="{padding:'5px'}"
                v-model="claim.comment"
                prop="comment"
                label="Комментарий"
                placeholder="Опционально"
                width="100%"
            />
        </div>
      </PlForm>
      <div v-else>Не найдено</div>
</template>

<style scoped>
    .direction{
        height: 40px;
    }
    .dir-container{
        align-items: flex-end;
    }
</style>