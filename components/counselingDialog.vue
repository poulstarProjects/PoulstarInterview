<template>
  <Dialog v-if="value">
    <div class="bg-white rounded-default shadow-default w-[470px] z-[90] relative">
      <header class="p-default border-b border-gray_light text-lg font-bold text-black">درخواست مشاوره</header>

      <section class="p-default">
        <div class="grid grid-cols-2 gap-[30px]">
          <text-input
            v-model:value="form.full_name"
            label="نام و نام خانوادگی"
          />
          <select-input
            v-model:value="form.term_category_uid"
            label="عنوان دوره"
            :items="data?.data?.categories"
            textInput="name"
            valueInput="uid"
          />
          <text-input
            v-model:value="form.birthday"
            label="متولد"
          />
          <select-input
            v-model:value="form.province_id"
            label="استان"
            :items="states?.data"
            textInput="name"
            valueInput="id"
          />
          <text-input
            v-model:value="form.phone"
            label="شماره تماس"
          />
          <select-input
            v-model:value="form.call_time"
            label="بازه تماس"
            :items="[{text: '۱۰ تا ۱۳', value: 1}, {text: '۱۶ تا ۱۹', value: 2}]"
          />
          <arear-input
            v-model:value="form.message"
            label="نظر خود را تایپ کنید..."
            class="col-span-2"
          />
        </div>
        <div class="flex items-center gap-[15px] mt-[30px]">
          <nuxt-icon name="web/calendar/info-circle" filled />
          <div class="text-red text-base">تمامی فیلدها باید پر شوند</div>
        </div>
      </section>

      <footer class="pb-default px-default flex items-center justify-end gap-5">
        <button class="btn hover:bg-[#f2f4ff] ease-in-out duration-200" @click="$emit('update:value',$event.target.value)">
          <span class="text-blue text-lg font-semibold">بیخیال</span>
        </button>
        <button class="btn bg-blue" @click="submit()" :disabled="loading">
          <svg class="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="loading">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span class="text-white text-lg font-semibold">ثبت درخواست</span>
        </button>
      </footer>
    </div>
  </Dialog>
</template>

<script setup>
defineProps({
  value : { type: Boolean , required: true},
})
const form = reactive({
  full_name: '',
  term_category_uid: '',
  birthday: '',
  province_id: '',
  phone: '',
  call_time: '',
})

const dialog = ref(false)

const { data, pending, error, refresh } = await useFetch(`https://panel.metafi.ir/api/v1/wb/main`)
const { data: states} = await useFetch(`https://panel.metafi.ir/api/v1/wb/country/IR/states`)

const loading = ref(false)
const submit = () => {
  loading.value = true
  $fetch(`/wb/advice`, {
    method: 'post',
    baseURL: 'https://panel.metafi.ir/api/v1',
    headers: {
      Accept: 'application/json'
    },
    body: form
  }).then((res) => {
    loading.value = false
    useNuxtApp().$toast.success(res.message, {
      autoClose: 5000,
      dangerouslyHTMLString: true,
    });
  }).catch(err => {
    loading.value = false
    useNuxtApp().$toast.error(err.response._data.message, {
      autoClose: 5000,
      dangerouslyHTMLString: true,
    });
  })
}
</script>

<style scoped>

</style>