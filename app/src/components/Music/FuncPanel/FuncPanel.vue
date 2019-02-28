<template>
  <div class="ctrl_panel">
    <div v-if="isHigher768" class="select_button">
      <router-link tag="span" to="/music/playlist" class="todo_btn playing_btn">
        正在播放
      </router-link>
      <router-link tag="span" to="/music/collection" class="todo_btn collect_btn">
        我的收藏
      </router-link>
      <router-link tag="span" to="/music/toplist" class="todo_btn top_btn">
        排行榜/歌单
      </router-link>
      <router-link tag="span" to="/music/search" class="todo_btn search_btn">
        搜索音乐
      </router-link>
    </div>
    <div v-if="!isHigher768" class="select_m_button">
      <router-link tag="span" to="/music/playlist" class="todo_btn playing_btn">
        正在播放
      </router-link>
      <router-link tag="span" to="/music/collection" class="todo_btn collect_btn">
        收藏
      </router-link>
      <router-link tag="span" to="/music/toplist" class="todo_btn top_btn">
        排行榜/歌单
      </router-link>
      <router-link tag="span" to="/music/search" class="todo_btn search_btn">
        搜索
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FuncPanel",
    computed: {
      isHigher768: function () {
        return this.$store.getters.getClientWid > 768
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/style/global.styl'
  @import '../../../common/style/border-1px/index.styl'
  .select_m_button
    width: 100%
    height: 60px
    display: flex
    align-items: center

    .todo_btn
      width: auto
      height: 24px
      line-height: 24px
      color: $text_before_color
      border: 1px solid $border_bottom_color_deep
      border-radius: 2px
      padding: 0 7px
      margin: 10px
      font-size: 12px
      cursor: pointer

      &:hover, &.active
        color: $text_before_color
        border: 1px solid $text_before_color

  .select_button
    width: 100%
    height: 60px
    display: flex
    align-items: center

    .todo_btn
      width: auto
      height: 32px
      line-height: 32px
      color: $text_before_color
      border: 1px solid $border_bottom_color_deep
      border-radius: 2px
      padding: 0 15px
      margin: 10px
      font-size: 14px
      cursor: pointer

      &:hover, &.active, &.router-link-active
        color: $text_before_color
        border: 1px solid $text_before_color

  @media screen and (max-width: 525px)
    .select_button
      .todo_btn
        padding: 0 10px
        overflow: hidden
        text-overflow: ellipsis
        overflow: hidden
        font-size: 14px
        height: 32px
        line-height: 32px
</style>
