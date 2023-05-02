<template>
  <div class="grid grid-cols-3 items-center gap-[47px] mt-[150px] bg-yellow rounded-default px-default bg-[url('@/assets/icons/web/cooperation/gallary-bg.png')] bg-cover">
    <img src="@/assets/images/web/public/comment.png" alt="comment" class="col-span-1 mt-[-100px] -scale-x-100">
    <div class="w-full py-[30px] col-span-2">
      <div class="font-bold text-black text-lg mb-[30px]">مشاوره و ارتباط با ما</div>
      <div class="grid grid-cols-3 mb-[30px] gap-y-[30px] gap-x-[25px]">
        <text-field
          v-model:value="form.full_name"
          placeholder="نام و نام خانوادگی"
        />
        <select-filed
          v-model:value="form.term_category_uid"
          placeholder="عنوان دوره"
          :items="data?.data?.categories"
          textInput="name"
          valueInput="uid"
        />
        <text-field
          v-model:value="form.birthday"
          placeholder="متولد"
        />
        <select-filed
          v-model:value="form.province_id"
          placeholder="استان"
          :items="states.data"
          textInput="name"
          valueInput="id"
        />
        <text-field
          v-model:value="form.phone"
          placeholder="شماره تماس"
        />
        <select-filed
          v-model:value="form.call_time"
          placeholder="بازه تماس"
          :items="[{text: '۱۰ تا ۱۳', value: 1}, {text: '۱۶ تا ۱۹', value: 2}]"
        />
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-[15px]">
          <nuxt-icon name="web/calendar/info-circle" filled />
          <div class="text-black text-base [2.4px]">تمامی فیلدها باید پر شوند</div>
        </div>
        <button @click="submit()" :disabled="loading" class="bg-white text-black btn">
          <svg class="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="loading">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          درخواست مشاوره
        </button>
      </div>
    </div>
  </div>

  <Dialog v-model:value="dialog">
    <div class="bg-white rounded-default shadow-default w-[470px] z-[90] relative">
      <section class="p-default">
        <nuxt-icon name="web/public/success" filled v-if="dialogStatus === 'success'" class="flex items-center justify-center"/>
        <nuxt-icon name="web/public/error" filled v-if="dialogStatus === 'error'" class="flex items-center justify-center"/>
        <div class="text-green text-center" v-if="dialogStatus === 'success'">مراحل با موفقیت انجام شد</div>
        <div class="text-red text-center" v-if="dialogStatus === 'error'">مراحل با موفقیت انجام نشد</div>
        <div class="flex flex-col mt-4 gap-2" v-if="dialogStatus === 'error'">
          <div class="text-sm text-gray" v-for="(item, index) in dialogError.full_name" :key="index">{{ item }}</div>
          <div class="text-sm text-gray" v-for="(item, index) in dialogError.term_category_uid" :key="index">{{ item }}</div>
          <div class="text-sm text-gray" v-for="(item, index) in dialogError.birthday" :key="index">{{ item }}</div>
          <div class="text-sm text-gray" v-for="(item, index) in dialogError.province_id" :key="index">{{ item }}</div>
          <div class="text-sm text-gray" v-for="(item, index) in dialogError.phone" :key="index">{{ item }}</div>
          <div class="text-sm text-gray" v-for="(item, index) in dialogError.call_time" :key="index">{{ item }}</div>
        </div>
      </section>

      <footer class="pb-default px-default flex items-center justify-end gap-5">
        <button class="btn hover:bg-[#f2f4ff] ease-in-out duration-200" @click="dialog = false">
          <span class="text-blue text-lg font-semibold">بستن</span>
        </button>
      </footer>
    </div>
  </Dialog>
</template>

<script setup>
const form = reactive({
  full_name: '',
  term_category_uid: '',
  birthday: '',
  province_id: '',
  phone: '',
  call_time: '',
})

const { data, pending, error, refresh } = await useFetch(`https://panel.metafi.ir/api/v1/wb/main`)
const { data: states} = await useFetch(`https://panel.metafi.ir/api/v1/wb/country/IR/states`)

const loading = ref(false)
const dialog = ref(false)
const dialogStatus = ref(null)
const dialogError = ref(null)
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
    dialogStatus.value = 'success'
    dialog.value = true
  }).catch(err => {
    loading.value = false
    dialogStatus.value = 'error'
    dialogError.value = err.response._data.errors
    dialog.value = true
  })
}
</script>

<style scoped>

</style>