<template>
  <div>
    <div class="flex items-center justify-between p-default">
      <slot name="title"></slot>
      
      <button class="p-[7px] rounded-full hover:bg-[#edf0ff] ease-in-out duration-200" @click="expand = !expand">
        <slot name="headIcon"></slot>
      </button>
    </div>
    <Transition name="expand">
      <slot name="content" v-if="expand"></slot>
    </Transition>
  </div>
</template>

<script setup>
const expand = ref(false)
</script>

<style scoped>
</style>