import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Claim } from 'entities/claim/model'

export const useModalStore = defineStore('modal', () => {
  const type = ref('')
  const title = computed(()=>{
    switch (type.value) {
      case "info":
        return("Просмотр обращения")
      case "journal":
        return("Журнал состояний")
      default:
        return("Заголовок")
    }
  })

  const claim = ref<Claim>()
  const isOpen = ref(false)
  
  const openModal = (newType: string, newClaim: Claim)=>{
    type.value = newType 
    claim.value = newClaim
    isOpen.value = true
  }

  const closeModal = () => {
    isOpen.value = false
  }

  return { isOpen, openModal, closeModal, claim, type, title}
})
