<template>
  <div id="app">
    <Navigation/>
    <Background/>
    <audio autoplay :src="QQMusicSrc" ref="player"></audio>
    <transition name="fade" mode="out-in"><router-view/></transition>
  </div>
</template>

<script>
  /* eslint-disable vue/no-unused-components */
  // http://dl.stream.qqmusic.qq.com/C1L0001ApDs72gYqUk.m4a?vkey=F33047F1591194F61A2B27094B6CB1CBBD4C504FDB466A9975ADE22861FE0845D36C70AA0E23FF9000B2D5DEE71EB63E904224A849A7C59F&guid=8715282750&uin=2703401268&fromtag=66
  import Navigation from "./components/Global/Navigation/Navigation";
  import Background from "./components/Global/Background/Background";

  export default {
  components: { Background, Navigation },
  methods: {
    updateGlobal: function () {
      let globalInfo = {
        clientWid: document.body.clientWidth
      };
      this.$store.commit("setGlobal", globalInfo)
    },
    //audio元素监听
    setAudioRef: function () {
      this.$store.commit("setPlayer", this.$refs.player);
    }
  },
  computed: {
    /**
     * @return {string}
     */
    QQMusicSrc: function() {
      return this.$store.getters.getCurrentMusic.musicUrl;
    }
  },
  mounted() {
    this.setAudioRef();
    this.updateGlobal();
    window.onresize = () => {
        this.updateGlobal()
    }
  }
};
</script>

<style lang="scss">
@import "../static/font-icon/style.css";
#app {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
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
li,
tr,
th {
  background-color: transparent !important;
  border-bottom: none;
}
thead {
  color: #fff !important;
}
td,
th {
  border-bottom: none !important;
  text-overflow: ellipsis;
}
.el-table::before {
  height: 0 !important;
}
.el-table__body tr:hover > td {
  background-color: rgba(0, 0, 0, 0.2) !important;
}
.el-popover {
  color: #fff !important;
  background-color: rgba(0, 0, 0, 0.6) !important;
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
