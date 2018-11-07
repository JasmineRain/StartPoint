<template>
  <div id="app">
    <Navigation/>
    <Background/>
    <transition name="fade" mode="out-in"><router-view/></transition>
  </div>
</template>

<script>
import Navigation from "./components/Global/Nav/Navigation";
import Background from "./components/Global/Background/Background";
export default {
  components: { Background, Navigation }
};
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

.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
