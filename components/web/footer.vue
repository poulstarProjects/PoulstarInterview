<template>
  <div class="py-[50px] border-b border-[#393b40] bg-paragraph">
    <div class="flex justify-between container">
      <div class="flex flex-col gap-[30px] max-w-3xl">
        <div class="font-bold text-lg [1.8px] text-white">موسسه شتابدهی استعداد و آموزش برنامه نویسی کودکان و نوجوانان</div>
        <div class="text-gray_light text-base [1.2px] leading-[30px]">
          پل استار فقط یک موسسه آموزش برنامه نویسی نیست! بلکه پلی به سمت پیشرفت فرزندان مان است. فرزندان ما دارای استعداد های بالقوه ای هستن که میتونیم در کنار هم این استعداد رو شتابدهی کنیم تا در آینده بتونن عضوی موثر در جامعه باشن.
        </div>
      </div>

      <div class="flex flex-col justify-between">
        <div class="flex gap-[30px] justify-end">
          <nuxt-link to="#" class="bg-yellow btn">
            <nuxt-icon name="web/footer/user-square" filled />
            <span class="text-white font-semibold text-lg [2px]">ثبت نام دوره ها</span>
          </nuxt-link>
          <button class="p-[13px] rounded-default bg-gray" @click="scrollToTop()">
            <nuxt-icon name="web/footer/arrow-up" filled />
          </button>
        </div>
        <div class="flex items-center gap-5">
          <button>
            <img src="@/assets/icons/web/footer/irannsr.png" alt="flag">
          </button>
          <button>
            <img src="@/assets/icons/web/footer/34.png" alt="flag">
          </button>
          <button>
            <img src="@/assets/icons/web/footer/enamad.png" alt="flag">
          </button>
          <button>
            <img src="@/assets/icons/web/footer/samandehi.png" alt="flag">
          </button>
          <button>
            <img src="@/assets/icons/web/footer/etehadie.png" alt="flag">
          </button>
          <button>
            <img src="@/assets/icons/web/footer/shetab.png" alt="flag">
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="pt-[50px] bg-paragraph">
    <div class="flex justify-between container">
      <div class="flex items-center gap-[60px]">
        <div class="flex items-center gap-[10px]">
          <nuxt-icon name="web/footer/call" filled class="p-[13px] rounded-default bg-blue"/>
          <a href="tel:+981334911" class="text-white font-bold text-lg ltr">013 34911</a>
        </div>
        <div class="flex items-center gap-[10px]">
          <nuxt-icon name="web/footer/map" filled class="p-[13px] rounded-default bg-gray"/>
          <div class="flex items-center gap-[9px]">
            <span class="text-white text-lg font-bold">آدرس شعبه مرکزی</span>
            <span class="text-gray_light text-base [1.63px]">گیلان، رشت، گلسار، ابتدای بلوار دیلمان</span>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-[30px]">
        <a href="https://whatsapp.com" target="_blank" @mouseenter="selected = 1" @mouseleave="selected = null" class="h-8">
          <Transition name="fade" mode="out-in">
            <img src="@/assets/icons//web/footer/whatsapp-y.png" alt="social" v-if="selected == 1">
            <img src="@/assets/icons//web/footer/whatsapp.png" alt="social" v-else>
          </Transition>
        </a>
        <a href="https://facebook.com" target="_blank" @mouseenter="selected = 2" @mouseleave="selected = null">
          <Transition name="fade" mode="out-in">
            <img src="@/assets/icons//web/footer/facebook-y.png" alt="social" v-if="selected == 2">
            <img src="@/assets/icons//web/footer/facebook.png" alt="social" v-else>
          </Transition>
        </a>
        <a href="https://twitter.com" target="_blank" @mouseenter="selected = 3" @mouseleave="selected = null">
          <Transition name="fade" mode="out-in">
            <img src="@/assets/icons//web/footer/twitter-y.png" alt="social" v-if="selected == 3">
            <img src="@/assets/icons//web/footer/twitter.png" alt="social" v-else>
          </Transition>
        </a>
        <a href="https://telegram.me" target="_blank" @mouseenter="selected = 4" @mouseleave="selected = null">
          <Transition name="fade" mode="out-in">
            <img src="@/assets/icons//web/footer/telegram-y.png" alt="social" v-if="selected == 4">
            <img src="@/assets/icons//web/footer/telegram.png" alt="social" v-else>
          </Transition>
        </a>
        <a href="https://instagram.com" target="_blank" @mouseenter="selected = 5" @mouseleave="selected = null">
          <Transition name="fade" mode="out-in">
            <img src="@/assets/icons//web/footer/instagram-y.png" alt="social" v-if="selected == 5">
            <img src="@/assets/icons//web/footer/instagram.png" alt="social" v-else>
          </Transition>
        </a>
      </div>
    </div>
  </div>

  <div class="py-[50px] bg-paragraph">
    <div class="flex justify-between container">
      <div class="flex flex-col gap-[30px]">
        <div class="text-white font-bold text-lg">دسترسی سریع</div>
        <div class="grid grid-cols-3 gap-x-[120px] gap-y-[20px]">
          <nuxt-link to="#" class="text-gray_light text-base [1.28px]">صفحه اصلی</nuxt-link>
          <nuxt-link to="#" class="text-gray_light text-base [1.28px]">وبلاگ</nuxt-link>
          <nuxt-link to="#" class="text-gray_light text-base [1.28px]">دوره های اصلی</nuxt-link>
          <nuxt-link to="#" class="text-gray_light text-base [1.28px]">دعوت به همکاری</nuxt-link>
          <nuxt-link to="#" class="text-gray_light text-base [1.28px]">ارتباط با ما</nuxt-link>
        </div>
      </div>

      <div class="flex flex-col w-[470px]">
        <div class="text-white font-bold text-lg mb-[30px]">خبرنامه پل استار</div>
        <div class="text-gray_light text-base [1.28px] mb-[25px]">شما میتوانید برای دسترسی به مطالب روز مشترک ما شوید.</div>
        <div class="flex items-center justify-between relative h-[65px] rounded-[15px] bg-[#393b40]">
          <input type="text" placeholder="ایمیل خود را وارد کنید..." class="bg-transparent outline-none w-full h-full px-5 placeholder:text-gray text-gray_light text-base placeholder:[1.2px]">
          <span class="w-px h-[45px] bg-gray rounded-[0.5px]"></span>
          <button class="min-w-fit text-yellow font-bold text-base [2.08px] py-[10px] px-default hover:bg-[#f3cd321a] h-full rounded-tl-[15px] rounded-bl-[15px] ease-in-out duration-150">ثبت کن</button>
        </div>
      </div>
    </div>
  </div>

  <div class="py-5 bg-[#27282b]">
    <div class="container flex items-center justify-between">
      <div class="text-[#b0b3b7] font-semibold [1.6px]">
        تمامی حقوق سایت متعلق به “موسسه آموزشی پل استار“ می باشد . انتشار مطالب تنها با ذکر منبع و مجوز کتبی امکان پذیر است
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const selected = ref(null)
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: scale(0.92);
  opacity: 0;
}
</style>