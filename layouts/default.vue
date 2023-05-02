<template>
  <NuxtLoadingIndicator :height="0" :throttle="0" :duration="0">
    <loading />
  </NuxtLoadingIndicator>
  <div class="font-yekan rtl">
    <div class="fixed top-0 bottom-0 right-0 left-0">
      <Bubble class="w-[38px] h-[38px] absolute top-[-10px] right-[10px]" />
      <Bubble class="w-[60px] h-[60px] absolute top-[5px] left-[20px]" />
      <Bubble class="w-[38px] h-[38px] absolute bottom-[100px] right-[75px]" />
      <Bubble class="w-[55px] h-[55px] absolute top-[250px] right-[100px]" />
      <Bubble class="w-[45px] h-[45px] absolute top-[200px] left-[100px]" />
      <Bubble class="w-[55px] h-[55px] absolute bottom-[50px] left-[75px]" />
    </div>

    <div class="relative z-10">
      <Header />
    </div>
    <div class="bg-white relative">
      <slot />
      
      <Contact />
    </div>

    <div class="relative z-10">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/web/header.vue'
import Footer from '@/components/web/footer.vue'
</script>

<style scoped>
</style>