<template>
  <div class="flex justify-center w-full relative bg-[#f5f7fa] rounded-[15px] border
    border-transparent ease-in-out duration-200
  focus:border-blue"
  >
    <span class="absolute right-0 top-0 flex text-gray items-center text-[13px] px-5 ease-in-out duration-200" :class="[value ? 'z-20 top-[-9.75px]' : 'bottom-0']">{{ label }}</span>
    <select
      :value="value"
      @input="$emit('update:value',$event.target.value)"
      class="form-select appearance-none w-full h-full py-[15px]
        px-5 border border-gray_light rounded-[15px]
        focus:border-blue focus:outline-none
        hover:border-blue z-10 text-center
        ease-in-out duration-200
        text-black text-base [1.6px] font-semibold
        bg-transparent cursor-pointer
        disabled:border-transparent
        disabled:bg-[#fbfcfe]
      "
      aria-label="Default select example"
      :disabled="disabled"
    >
      <option hidden selected></option>
      <option
        v-for="(item, index) in items"
        :key="index"
        :value="valueInput ? item[valueInput] : item.value"
        class="text-black text-sm font-light"
      >{{textInput ? item[textInput] : item.text}}</option>
    </select>
    <nuxt-icon name="selectInput/arrow" filled  class="absolute top-0 bottom-0 left-[30px] flex items-center"/>
  </div>
</template>

<script>
export default {
  computed: {
    filled() {
      if (!this.show && this.value) {
        return "has__content";
      }
      return "";
    },
  },
  props: {
    value: { type: String, required: false, default: "" },
    label: { type: String, required: false, default: "" },
    items: { type: Array, required: false, default: [] },
    disabled: { type: Boolean, required: false, default: false },
    textInput: { type: String, required: false, default: ""},
    valueInput: { type: String, required: false, default: ""}
  },
};
</script>

<style scoped>
</style>
