<template>
  <input
    type="text"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('update:value',$event.target.value)"
    class="effect"
  />  
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
    placeholder: { type: String, required: false, default: ''},
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
  border: 1px solid #5c5f66;
  padding: 15px 20px;
  border-radius: 15px;
  background: transparent;
  transition: all .2s ease-in-out;
  font-weight: 600;
  font-size: 16px
}/* necessary to give position: relative to parent. */

.effect:focus,
.effect:hover {
  border-color: #395df7;
}
</style>