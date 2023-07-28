<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { defOptions } from '../const/defOptions'
import { Listbox,ListboxButton,
          ListboxOptions, ListboxOption,} from '@headlessui/vue'
import type { ReferenceData } from 'entities/reference';

const props = withDefaults(defineProps<{
  options?: ReferenceData[]
  label?: String,
  modelValue?: String,
  placeholder?: String
  grey?: boolean
}>(), {
  options: ()=> defOptions,
  placeholder: () => "Выберите из списка"
});

const emit = defineEmits(['update:modelValue'])

const selCode = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const selected = ref<ReferenceData>()
watch(selected,()=>{
  selCode.value = selected.value?.code!
})

selected.value = props.options.find(option => option.code == selCode.value) 

</script>
<template>
    <div>
      <div v-if="props.label" class="label d-flex c-flex">
        {{ label }}
      </div>
      <div>
        <Listbox v-model="selected">
          <div class="rel">
            <ListboxButton class="list-btn" :class="grey?'bg-grey':''">
              <span class="title b2" :class="selected||grey?'':'placeholder'">
                {{ selected?selected.text:placeholder }}
              </span>
              <span class="icon-cont">
                <PlIcon  color="#a6a6a8" name="ChevronDown24"/>
              </span>
            </ListboxButton>
    
            <transition
              enter-active-class="dur"
              enter-from-class="to"
              enter-to-class="from"
              leave-active-class="dur"
              leave-from-class="from"
              leave-to-class="to">
              <ListboxOptions class="options">
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="option in options"
                  :key="option.code"
                  :value="option"
                  as="template">
                  <li :class="[active ? 'active' : '', 'item',]">
                    <span :class="[selected ? 'bold' : '', 'turn',]">
                      {{ option.text }}
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
    </div>
  </template>
  
<style scoped>
  .label{
    height: 28px;
    font-weight: 500;
    font-size: 14px;
    padding: 4px;
    padding-top: 0;
    color: var(--color-text-icons-secondary);
  }
  .list-btn{
    border-radius: 0.5rem;
    border: 1px solid var(--border-inactive, #DADDE7);
    background: var(--background-surface-area, #FFF);

    padding: 0.4rem 1rem;
    align-items: center;

    height: 40px;
    position: relative; 
    padding-right: 2.5rem;
    text-align: left; 
    width: 100%; 
    cursor: pointer; 
  }
  .list-btn:hover{
    border-color: var(--color-border-hover);
  }
  .title{
    display: block; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 

    color: var(--text-icons-primary, #19191A);
  }
  .icon-cont{
    transition: .2s all ease;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute; 
    top: 0;
    bottom: 0; 
    right: 0; 
    padding-right: 0.5rem; 
    pointer-events: none;
  }
  button[aria-expanded="true"] .icon-cont{
    transition: .1s all ease;
    transform: scaleY(-1);
  }
  .dur{
    transition-duration: .2s;
  }
  .from{
    opacity: 1; 
  }
  .to{
    opacity: 0;
  }
  .rel{
    position: relative;
  }
  .options{
    max-height: 25rem;
    overflow: auto;
    border-radius: .75rem;
    z-index: 5;
    overflow: auto; 
    position: absolute; 
    padding: .5rem 0;
    margin-top: .5rem; 
    background-color: #ffffff; 
    font-size: 1rem;
    line-height: 1.5rem; 
    width: 100%; 
    -webkit-box-shadow: 3px 3px 21px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 3px 3px 21px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 3px 3px 21px 2px rgba(34, 60, 80, 0.2);
    
  }
  .active{
    border-radius: .5rem;
    background-color: #f7f7f5;
  }
  .item{
    margin: 0 .5rem;
    list-style-type: none;
    position: relative; 
    padding: .5rem 1rem;
    cursor: pointer; 
    user-select: none; 
  }
  .bold{
    font-weight: 500; 
  }
  .turn{
    display: block; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 
  }
  .placeholder{
    color: #c4c6c6
  }
  .bg-grey{
    background-color: #ededeb;
    border-color: #ededeb
  }
</style>