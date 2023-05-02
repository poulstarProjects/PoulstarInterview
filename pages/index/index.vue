<template>
  <div class="pt-[60px] relative">
    <section class="bg-[url('@/assets/icons/web/home/mask-gray.png')] bg-left bg-cover bg-opacity-10">
      <div class="flex items-center gap-[100px] container">
        <div class="flex flex-col">
          <div class="flex items-center gap-5">
            <h1 class="text-blue text-[38px] font-extrabold">پل استار</h1>
            <!-- <span class="text-yellow bg-[#ffcd031a] py-[6px] px-[10px] rounded-[10px] text-[17px] font-bold">سنین پایه</span> -->
          </div>
          <h3 class="text-black text-[28px] font-bold mt-[2px]">
            مبتکر شتابدهی استعداد و آموزش زبان برنامه نویسی در ایران
          </h3>
          <h3 class="text-black text-[18px] font-bold mt-[2px]">
            فرزندانمان را برای زندگی در دنیای دیجیتال آماده کنیم
          </h3>
          <p class="paragraph mt-[50px] max-w-[80%]">
            پل استار فقط یک موسسه آموزش برنامه نویسی نیست! بلکه پلی به سمت پیشرفت فرزندان مان است. فرزندان ما دارای
            استعداد های بالقوه ای هستن که میتونیم در کنار هم این استعداد رو شتابدهی کنیم تا در آینده بتونن عضوی موثر در
            جامعه باشن.
          </p>
          <div class="flex items-center mt-20 gap-[50px]">
            <nuxt-link to="#" class="bg-blue btn">
              <nuxt-icon name="web/home/user-square" filled/>
              <span class="font-semibold text-lg text-white">ثبت نام دوره ها</span>
            </nuxt-link>
            <a href="#request"
               class="bg-gray_medium/10 backdrop-blur-[0.8px] py-[11px] px-[15px] rounded-default flex items-center gap-[15px]">
              <nuxt-icon name="web/home/call-calling" filled/>
              <span class="font-semibold text-lg text-black">مشاوره رایگان</span>
            </a>
          </div>
        </div>
        <div class="min-w-fit relative z-[1]">
          <img src="@/assets/icons/web/home/home.png" alt="" class="min-w-max">
          <span
              class="w-[46px] h-[46px] rounded-full bg-[#f7a739] absolute right-[-10px] top-[60px] z-10"
          ></span>
          <span
              class="w-[52px] h-[52px] rounded-full bg-blue absolute right-[10px] bottom-[2px] z-10"
          ></span>
          <span
              class="w-[26px] h-[26px] rounded-full bg-[#53b848] absolute left-[-10px] bottom-[60px] z-10"
          ></span>
          <span
              class="w-[88px] h-[88px] rounded-full bg-red absolute left-[-45px] top-[50px]"
          ></span>
          <span
              class="w-[250px] text-center p-5 rounded-full bg-gradient-to-b from-[#f7a739]/5 to-[#f7a739]/10 absolute left-0 bottopm-[50px] z-10 backdrop-blur-[8px]"
          >
            مسیر درست برای آینده شغلی فرزندان شما 😇
          </span>
        </div>
      </div>
    </section>

    <section class="flex items-center gap-[75px] container mt-[150px]">
      <div class="min-w-fit group relative">
        <span class="flex items-center justify-center absolute top-0 bottom-0 right-0 left-0">
          <button @click="showVideo = true" class="bg-white/20 p-3 rounded-full backdrop-blur-[3.4px] relative">
            <nuxt-icon name="web/cooperation/play" filled/>
          </button>
        </span>
        <img src="@/assets/images/web/home/introduction.png" alt="introduction" class="min-w-max">
      </div>
      <div class="flex flex-col">
        <h1 class="text-black text-[32px] font-bold">معرفی پل استار</h1>
        <h3 class="text-blue text-base font-semibold mt-[10px]">راه ستاره شدن فرزندان شما ⭐️</h3>
        <p class="paragraph mt-[30px]">
          آموزش مهارت ارزشمند برنامه نویسی بچه هارو وارد یه دنیای پویا و به روز میکنه که میتونه تاثیرات فوق العاده ای رو
          در زندگی آینده اونها داشته باشه
          پل استار اولین موسسه ای که به صورت تخصصی با تلفیق علوم مختلف به اموزش زبان برنامه نویسی به کودک و نوجوان
          پرداخته تا درک بهتری نسبت به این مهارت و ارتباطش با سایر علوم پیدا کنن
        </p>
        <div class="flex items-center mt-[30px]">
          <button @click="showVideo = true"
                  class="bg-gray_medium/10 backdrop-blur-[0.8px] pl-[30px] rounded-[32px] flex items-center gap-[15px]">
            <nuxt-icon name="web/home/play-cricle" filled class="p-[17px] rounded-full bg-yellow"/>
            <span class="font-bold text-[17px] text-black">پل استار در یک نگاه</span>
          </button>
        </div>
      </div>

      <Dialog v-model:value="showVideo">
        <div class="rounded-default w-[570px] relative m-default overflow-hidden">
          <video
              src="https://poul-star-02.s3.ir-thr-at1.arvanstorage.ir/%D9%85%D8%B9%D8%B1%D9%81%DB%8C-%D9%BE%D9%84-%D8%A7%D8%B3%D8%AA%D8%A7%D8%B1.mp4"
              controls width="570"></video>
        </div>
      </Dialog>
    </section>

    <section class="mt-[150px] text-center relative pb-[40px]">
      <div class="container z-10 relative">
        <h1 class="text-black text-[32px] font-bold">دوره های تخصصی</h1>
        <h3 class="text-blue text-base font-semibold mt-[10px]">دوره های اصلی و آنلاین موسسه پل استار</h3>

        <div class="grid grid-cols-3 gap-[30px] mt-[50px]">
          <div class="relative rounded-[30px] overflow-hidden h-fit" v-for="item in data?.data?.categories"
               :key="item.uid">
            <img :src="item.intro_image_path" :alt="item.intro_image_alt">
            <div
                class="text-right rounded-[30px] py-[30px] px-5 bg-white/75 backdrop-blur-[30px] absolute bottom-0 right-0 left-0">
              <div class="text-lg font-bold text-black truncate">{{ item.name }}</div>
              <p class="text-base text-gray mt-5 overflow-hidden max-h-[78px] leading-[26px]">{{ item.detail }}</p>
              <div class="flex items-center gap-[25px] mt-[15px]">
                <div class="flex items-center gap-[10px]">
                  <nuxt-icon name="web/courses/briefcase" filled/>
                  <span class="text-base text-black font-semibold">{{ item.terms.length }} ترم</span>
                </div>
                <div class="flex items-center gap-[10px]">
                  <nuxt-icon name="web/courses/heart-circle" filled/>
                  <span class="text-base text-black font-semibold">93% رضایت</span>
                </div>
              </div>
              <div class="flex items-center justify-between mt-[25px]">
                <nuxt-link to="#" class="btn hover:bg-[#f2f4ff] ease-in-out duration-200">
                  <span class="text-blue text-lg font-semibold">توضیحات بیشتر</span>
                </nuxt-link>
                <nuxt-link to="#" class="btn bg-blue">
                  <nuxt-icon name="web/courses/user-square" filled/>
                  <span class="text-white text-lg font-semibold">ثبت نام</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="h-[550px] w-[70%] rounded-tl-[50px] rounded-bl-[50px] bg-yellow absolute right-0 bottom-0">
        <div class="bg-[url('@/assets/icons/web/home/mask.png')] bg-right bg-cover flex w-full h-full"></div>
      </div>
    </section>

    <section class="mt-[150px]">
      <div class="container text-center">
        <h1 class="text-black text-[32px] font-bold">دوره های مکمل</h1>
        <!-- <h3 class="text-blue text-base font-semibold mt-[10px]">دیگر دوره های آنلاین و مکمل موسسه پل استار</h3> -->
      </div>
      <swiper
          :spaceBetween="30"
          :slidesPerView="'auto'"
          dir="rtl"
          class="relative mt-[30px] z-30"
      >
        <swiper-slide class="max-w-[400px] bg-white rounded-default overflow-hidden relative shadow-default"
                      v-for="item in data?.data?.complement" :key="item.uid">
          <div class="p-[30px]">
            <div class="flex gap-[15px]">
              <!-- <div class="min-w-[105px] h-[105px] rounded-default bg-[url('@/assets/images/web/home/iot.jpg')] bg-center bg-cover"></div> -->
              <img :src="item.icon_path" alt="">
              <div class="flex flex-col">
                <h1 class="text-base text-black font-bold">{{ item.name }}</h1>
                <p class="paragraph max-h-[60px] overflow-hidden">{{ item.detail }}</p>
              </div>
            </div>
            <div class="flex items-center gap-[20px] mt-[22px]">
              <div class="flex items-center gap-[10px]">
                <nuxt-icon name="web/courses/timer" filled/>
                <span class="text-black font-semibold text-base">{{ item.teaching_hours }} ساعت</span>
              </div>
              <div class="flex items-center gap-[10px]">
                <nuxt-icon name="web/courses/briefcase" filled/>
                <span class="text-black font-semibold text-base">{{ item.session_count }} جلسه</span>
              </div>
            </div>
            <div class="flex items-center justify-between mt-5">
              <div class="flex items-center gap-[10px]">
                <nuxt-icon name="web/courses/heart-circle" filled/>
                <span class="text-base text-black font-semibold">{{ item.satisfaction }}% رضایت</span>
              </div>
              <nuxt-link to="" class="btn bg-blue">
                <nuxt-icon name="web/courses/user-square" filled/>
                <span class="text-white text-lg font-semibold">ثبت نام</span>
              </nuxt-link>
            </div>
          </div>
        </swiper-slide>

        <!-- <div class="z-10 absolute right-0 top-0 bottom-0 w-[250px] bg-gradient-to-r from-[#ffffff00] to-white"></div>
        <div class="z-10 absolute left-0 top-0 bottom-0 w-[250px] bg-gradient-to-l from-[#ffffff00] to-white"></div> -->
      </swiper>
    </section>

    <section class="mt-[150px] relative">
      <div class="grid grid-cols-12 container py-[50px] bg-blue rounded-tr-[50px] rounded-br-[50px] pr-default">
        <div class="relative z-10 col-span-7 ml-[50px]">
          <h1 class="text-white text-[70px] font-bold font-hodhod">کلوب پل استار</h1>
          <div class="text-[#fff6eb] text-base font-bold mt-5">به اجتماع متخصصین پل استاری بپیوندید.</div>
          <p class="paragraph text-white mt-[30px]">
            هدف ما در پل استار رسوندن بچه ها به موفقیت واقعی هستش موفقیتی که متناسب با نیاز روز دنیاست و محدود به نقطه
            جغرافیایی خاصی نیست.
            اما این پایان راه نیست و فقط بخشی از خدماتی هستش که بچه ها اینجا دریافت میکنن . پل استار به واسطه آموزش
            مهارت برنامه نویسی رو عزت نفس و اعتماد به نفس بچه ها کار میکنه و رو مهارت های نرم مثل کارگروهی، هوش دیجیتال،
            خلاقیت و درکل ضعف هایی که ممکنه بچه ها در آینده باهاش روبرو بشن هم تاثیرگذار که در نهایت باعث میشه اونها چشم
            انداز وسیع تری نسبت به دنیا و عصری که توش زندگی میکنن پیدا کنن تا بتونن انتخاب های دقیق تر و حساب شده تری
            برای ادامه تحصیل و آینده کاریشون داشته باشن و برای حضور در تمامی فضاهای بین المللی آماده بشن.
          </p>
          <div class="flex items-center justify-between mt-[30px]">
            <div
                class="flex flex-col justify-center items-center py-[30px] bg-white/20 backdrop-blur-[1.5px] gap-[15px] w-[135px] rounded-default">
              <nuxt-icon name="web/home/people" filled/>
              <div class="text-white text-base font-bold">کار گروهی</div>
            </div>
            <div
                class="flex flex-col justify-center items-center py-[30px] bg-white/20 backdrop-blur-[1.5px] gap-[15px] w-[135px] rounded-default">
              <nuxt-icon name="web/home/folder-open" filled/>
              <div class="text-white text-base font-bold">پروژه کارفرما</div>
            </div>
            <div
                class="flex flex-col justify-center items-center py-[30px] bg-white/20 backdrop-blur-[1.5px] gap-[15px] w-[135px] rounded-default">
              <nuxt-icon name="web/home/cup" filled/>
              <div class="text-white text-base font-bold">بازی و رقابت</div>
            </div>
            <div
                class="flex flex-col justify-center items-center py-[30px] bg-white/20 backdrop-blur-[1.5px] gap-[15px] w-[135px] rounded-default">
              <nuxt-icon name="web/home/messages" filled/>
              <div class="text-white text-base font-bold">ارتباط با دیگران</div>
            </div>
          </div>
          <div class="flex items-center justify-between mt-[60px]">
            <div class="flex items-center gap-[10px]">
              <nuxt-icon name="web/home/teacher-white" filled class="p-2 rounded-[15px] bg-yellow"/>
              <span class="text-white text-base font-semibold">مختص فراگیران پل استار</span>
            </div>
            <button class="bg-white text-blue btn">به زودی</button>
          </div>
        </div>
        <div class="relative z-10 col-span-5">
          <img src="@/assets/images/web/home/6.jpg" alt="clube" class="rounded-[50px] w-full">
        </div>
      </div>
      <div class="h-full w-full absolute left-0 bottom-0 z-10">
        <div
            class=" flex w-full h-full bg-[url('@/assets/icons/web/home/mask.png')] bg-right bg-cover opacity-30"></div>
      </div>
      <div class="h-full w-[50%] bg-blue absolute left-0 bottom-0"></div>
    </section>

    <section class="container text-center mt-[150px]">
      <h1 class="text-black text-[32px] font-bold">چرا پل استار؟</h1>
      <h3 class="text-blue text-base font-semibold mt-[10px]">چکیده ای از فعالیت های موفق پل استار</h3>
      <p class="paragraph mt-[30px]">
        یادگیری یه سری چیزا تو زندگی مثل چراغی میمونه که مسیر آینده رو روشن میکنه مهارتی که هر روزه همه ضرورتشو بیشتر از
        قبل درک کردیم و تیکه گمشده ای از پازل موفقیت آینده بچه هاست مهارت برنامه نویسیه. آموزش مهارت ارزشمند برنامه
        نویسی بچه هارو وارد یه دنیای پویا و به روز میکنه که میتونه تاثیرات فوق العاده ای رو در زندگی آینده اونها داشته
        باشه. ما در پل استار در سال های گذشته تونستیم با آموزش های زبان های برنامه نویسی و الفبا و سواد دیجیتال و مهارت
        های نرم دانش آموزامون رو در مسیر پیشرفت و رقابت با بقیه نوجوون های دنیا قرار بدیم و بهشون افتخار کنیم.
      </p>

      <div class="flex gap-[100px] mt-[60px]">
        <div class="min-w-fit group relative">
          <img src="@/assets/images/web/home/why.png" alt="why" class="min-w-max">
        </div>
        <div class="flex flex-col gap-[30px] pt-5">
          <div class="flex items-center gap-[10px] text-right">
            <nuxt-icon name="web/home/like" filled/>
            <div class="text-base font-semibold text-black">بیش از پانصد مهارت آموز کودک و نوجوان و آموزش در حوزه های
              مختلف
            </div>
          </div>
          <div class="flex items-center gap-[10px] text-right">
            <nuxt-icon name="web/home/teacher" filled/>
            <div class="text-base font-semibold text-black">بیش از ۵۰ کمپین و شرکت در مسابقات مختلف با حضور ارگان های
              مختلف
            </div>
          </div>
          <div class="flex items-center gap-[10px] text-right">
            <nuxt-icon name="web/home/book-square" filled/>
            <div class="text-base font-semibold text-black">بیش از صد دوره موفق در حوزه شتابدهی استعداد</div>
          </div>
          <div class="flex items-center gap-[10px] text-right">
            <nuxt-icon name="web/home/like" filled/>
            <div class="text-base font-semibold text-black">بیش از صدها متخصص در رشته های مختلف آی تی و کودکان و
              مشاوره
            </div>
          </div>
          <div class="flex items-center gap-[10px] text-right">
            <nuxt-icon name="web/home/teacher" filled/>
            <div class="text-base font-semibold text-black">بیش از صدها ساعت آموزش های تخصصی و عمومی متنوع برای کودکان و
              نوجوانان
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-4 mt-[100px]">
        <div class="flex items-center gap-[30px]">
          <div
              class="flex items-center justify-center rounded-full h-[94px] w-[94px] bg-red font-extrabold text-[30px] text-white ltr">
            +1500
          </div>
          <div class="flex flex-col items-start">
            <span class="text-lg text-black font-bold">بیش از 1500 نفر</span>
            <span class="text-lg text-black font-bold">دانش پذیر</span>
          </div>
        </div>
        <div class="flex items-center gap-[30px]">
          <div
              class="flex items-center justify-center rounded-full h-[94px] w-[94px] bg-blue font-extrabold text-[30px] text-white ltr">
            +200
          </div>
          <div class="flex flex-col items-start">
            <span class="text-lg text-black font-bold">بیش از 200 دوزه</span>
            <span class="text-lg text-black font-bold">برگزار شده</span>
          </div>
        </div>
        <div class="flex items-center gap-[30px]">
          <div
              class="flex items-center justify-center rounded-full h-[94px] min-w-[94px] bg-yellow font-extrabold text-[30px] text-white ltr">
            97%
          </div>
          <div class="flex flex-col items-start">
            <span class="text-lg text-black font-bold">بیش از 97% رضایت</span>
            <span class="text-lg text-black font-bold text-right">فرزندان پل استاری و والدین آن ها</span>
          </div>
        </div>
        <div class="flex items-center gap-[30px]">
          <div
              class="flex items-center justify-center rounded-full h-[94px] w-[94px] bg-green font-extrabold text-[30px] text-white ltr">
            1395
          </div>
          <div class="flex flex-col items-start">
            <span class="text-lg text-black font-bold">آموزش مستمر</span>
            <span class="text-lg text-black font-bold">از سال 1395</span>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-[100px] bg-[#fbfcfe] py-[100px] relative">
      <div class="container grid grid-cols-2 gap-[100px]">
        <div>
          <h1 class="text-black text-[32px] font-bold">اسپانسرینگ و بورسیه ستاره های پل استار</h1>
          <h3 class="text-blue text-base font-semibold mt-[10px]">استعدادها را شکوفا میکنیم :)</h3>
          <p class="paragraph mt-[30px]">
            ما در پل استار، از سال های گذشته تلاش کردیم تا بتونیم امید و عزت نفس گرفته شده از بچه هامون رو بهشون
            برگردونیم و با آموزش مهارت های روز دنیا چشم اندازشون رو به آینده شون بلندتر کنیم. در شرایط غیرمعمول هزینه
            هایی که بچه هامون از نا امیدی و بی انگیزگی میپردازن گرون ترین سرمایه ملی مون هست که از بین میره. در مسیر
            رسیدن به هدفمون همواره با چالش های مختلفی روبرو بودیم ولی همواره تلاش کردیم با ارتقای کیفیت خدمات به تداوم
            فعالیتمون ادامه بدیم. بخش اسپانسرینگ و بورسیه پل استار برای افراد و سازمان هایی طراحی شده که در این سالها
            همراه ما حامی بچه ها بودند و یا دلشون میخواد در ادامه راه حامی استعدادهای ستاره هامون باشن.
          </p>
          <nuxt-link to="#" class="bg-blue btn mt-[60px] max-w-fit">
            <span class="text-white">اطلاعات بیشتر</span>
            <nuxt-icon name="web/home/arrow-left" filled/>
          </nuxt-link>
        </div>
      </div>
      <div
          class="group absolute right-[50%] min-w-max top-[100px] bottom-[100px] rounded-default overflow-hidden mr-[50px]">
        <img src="@/assets/images/web/home/8.jpg" alt="introduction" class="h-full">
      </div>
    </section>

    <section class="relative mt-[100px] pb-[150px]">
      <div class="container text-center">
        <h1 class="text-black text-[32px] font-bold">نظرات مهارت آموزان و والدین</h1>
        <h3 class="text-blue text-base font-semibold mt-[10px]">نظرات مهارت آموزانی که موفق به شرکت در دوره ها شده
          اند</h3>
      </div>
      <div class="flex mt-[120px] container items-center">
        <div class="flex flex-col max-w-[50%] pr-[100px]">
          <swiper
              :spaceBetween="30"
              :centeredSlides="true"
              :slidesPerView="1"
              :loop="true"
              dir="rtl"
              class="relative w-full bg-black/5 shadow-default rounded-default"
          >
            <swiper-slide class="rounded-default overflow-hidden z-10 h-full" v-for="item in data?.data?.comments"
                          :key="item.uid">
              <div class="bg-white rounded-default shadow-default h-full">
                <div
                    class="w-full group relative max-h-[350px] overflow-hidden flex items-center justify-center rounded-default">
                  <!-- <span class="group-hover:opacity-100 opacity-0 ease-in-out duration-200 flex items-center justify-center bg-[#03050d73] absolute top-0 bottom-0 right-0 left-0 rounded-default">
                    <button @click="videoComment(item.video_path)" class="bg-white/20 p-3 rounded-full backdrop-blur-[3.4px] relative">
                      <nuxt-icon name="web/cooperation/play" filled />
                    </button>
                  </span>
                  <img
                    :src="item.image_path"
                    :alt="item.image_alt"
                    class="w-full rounded-default"
                  > -->
                  <video
                      :src="item.video_path"
                      controls
                      class="rounded-default w-full"
                  ></video>
                </div>
                <div class="flex flex-col items-center p-default gap-[30px]">
                  <p class="paragraph text-center leading-[26px] h-[78px] overflow-hidden">{{ item.message }}</p>
                  <div class="text-lg text-blue font-bold">
                    {{ item.parent ? `والدین ${item.student_name}` : item.student_name }}
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="flex items-center justify-between w-full mt-[30px]">
            <div>
            </div>
          </div>
        </div>
        <div
            class="flex w-full max-w-[50%] min-h-[650px] bg-[url('@/assets/icons/web/home/component.png')] bg-left bg-cover relative">
          <span class="absolute top-0 bottom-[50%] right-0 left-0 bg-gradient-to-b from-[#fff] to-transparent"></span>
          <span class="absolute top-[50%] bottom-0 right-0 left-0 bg-gradient-to-b to-[#fff] from-transparent"></span>
        </div>
      </div>
    </section>

    <section class="container grid grid-cols-12 mt-[100px]" name="request" id="request">
      <div class="w-full flex items-center justify-center relative col-span-6 h-fit">
        <img src="@/assets/images/web/home/counsolting.png" alt="consulting image"
             class="-scale-x-100 max-w-[486px] relative z-10">
        <div class="absolute right-0 left-0 top-[84.3px] bottom-0 flex items-center justify-center">
          <div class="consoling-border"></div>
          <div class="consoling-border-2"></div>
        </div>
      </div>
      <div class="col-span-6">
        <h1 class="text-black text-[32px] font-bold">درخواست مشاوره</h1>
        <h3 class="text-blue text-base font-semibold mt-[10px]">برای انتخاب مسیر بهتر و راهنمایی، با مشاوران ما در تماس
          باشید</h3>
        <div class="grid grid-cols-2 gap-[30px] mt-[50px]">
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
        <div class="flex items-center justify-between mt-[30px]">
          <div class="flex items-center gap-[15px]">
            <nuxt-icon name="web/calendar/info-circle" filled/>
            <div class="text-black text-base [2.4px]">تمامی فیلدها باید پر شوند</div>
          </div>
          <button class="btn bg-blue" @click="submit" :disabled="loading">
            <svg class="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="loading">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <nuxt-icon name="web/home/tick-circle" filled/>
            <span class="text-white text-lg">ثبت درخواست</span>
          </button>
        </div>
      </div>
    </section>
  </div>

  <Dialog v-model:value="dialog">
    <div class="bg-white rounded-default shadow-default w-[470px] z-[90] relative">
      <section class="p-default">
        <nuxt-icon name="web/public/success" filled v-if="dialogStatus === 'success'"
                   class="flex items-center justify-center"/>
        <nuxt-icon name="web/public/error" filled v-if="dialogStatus === 'error'"
                   class="flex items-center justify-center"/>
        <div class="text-green text-center" v-if="dialogStatus === 'success'">مراحل با موفقیت انجام شد</div>
        <div class="text-red text-center" v-if="dialogStatus === 'error'">مراحل با موفقیت انجام نشد</div>
        <div class="flex flex-col mt-4 gap-2" v-if="dialogStatus === 'error'">
          <div class="text-sm text-gray" v-for="(item, index) in dialogError.full_name" :key="index">{{ item }}</div>
          <div class="text-sm text-gray" v-for="(item, index) in dialogError.term_category_uid" :key="index">{{
              item
            }}
          </div>
          <div class="text-sm text-gray" v-for="(item, index) in dialogError.birthday" :key="index">{{ item }}</div>
          <div class="text-sm text-gray" v-for="(item, index) in dialogError.province_id" :key="index">{{ item }}</div>
          <div class="text-sm text-gray" v-for="(item, index) in dialogError.phone" :key="index">{{ item }}</div>
          <div class="text-sm text-gray" v-for="(item, index) in dialogError.call_time" :key="index">{{ item }}</div>
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
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'

