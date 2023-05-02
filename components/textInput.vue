<template>
  <div class="relative w-full bg-[#f5f7fa] rounded-[15px]">
    <input
      type="text"
      :value="value"
      @input="$emit('update:value',$event.target.value)"
      class="effect"
    />
    <span class="absolute right-0 top-0 flex text-gray items-center text-[13px] px-5 ease-in-out duration-200" :class="[value ? 'z-20 top-[-9.75px]' : 'bottom-0']">{{ label }}</span>
  </div>
</template>

<script>
export default{
  props: {
    value : { type: String , required: false, default: ''},
    label: { type: String, required: false, default: ''},
  },
}
</script>

<style scoped>
::placeholder {
  color: #5c5f66;
}

input[type="text"]{
  color: #03050d;
  width: 100%;
  box-sizing: border-box;
  outline:none;
  border: 1px solid #dae0f2;
  padding: 15px 20px;
  border-radius: 15px;
  background: transparent;
  transition: all .2s ease-in-out;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  position: relative;
  z-index: 1;
}

.effect:focus,
.effect:hover {
  border-color: #395df7;
}
</style>