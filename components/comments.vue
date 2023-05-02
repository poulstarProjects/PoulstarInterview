<template>
  <div class="mt-[100px] container mb-[200px]">
    <h1 class="text-black text-lg mb-[50px] font-extrabold">ثبت نظرات شما</h1>
    <div class="grid grid-cols-2 gap-[30px]">
      <text-input
        v-model:value="form.full_name"
        label="نام و نام خانوادگی شما"
      />
      <text-input
        v-model:value="form.contact"
        label="ایمیل شما"
      />
      <arear-input
        v-model:value="form.message"
        label="نظر خود را تایپ کنید..."
        class="col-span-2"
      />
    </div>
    <div class="flex items-center justify-between mt-[30px]">
      <div class="flex items-center gap-[10px]">
        <nuxt-icon name="web/blog/info" filled />
        <span class="text-base text-black [1.8px]">تمامی فیلدها باید پر شوند</span>
      </div>
      <button class="btn bg-blue" @click="submit()" :disabled="loading">
        <svg class="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="loading">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <nuxt-icon name="web/blog/send" filled />
        <span class="text-white font-semibold text-lg">ثبت نظر</span>
      </button>
    </div>
  </div>


  <Dialog v-model:value="dialog">
    <div class="bg-white rounded-default shadow-default w-[470px] z-[90] relative">
      <section class="p-default">
        <nuxt-icon name="web/public/success" filled v-if="dialogStatus === 'success'"/>
        <nuxt-icon name="web/public/error" filled v-if="dialogStatus === 'error'"/>
        <div class="text-green text-center" v-if="dialogStatus === 'success'">مراحل با موفقیت انجام شد</div>
        <div class="text-red text-center" v-if="dialogStatus === 'error'">مراحل با موفقیت انجام نشد</div>
        <div class="flex flex-col mt-4 gap-2" v-if="dialogStatus === 'error'">
          <div class="text-sm text-gray" v-for="(item, index) in dialogError.full_name" :key="index">{{ item }}</div>
          <div class="text-sm text-gray" v-for="(item, index) in dialogError.full_name" :key="index">{{ item }}</div>
          <div class="text-sm text-gray" v-for="(item, index) in dialogError.contact" :key="index">{{ item }}</div>
          <div class="text-sm text-gray" v-for="(item, index) in dialogError.message" :key="index">{{ item }}</div>
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
    contact: '',
    message: ''
  })

  const clear = () => {
    form.full_name = '',
    form.contact = '',
    form.message = ''
  }

  const loading = ref(false)
  const dialog = ref(false)
  const dialogStatus = ref(null)
  const dialogError = ref(null)

  const submit = () => {
    loading.value = true
    $fetch(`/wb/course/category/comment`, {
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
      clear()
    }).catch(err => {
      loading.value = false
      dialogStatus.value = 'error'
      dialogError.value = err.response._data.errors
      dialog.value = true
    })
  }
</script>