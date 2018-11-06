<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in"><router-view/></transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
body,
footer {
  margin: 0;
  padding: 0 !important;
}
header {
  margin: 0;
  padding: 0 !important;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
a {
  text-decoration: none;
}
ul,
li {
  background: transparent !important;
}

/*animate as belows*/

.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s ease;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(50px);
  opacity: 0;
}
</style>
