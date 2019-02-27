<template>
  <div class="music_sheet">
    <div class="list_content_info">
      <div class="music_list_title border-1px">
        <span class="music_index"></span>
        <span class="music_name">歌曲</span>
        <span class="music_singer">歌手</span>
        <span class="music_album">专辑</span>
        <span class="music_duration">时长</span>
      </div>
      <div class="music_list_content" v-if="musicData">
        <div class="music_list border-1px" v-for="(list, index) in musicData" :key="list.songid" @click="dbclickRow(list)">
          <span class="music_index">
            <span v-show="getCurrentMusic.index !== list.index">{{index + 1}}</span>
            <img v-show="getCurrentMusic.index === list.index" src="../../../assets/wave.gif">
          </span>
          <div class="music_name">
            <span class="span_name">{{list.songname}}</span>
            <div class="hover_menu">
              <i class="icon-add"></i>
            </div>
          </div>
          <span class="music_singer" v-if="list.singer">
            <span>{{list.singer}}</span>
          </span>
          <span class="music_album" v-if="list.albumid">
            <span>{{list.albumname}}</span>
          </span>
          <span class="music_duration">{{list.time}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sheet",
  data() {
    return {};
  },
  computed: {
    musicData: function() {
      return this.$store.getters.getMusicList;
    },
    getCurrentMusic: function() {
      return this.$store.getters.getCurrentMusic;
    }
  },
  methods: {
    dbclickRow: function(row) {
      this.$store.dispatch("getQQMusicDetail", row);
    }
  },
  mounted() {
    this.$store.dispatch("getQQTopList");
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/style/global.styl'
  @import '../../../common/style/border-1px/index.styl'
  .music_sheet {
    height :100%;
  }
  .list_content_info
    height:100%
    box-sizing:border-box
  .music_list_title,.music_list
    height:50px
    line-height:50px
    font-size:0
    span
      display:inline-block
      font-size:14px
      color:$text_before_color
      text-overflow:ellipsis
      overflow:hidden
      white-space:nowrap
      vertical-align:middle
      cursor:pointer
      &.music_name
        width:calc(50% - 56px)
        font-size:14px
      &.music_singer
        width:20%
        padding:0 5px
        box-sizing:border-box
      &.music_album
        width:20%
        padding:0 5px
        box-sizing:border-box
      &.music_duration
        width:10%
        padding:0 5px
        box-sizing:border-box
      &.music_index
        width:50px
        height:100%
        text-align: center;
    .music_name
      width:calc(50% - 50px)
      display:inline-block
      font-size:14px
      height:50px
      line-height:50px
      color:$text_before_color
      text-overflow:ellipsis
      overflow:hidden
      white-space:nowrap
      font-size:0
      position:relative
      vertical-align: middle;
      .span_name
        display:inline-block
        width: 100%
        height:100%
        font-size:14px
      .hover_menu
        position:absolute
        width:60px
        height:100%
        right:0
        top:0
        display:none
        i
          font-size:18px
          display:inline-block
          width:36px
          height:36px
          line-height:36px
          color:$border_bottom_color_deep
          text-align:center
          border-radius:50%
          vertical-align:middle
          border:2px solid $border_bottom_color_deep
          cursor:pointer
          &:hover
            color:$text_before_color
            border:2px solid $text_before_color
    &.border-1px
      border-1px($border_bottom_color,bottom)
  .music_list_content
    height:calc(100% - 50px)
    position:relative
    overflow:auto
    .music_list
      position:relative
      &:hover
        .music_name
          .hover_menu
            display:block
  @media screen and (max-width: 998px)
    .music_name
      width:calc(60% - 50px)
    .music_album
      display:none!important
    .music_singer
      width:30%!important
    .music_duration
      width:20%!important

  @media screen and (max-width: 525px)
    .music_duration
      width:20%!important
    .music_singer
      width:30%!important
    .music_name
      width:calc(100% - 50px)
    .music_list_title
      display:none
    .music_list_content
      height:100%!important
</style>
