<template>
  <div class="bg-white shadow-default py-[25px]">
    <div class="container flex items-center justify-between">
      <div class="flex items-center">
        <nuxt-link to="#" class="ml-[50px]">
          <img src="@/assets/icons/web/header/logo.png" alt="logo">
        </nuxt-link>
        <div class="flex items-center gap-5">
          <nuxt-link to="#" class="text-gray text-lg font-semibold">صفحه اصلی</nuxt-link>
          <div class="relative" ref="courseRef">
            <div @click="courseMenu = !courseMenu" class="text-gray text-lg font-semibold cursor-pointer">دوره های اصلی</div>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <div class="flex gap-5 p-[25px] absolute right-0 mt-2 min-w-max w-full rounded-[10px] z-20 bg-white shadow-default" v-if="courseMenu">
                <div class="flex flex-col gap-5">
                  <nuxt-link to="#" class="flex items-center gap-[10px]" @click="courseMenu = false">
                    <span class="flex w-2 h-2 rounded-full bg-gray_light"></span>
                    <div class="text-gray_medium text-lg">همه دوره ها</div>
                  </nuxt-link>
                  <nuxt-link to="#" class="flex items-center gap-[10px]" @click="courseMenu = false">
                    <span class="flex w-2 h-2 rounded-full bg-gray_light"></span>
                    <div class="text-gray_medium text-lg">پیش شتابدهی استعداد</div>
                  </nuxt-link>
                  <nuxt-link to="#" class="flex items-center gap-[10px]" @click="courseMenu = false">
                    <span class="flex w-2 h-2 rounded-full bg-gray_light"></span>
                    <div class="text-gray_medium text-lg">شتابدهی استعداد</div>
                  </nuxt-link>
                  <nuxt-link to="#" class="flex items-center gap-[10px]" @click="courseMenu = false">
                    <span class="flex w-2 h-2 rounded-full bg-gray_light"></span>
                    <div class="text-gray_medium text-lg">نیترو</div>
                  </nuxt-link>
                </div>
                <img src="@/assets/images/web/public/courses.jpg" alt="courses" class="rounded-default">
              </div>
            </transition>
          </div>
          <nuxt-link to="#" class="text-gray text-lg font-semibold">دوره های مکمل</nuxt-link>
          <div class="relative" ref="moreRef">
            <nuxt-icon name="web/header/more" filled @click="moreMenu = !moreMenu" class="cursor-pointer"/>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <div class="grid grid-cols-3 gap-5 p-[25px] absolute right-0 mt-2 min-w-max w-full rounded-[10px] z-20 bg-white shadow-default" v-if="moreMenu">
                <!-- <nuxt-link to="#calendar" class="flex items-center gap-[10px]" @click="moreMenu = false">
                  <span class="flex w-2 h-2 rounded-full bg-gray_light"></span>
                  <div class="text-gray_medium text-lg">تقویم آموزشی</div>
                </nuxt-link> -->
                <nuxt-link to="#" class="flex items-center gap-[10px]" @click="moreMenu = false">
                  <span class="flex w-2 h-2 rounded-full bg-gray_light"></span>
                  <div class="text-gray_medium text-lg">پادکست</div>
                </nuxt-link>
                <nuxt-link to="#" class="flex items-center gap-[10px]" @click="moreMenu = false">
                  <span class="flex w-2 h-2 rounded-full bg-gray_light"></span>
                  <div class="text-gray_medium text-lg">وبلاگ</div>
                </nuxt-link>

                <!-- <nuxt-link to="#placement" class="flex items-center gap-[10px]" @click="moreMenu = false">
                  <span class="flex w-2 h-2 rounded-full bg-gray_light"></span>
                  <div class="text-gray_medium text-lg">تعیین سطح</div>
                </nuxt-link> -->
                <nuxt-link to="#" class="flex items-center gap-[10px]" @click="moreMenu = false">
                  <span class="flex w-2 h-2 rounded-full bg-gray_light"></span>
                  <div class="text-gray_medium text-lg">ویدیوها</div>
                </nuxt-link>
                <nuxt-link to="#" class="flex items-center gap-[10px]" @click="moreMenu = false">
                  <span class="flex w-2 h-2 rounded-full bg-gray_light"></span>
                  <div class="text-gray_medium text-lg">دعوت به همکاری</div>
                </nuxt-link>

                <nuxt-link to="#" class="flex items-center gap-[10px]" @click="moreMenu = false">
                  <span class="flex w-2 h-2 rounded-full bg-gray_light"></span>
                  <div class="text-gray_medium text-lg">ارتباط با ما</div>
                </nuxt-link>
                <nuxt-link to="#" class="flex items-center gap-[10px]" @click="moreMenu = false">
                  <span class="flex w-2 h-2 rounded-full bg-gray_light"></span>
                  <div class="text-gray_medium text-lg">درباره ما</div>
                </nuxt-link>
                <nuxt-link to="#" class="flex items-center gap-[10px]" @click="moreMenu = false">
                  <span class="flex w-2 h-2 rounded-full bg-gray_light"></span>
                  <div class="text-gray_medium text-lg">درخواست نمایندگی</div>
                </nuxt-link>
 
                <nuxt-link to="#" class="flex items-center gap-[10px]" @click="moreMenu = false">
                  <span class="flex w-2 h-2 rounded-full bg-gray_light"></span>
                  <div class="text-gray_medium text-lg">اسپانسرینگ</div>
                </nuxt-link>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <nuxt-icon name="web/header/search" filled class="rounded-full p-[10px] hover:bg-[#e2e3e5] cursor-pointer ease-in-out duration-150"/>
        <nuxt-link to="#" class="mx-5 border-2 border-yellow btn">
          <nuxt-icon name="web/header/user-square" filled />
          <span class="text-yellow font-semibold text-lg">ثبت نام دوره ها</span>
        </nuxt-link>
        <button class="btn p-0" @click="phoneDialog = true">
          <nuxt-icon name="/" filled class="p-[12px] rounded-default bg-blue" />
          <span class="text-lg text-blue font-bold">ورود کاربر</span>
        </button>
        <!-- <span class="flex mx-5 h-8 w-px bg-gray_light"></span>
        <div class="relative" ref="langRef">
          <div class="relative flex items-center justify-between gap-[5px] cursor-pointer" @click="showLang = !showLang">
            <span class="text-black text-lg font-semibold">{{ lang == 'fa' ? 'فا' : 'EN' }}</span>
            <nuxt-icon name="dashboard/courses/arrow" filled/>
          </div>
  
          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ul class="absolute left-0 mt-2 min-w-max w-full rounded-[10px] py-3 bg-white shadow-default" v-if="showLang">
              <li @click="lang = 'fa', showLang = false" class="relative cursor-pointer py-2 px-3 text-center" :class="{'bg-[#ffcd0380] text-black_title' : lang == 'fa'}">
                <span :class="[lang == 'fa' ? 'font-medium' : 'font-normal', 'block truncate']" class="flex items-center gap-[10px]">
                  <img src="@/assets/icons/web/header/iran.png" alt="iran flag">
                  فارسی
                </span>
              </li>

              <li @click="lang = 'en', showLang = false" class="relative cursor-pointer py-2 px-3 text-center" :class="{'bg-[#ffcd0380] text-black_title' : lang == 'en'}">
                <span :class="[lang == 'en' ? 'font-medium' : 'font-normal', 'block truncate']" class="flex items-center gap-[10px]">
                  <img src="@/assets/icons/web/header/english.png" alt="england flag">
                  EN
                </span>
              </li>
            </ul>
          </transition>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style>
.otp-input {
  width: 80px;
  height: 80px;
  padding: 10px;
  margin: 0;
  font-size: 30px;
  border-radius: 4px;
  border: none;
  border-bottom: 5px solid #dae0f2;
  text-align: center;
  outline: none;
}
.otp-input.is-complete {
  border-color: #395df7;
  color: #03050d;
  background: unset;
  font-weight: 600;
}
.otp-input.is-complete.error {
  border-color: #ed1c25;
  color: #ed1c25
}
</style>