<template>
  <div class="flex justify-center w-full relative rounded-[15px]" ref="dropRef">
    <div v-if="type === 'radio'" class="cursor-pointer text-black text-base w-full px-default min-w-max font-semibold z-10" @click="show = !show">{{items.find(item => item.value == value).text}}</div>
    <div v-if="type === 'checkbox'" class="cursor-pointer w-full px-default flex items-center gap-[5px] min-w-max z-10" @click="show = !show">
      <span v-for="item in valueArray" :key="item" class="text-black text-base [1.2px] font-semibold">{{item.text}}</span>
      <span v-if="!valueArray.length" class="text-black text-base [1.2px] font-semibold">{{label}}</span>
    </div>

    <div class="flex flex-col gap-[15px] absolute top-[30px] bg-white p-5 rounded-default shadow-default right-0 left-0 min-w-fit z-10" v-if="type === 'radio' && show">
      <div class="flex items-center cursor-pointer" v-for="(item, index) in items" :key="index">
        <label class="flex items-center relative">
          <input @input="$emit('update:value', item.value)" type="radio" :name="name" :value="item.value" class="absolute opacity-0 cursor-pointer h-0 w-0" :checked="item.value == value">
          <span class="pr-10 cursor-pointer text-gray text-base [1.6px] min-w-max">{{item.text}}</span>
          <span class="absolute top-[2px] right-0 w-5 h-5 cursor-pointer rounded-full border-[1.8px] border-gray_medium checkmark"></span>
        </label>
      </div>
    </div>

    <div class="flex flex-col gap-[15px] absolute top-[30px] bg-white p-5 rounded-default shadow-default right-0 left-0 min-w-fit z-10" v-if="type === 'checkbox' && show">
      <div class="flex items-center cursor-pointer" v-for="(item, index) in items" :key="index">
        <label class="flex items-center relative">
          <input v-model="answer" type="checkbox" :name="name" :value="item" class="absolute opacity-0 cursor-pointer h-0 w-0">
          <span class="w-6 h-6 rounded-[5px] cursor-pointer border-[1.8px] border-gray_medium checkbox"></span>
          <span class="pr-[10px] cursor-pointer text-gray text-base [1.6px] min-w-max">{{item.text}}</span>
        </label>
      </div>
    </div>


    <nuxt-icon name="selectInput/arrow" filled  class="absolute top-0 bottom-0 left-0 flex items-center z-0"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import useDetectOutsideClick from '@/composable/useDetectOutsideClick'

export default {
  props: {
    value: { type: Number, required: false, default: "" },
    valueArray: { type: Array, required: false, default: [] },
    items: { type: Array, required: false, default: [] },
    type: { type: String, required: false, default: 'radio' },
    name: { type: String, required: false, default: '' },
    label: { type: String, required: false, default: '' },
  },
  data(){
    return{
      answer: [],
    }
  },
  watch: {
    answer(){
      this.$emit('update:valueArray', this.answer)
    }
  },
  setup(){
    const show = ref(false)
    const dropRef = ref()

    useDetectOutsideClick(dropRef, () => { 
      show.value = false
    })

    return {
      dropRef,
      show
    }
  }
};
</script>

<style scoped>
input:checked ~ .checkmark {
  border-color: #395df7 !important;
}

input:checked ~ span {
  color: #03050d
}
input:checked ~ .checkmark:after {
  display: block;
}
.checkmark::after{
  content: "";
  display: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #395df7;
  position: absolute;
  top: 4.4px;
  right: 4.4px;
}

input:checked ~ .checkbox {
  border-color: #395df7 !important;
  background: #395df7;
}

input:checked ~ span {
  color: #5c5f66
}
input:checked ~ .checkbox:after {
  display: block;
}
.checkbox::after{
  content: "";
  display: none;
  width: 9px;
  height: 15px;
  border-radius: 2px;
  border: 2px solid #fff;
  position: absolute;
  bottom: 6px;
  right: 7px;
  transform: rotate(45deg);
  border-top: none;
  border-left: none;
}
</style>