const numbers = reactive({})
const form = reactive({
  full_name: '',
  term_category_uid: '',
  birthday: '',
  province_id: '',
  phone: '',
  call_time: '',
  message: '',
})

const title = ref("صفحه اصلی");
const description = ref("پل استار");
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
})


const showVideo = ref(false)
const showVideoComment = ref(false)
const commentsVideo = ref(null)

function videoComment(item) {
  commentsVideo.value = item
  showVideoComment.value = true
}

watch(showVideoComment, (value) => {
  if (!value) {
    commentsVideo.value = null
  }
})

const {data, pending, error, refresh} = await useFetch(`https://panel.metafi.ir/api/v1/wb/main`)
const {data: states} = await useFetch(`https://panel.metafi.ir/api/v1/wb/country/IR/states`)

const loading = ref(false)
const dialog = ref(false)
const dialogStatus = ref(null)
const dialogError = ref(null)
const submit = () => {
  // todo advice request
  // endpoint => /wb/advice
  // type => post
  // baseURL=> 'https://panel.metafi.ir/api/v1'
  // headers => Accept:application/json
}
</script>

<style scoped>
.consoling-border {
  width: 485px;
  height: 485px;
  border: 2px solid #FFCD03;
  border-radius: 50%;
  animation-name: consoling;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  position: absolute
}

.consoling-border-2 {
  width: 485px;
  height: 485px;
  border: 2px solid #FFCD03;
  border-radius: 50%;
  animation-name: consoling;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 1s;
  position: absolute
}

@keyframes consoling {
  0% {
    width: 485px;
    height: 485px;
    opacity: 1
  }
  10% {
    width: 495px;
    height: 495px;
    opacity: 1
  }
  20% {
    width: 505px;
    height: 505px;
    opacity: .9
  }
  30% {
    width: 515px;
    height: 515px;
    opacity: .8
  }
  40% {
    width: 525px;
    height: 525px;
    opacity: .7
  }
  50% {
    width: 535px;
    height: 535px;
    opacity: .6
  }
  60% {
    width: 545px;
    height: 545px;
    opacity: .5
  }
  70% {
    width: 555px;
    height: 555px;
    opacity: .4
  }
  80% {
    width: 565px;
    height: 565px;
    opacity: .3
  }
  90% {
    width: 575px;
    height: 575px;
    opacity: .2
  }
  100% {
    width: 585px;
    height: 585px;
    opacity: .1
  }
}
</style>