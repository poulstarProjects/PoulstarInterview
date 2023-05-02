<template>
  <Dialog>
    <template v-slot:header>عضویت و ورود به سایت</template>

    <template v-slot:body>
      <text-field
        v-model:value="phone"
        placeholder="شماره تماس"
      />
      <div class="flex items-center gap-[15px] mt-[30px]">
        <nuxt-icon name="web/calendar/info-circle" filled />
        <div class="text-red text-base">تمامی فیلدها باید پر شوند</div>
      </div>
    </template>

    <template v-slot:footer>
      <button class="btn hover:bg-[#f2f4ff] ease-in-out duration-200" @click="phoneDialog = false">
        <span class="text-blue text-lg font-semibold">بیخیال</span>
      </button>
      <button class="btn bg-blue">
        <span class="text-white text-lg font-semibold">مرحله بعد</span>
      </button>
    </template>
  </Dialog>
</template>

<script setup>
const phone = ref(null)
</script>

<style lang="scss" scoped>

</style>