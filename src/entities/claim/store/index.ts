import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import type {Claim, CreateReq, UpdateReq} from '../model'
import type {ClaimFilterReq} from "../model/requests/ClaimFilterReq";
import {forward, getClaims} from "../../../shared/api/claim-api";
import {useClaimService} from "../../../shared/api/commonApi";

export const useClaimStore = defineStore('claims', () => {
  const claims = ref<Claim[]>()
  const fetchClaims = async () => {
    claims.value = await getClaims();
    //   await updateClaim({
    //     "priority_reason": "OUTGOING",
    //     "priority": "MEDIUM",
    //     "assignee":"supervisor",
    //     "comment":"абоба",
    //     "documents":[]
    //   } ,6);
  }
  //неуверен надо ли с новым уи, если нет уберу
  const getClaimsByStatus = (status: string) =>{
    return claims.value?.filter(claim => claim.status == status); 
  }

  //неуверен как определять текущее обращение пусть берётся первая со статусом ин прогрес
  //потом поменять логику на реальную
  const currentClaim = computed(() =>{
    if(claims.value){
        for (const claim of claims.value!) {
            if (claim.status == "IN_PROGRESS")
                return claim;
        }
    }
    return null;
  })
  const isNew = (claim: Claim) =>{
      const date = new Date(claim.created_date);
      const now = new Date();
      const timeDiff = now.getTime() - date.getTime();
      const minutes = timeDiff / 60000;
      return minutes <= 15
  }
  function isToday(claim: Claim) {
    if (claim.pause_till){
      const date = new Date(claim.pause_till).toISOString().split('T')[0];
      const currentDate = new Date().toISOString().split('T')[0];
      return  date == currentDate;
    }
    return false
  }
  function isTomorrow(claim: Claim) {
    if (claim.pause_till){
      const date = new Date(claim.pause_till!).toISOString().split('T')[0];
      const tomorrowDateTime = new Date();
      tomorrowDateTime.setDate(tomorrowDateTime.getDate() + 1);
      const tomorrowDate = tomorrowDateTime.toISOString().split('T')[0];
      return date == tomorrowDate
    }
    return false
  }
  const sorted = ref<{[key: string]: Claim[]}>({
    new: [],
    today: [],
    tomorrow: []
  })
  //сюда бы фильтр на законченные ещё, но неуверен надо ли
  watch(claims, ()=>{
    if (claims.value){
      sorted.value = ({new: [],today: [],tomorrow: []})
      claims.value.forEach(claim => {
        if (isNew(claim))
          sorted.value.new.push(claim)
        else if (isToday(claim))
          sorted.value.today.push(claim)
        else if (isTomorrow(claim))
          sorted.value.tomorrow.push(claim)
      });
    }
  })
  return {claims, fetchClaims, getClaimsByStatus, currentClaim, sorted}
})