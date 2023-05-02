<template>
  <div v-if="value" class="fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center bg-black/30 z-[100]" @click.self="$emit('update:value', false)">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  value : { type: Boolean , required: true, default: true},
})
</script>

<style>
</style>