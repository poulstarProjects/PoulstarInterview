<template>
  <div class="relative w-full bg-[#f5f7fa] rounded-[15px]">
    <textarea
      type="text"
      :value="value"
      @input="$emit('update:value',$event.target.value)"
      class="effect"
    >
    </textarea>
    <span class="absolute top-[30px] flex text-gray items-center text-[13px] px-5" v-show="!value">{{ label }}</span>
  </div>
</template>

<script>
export default{
  computed:{
    filled(){
      if ( !this.show && this.value ) {
        return 'has__content'
      }
      return ''
    },
  },
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

.effect{
  min-height: 115px;
  height: 100%;
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
  resize: none;
  position: relative;
  z-index: 1;
}

.effect:focus,
.effect:hover {
  border-color: #395df7;
}
</style>