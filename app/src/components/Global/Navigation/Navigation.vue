<template>
  <section class="div_content">
    <ul class="ul-header border-1px">
      <!-- pc 页面菜单 -->
      <div class="left-menu" v-show="isHigher768">
        <router-link class="logo" tag="a" to="/home">
          <img width="16" height="16" src="../../../assets/logo.png" title="StartPoint开源项目  欢迎加入"
               alt="">
        </router-link>
        <router-link tag="a" to="/home">
          <li>Home</li>
        </router-link>
        <router-link tag="a" to="/music">
          <li>Music</li>
        </router-link>
        <router-link tag="a" to="/functions">
          <li>Function</li>
        </router-link>
      </div>
      <!-- 移动端菜单按钮 -->
      <transition name="fade">
        <div class="fixed-fade-menu" ref="fixed_menu" :class="{ios: isIos}" v-show="showLeftMenu"
             @click="hideLeftContent">
          <div class="fixed-menu-content" @click="hideLeftContent">
            <router-link tag="a" to="/">
              <li>Home</li>
            </router-link>
            <router-link tag="a" to="/music">
              <li>Music</li>
            </router-link>
            <router-link tag="a" to="/functions">
              <li>Function</li>
            </router-link>
          </div>
        </div>
      </transition>
      <div class="fixed-menu" v-show="!isHigher768" @click="toggleMenuContent">
        <i class="el-icon-menu"></i>
      </div>
      <!-- pc 移动端设置按钮 -->
      <div class="right-menu">
        <router-link class="listmenu" tag="a" to="/user/login">
          登录
        </router-link>
        <a href="https://github.com/JasmineRain/StartPoint" target="_black">
          <li class="li-icon" title="github"><i class="icon-github"></i></li>
        </a>
        <router-link tag="a" to="/setting" class="a-icon">
          <li class="li-icon" title="设置" @click="hideLeftContent"><i class="icon-setting"></i></li>
        </router-link>
      </div>
    </ul>

  </section>
</template>
<script>
  export default {
    data() {
      return {
        showLeftMenu: false
      }
    },
    methods: {
      toggleMenuContent() {
        this.showLeftMenu = !this.showLeftMenu
      },
      hideLeftContent() {
        this.showLeftMenu = false
      }
    },
    computed: {
      isIos() {
        return /iPhone|iPod/i.test(navigator.userAgent)
      },
      isHigher768: function () {
        return this.$store.getters.getClientWid > 768
      }
    },
    mounted() {
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/style/style.styl'
  @import '../../../common/style/global.styl'
  .div_content
    position: fixed
    top: 0
    left: 0
    right: 0
    height: 40px
    line-height: 40px
    z-index: 999

    .ul-header
      position: fixed
      top: 0
      left: 0
      right: 0
      height: 40px
      line-height: 40px
      z-index: 111
      margin: 0
      font-size: 0
      padding: 0 20px

      .left-menu
        a
          list-style: none
          display: inline-block
          font-size: 14px
          padding: 0 14px
          margin: 0
          color: $text_color
          cursor: pointer
          font-family: "Segoe UI", Segoe, Tahoma, Arial, Verdana, sans-serif
          text-decoration: none

          &.router-link-active
            li
              color: $text_color_active
              border-bottom: 1px solid $border_color

          &.logo
            padding-left: 0

          img
            vertical-align: top
            border: none

      .right-menu
        position: absolute
        right: 10px
        height: 40px
        top: 0
        font-size: 0

        .listmenu
          display: inline-block
          font-size: 14px
          margin: 0 8px
          height: 100%
          vertical-align: middle
          color: $text_color
          vertical-align: top
          cursor: pointer
          position: relative
          font-weight: 200

          &.router-link-active
            color: $text_color_active
            border-bottom: 1px solid $border_color

        a
          list-style: none
          display: inline-block
          font-size: 14px
          margin: 0 8px
          color: $text_color
          cursor: pointer
          font-family: "Segoe UI", Segoe, Tahoma, Arial, Verdana, sans-serif
          text-decoration: none

          &.router-link-active
            li
              color: $text_color_active
              border-bottom: 1px solid $border_color

          li
            display: flex
            height: 40px
            align-items: center

            i
              font-size: 18px
              vertical-align: middle

      .fixed-menu
        position: absolute
        left: 0
        top: 0
        width: 50px
        height: 40px
        line-height: 40px
        text-align: center

        i
          display: inline-block
          font-size: 20px
          vertical-align: middle
          color: $text_color

        &.active
          i
            color: $text_color_active

      .fixed-fade-menu
        position: fixed
        top: 0
        left: 0
        bottom: 0
        right: 0
        background: rgba(0, 0, 0, 0.86)

        &.ios
          -webkit-backdrop-filter: blur(10px)
          background: rgba(0, 0, 0, 0.5)

        &.fade-enter-to, &.fade-leave-to
          transition: all 0.5s

        &.fade-enter, &.fade-leave-to
          opacity: 0

        .fixed-menu-content
          width: 100%
          height: 100%
          padding: 10px
          box-sizing: border-box
          font-size: 14px
          display: flex
          flex-direction: column
          justify-content: center

          a
            text-decoration: none

            li
              color: #fff
              width: 100%
              height: 40px
              line-height: 40px
              text-align: center

            &.router-link-active
              li
                color: $border_color

    .li_list
      transform: translate3d(0, 0, 0)

      &.fade-enter-to, &.fade-leave-to
        transition: all 0.8s

      &.fade-enter, &.fade-leave-to
        opacity: 0
        transform: translate3d(0, 50px, 0)
</style>
