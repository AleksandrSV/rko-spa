<script setup lang="ts">
import {ActionBar, ClaimEditor, useEditClaimStore} from "features/edit-claim";
import { watch } from "vue";
const props = defineProps(['clientId', 'claimId'])
const store = useEditClaimStore()
watch(props, () => store.fetchClaim(props.claimId))
//store.fetchClaim(props.claimId)
</script>

<template>
    <div class="d-grid container"  style="grid-template-columns: 18fr 5fr">
        <div>
            <div class="d-grid">
                <ActionBar v-if="store.claim" :claim="store.claim"/>
                <div class="d-grid gap-6 content" style="grid-template-columns: 18fr 9fr">
                    <ClaimEditor/>
                    <div class="client"></div>
                </div>
            </div>
        </div>
        <div class="chat">
        </div>
    </div>
</template>

<style scoped>
    .content{
        margin: 2rem 3rem;
    }
    .chat{
        background: white;
        height: 100%;
    }
    .client{
        width: 100%;
        height: 40rem;
        border-radius: 0.75rem;
        background: var(--surface-card);
    }
    .container{
        height: 100%;
    }
</style>