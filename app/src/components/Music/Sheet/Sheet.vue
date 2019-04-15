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
      <div class="music_list_content" v-if="musicData" v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.1)">
        <div class="music_list border-1px" v-for="(item, index) in musicData" :key="index" @click="clickRow(item)">
          <span class="music_index">
            <span v-show="currentMusic.index !== item.index || list !== 'playlist'">{{index + 1}}</span>
            <img v-show="currentMusic.index === item.index && list === 'playlist' " src="../../../assets/wave.gif">
          </span>
          <div class="music_name">
            <span class="span_name">{{item.song.name}}</span>
            <div class="hover_menu">
              <i class="icon-add"></i>
            </div>
          </div>
          <span class="music_singer" v-if="item.singer">
            <span>{{item.singer[0].name}}</span>
          </span>
          <span class="music_album" v-if="item.album">
            <span>{{item.album.name}}</span>
          </span>
          <span class="music_duration">{{item.song.time}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sheet",
  props: ["list", "vendor", "id"],
  data() {
    return {};
  },
  computed: {
    musicData: function() {
      if (this.list === "playlist")
        return this.$store.getters.getMusicList;
      else
        return this.$store.getters.getMusicSheetList;
    },
    currentMusic: function() {
      return this.$store.getters.getCurrentMusic;
    },
    loading: function () {
      return this.$store.getters.getSheetLoading;
    }
  },
  methods: {
    clickRow: function(row) {
      let songId = 0;
      let albumId = 0;
      let lyricId = 0;
      switch (row.vendor) {
        case "netease":
          songId = row.song.id;
          albumId = row.album.id;
          lyricId = row.song.id;
          break;
        case "qq":
          songId = row.song.mid;
          albumId = row.album.id;
          lyricId = row.song.mid;
          break;
      }
      let urlParams = {
        vendor: row.vendor,
        id: songId
      };
      let coverParams = {
        vendor: row.vendor,
        id: albumId
      };
      let lyricParams = {
        vendor: row.vendor,
        id: lyricId
      };
      this.$store.dispatch("getMusicUrl", urlParams);
      this.$store.dispatch("getMusicCover", coverParams);
      this.$store.dispatch("getMusicLyric", lyricParams);
      this.$store.commit("setCurrentMusic", {
        album: row.album.name,
        duration: row.song.duration,
        index: row.index,
        vendor: row.vendor,
        name: row.song.name,
        singer: row.singer
      });
      if( this.$store.getters.getMusicSheetList.length > 0 && this.list !== 'playlist')
        this.$store.commit("setMusicList", this.$store.getters.getMusicSheetList);
    }
  },
  mounted() {
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/style/global.styl'
  @import '../../../common/style/border-1px/index.styl'
  .music_sheet {
    height: calc(100% - 60px);
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
          cursor:pointer
          &:hover
            color:$text_before_color
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
