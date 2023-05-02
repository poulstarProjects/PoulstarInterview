<template>
  <div class="main">
    <div class="loading">
      <div class="loading-1"></div>
      <div class="loading-2"></div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.main {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgb(255 255 255 / 40%);
  z-index: 1000;
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading {
  width: 60px;
  height: 60px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.loading-1 {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid rgba(57,93,247,1);
  border-radius: inherit;
  border-top: 3px solid transparent;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  animation: rotate .8s ease infinite;
  top: 0;
}
.loading-2 {
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px dashed rgba(57,93,247,1);
  border-radius: inherit;
  border-top: 3px solid transparent;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  animation: rotate .8s linear infinite;
  opacity: .2;
}
@keyframes rotate {
  100% {
    transform:rotate(360deg); 
  }
}
</style>