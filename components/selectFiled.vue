<template>
  <div class="flex justify-center w-full relative rounded-[15px]"
  >
    <span class="absolute right-0 px-5 top-0 bottom-0 flex items-center
      text-gray text-base font-semibold [1.6px]" v-if="showLabel">{{ placeholder }}</span>
    <select
      :value="value"
      @input="selected($event.target.value)"
      class="form-select appearance-none w-full h-full py-[15px]
        px-5 border border-gray rounded-[15px]
        focus:border-black focus:outline-none
        hover:border-black z-10 ease-in-out duration-200
        text-black text-base [1.6px] font-semibold
        bg-transparent cursor-pointer
        disabled:border-transparent
        disabled:bg-[#fbfcfe]
      "
      aria-label="Default select example"
      :disabled="disabled"
    >
      <option value="" disabled selected hidden></option>
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
  data() {
    return {
      showLabel: true
    }
  },
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
    placeholder: { type: String, required: false, default: "" },
    items: { type: Array, required: false, default: [] },
    disabled: { type: Boolean, required: false, default: false },
    textInput: { type: String, required: false, default: ""},
    valueInput: { type: String, required: false, default: ""}
  },
  methods: {
    selected(event){
      this.$emit('update:value', event)
      this.showLabel = false
    }
  }
};
</script>