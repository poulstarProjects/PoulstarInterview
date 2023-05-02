<template>
  <div class="border-b border-gray_light bg-white">
    <button
      @click="toggleAccordion()" 
      :aria-expanded="isOpen"
      :aria-controls="`collapse${uid}`"
      class="flex w-full justify-between py-[30px]"
    >

      <div class="text-lg font-bold ease-in-out duration-100" :class="[isOpen ? 'text-blue' : 'text-black']">
        <slot name="title"/>
      </div>
      
      <svg id="add-circle" xmlns="http://www.w3.org/2000/svg" width="20.004" height="20.004" viewBox="0 0 20.004 20.004" :class="{active : isOpen}">
        <path id="Vector" d="M0,0H16.67" transform="translate(1.667 10.002)" fill="none" stroke="#8a8e99" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
        <path id="Vector-2" data-name="Vector" d="M0,16.67V0" transform="translate(10.002 1.667)" fill="none" stroke="#8a8e99" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
        <path id="Vector-3" data-name="Vector" d="M0,0H20V20H0Z" fill="none" opacity="0"/>
      </svg>
    </button>
    
    <div v-show="isOpen" :id="`collapse${uid}`">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
defineProps(['uid'])
const isOpen = ref(false)
const toggleAccordion = (() => {
  isOpen.value = !isOpen.value
})
</script>

<style scoped>
svg {
  transition: all .2s ease;
}
.active {
  transform: rotate(45deg);
}
.active path {
  stroke: #395df7
}
</style>