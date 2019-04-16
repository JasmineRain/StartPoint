<template>
  <keep-alive>
    <div class="search">
      <el-input placeholder="搜索全平台" v-model="input" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
      <div class="result">
        <el-tabs v-model="type" @tab-click="clickTab">
          <el-tab-pane class="item" label="单曲" name="song">
            <div class="info">
              <div class="vendors">
                <el-menu
                    :default-active="vendor"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#FF0000"
                    @select="selectTab">
                  <el-menu-item index="qq">
                    <span slot="title">QQ</span>
                  </el-menu-item>
                  <el-menu-item index="netease">
                    <span slot="title">网易</span>
                  </el-menu-item>
                  <el-menu-item index="xiami">
                    <span slot="title">虾米</span>
                  </el-menu-item>
                </el-menu>
              </div>
              <div class="result_lists" v-loading="loading['song'] && searching" element-loading-background="rgba(0, 0, 0, 0.1)">
                <span style="color: white" v-show="loading['song']">input to search</span>
                <div v-if="!loading['song']" @click="clickSongCell(result['song'][vendor].list)">
                  <SongCell v-for="(item, index) in result['song'][vendor].list" :key="index" v-bind="item"></SongCell>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane class="item" label="歌手" name="singer">
            <div class="info">
              <div class="vendors">
                <el-menu
                    :default-active="vendor"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#FF0000"
                    @select="selectTab">
                  <el-menu-item index="qq">
                    <span slot="title">QQ</span>
                  </el-menu-item>
                  <el-menu-item index="netease">
                    <span slot="title">网易</span>
                  </el-menu-item>
                  <el-menu-item index="xiami">
                    <span slot="title">虾米</span>
                  </el-menu-item>
                </el-menu>
              </div>
              <div class="result_lists" v-loading="loading['singer'] && searching" element-loading-background="rgba(0, 0, 0, 0.1)">
                <span style="color: white" v-show="loading['singer']">input to search</span>
                <div v-if="!loading['singer']">
                  <SingerCell @click.native="clickSingerCell" v-for="item in result['singer'][vendor].list" :key="item.id" v-bind="item"></SingerCell>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane class="item" label="专辑" name="album">
            <div class="info">
              <div class="vendors">
                <el-menu
                    :default-active="vendor"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#FF0000"
                    @select="selectTab">
                  <el-menu-item index="qq">
                    <span slot="title">QQ</span>
                  </el-menu-item>
                  <el-menu-item index="netease">
                    <span slot="title">网易</span>
                  </el-menu-item>
                  <el-menu-item index="xiami">
                    <span slot="title">虾米</span>
                  </el-menu-item>
                </el-menu>
              </div>
              <div class="result_lists" v-loading="loading['album'] && searching" element-loading-background="rgba(0, 0, 0, 0.1)">
                <span style="color: white" v-show="loading['album']">input to search</span>
                <div v-if="!loading['album']">
                  <AlbumCell @click.native="clickAlbumCell(item)" v-for="item in result['album'][vendor].list" :key="item.album.id" v-bind="item"></AlbumCell>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane class="item" label="视频" name="mv">
            <div class="info">
              <div class="vendors">
                <el-menu
                    :default-active="vendor"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#FF0000"
                    @select="selectTab">
                  <el-menu-item index="qq">
                    <span slot="title">QQ</span>
                  </el-menu-item>
                  <el-menu-item index="netease">
                    <span slot="title">网易</span>
                  </el-menu-item>
                  <el-menu-item index="xiami">
                    <span slot="title">虾米</span>
                  </el-menu-item>
                </el-menu>
              </div>
              <div class="result_lists" v-loading="loading['mv'] && searching" element-loading-background="rgba(0, 0, 0, 0.1)">
                <span style="color: white" v-show="loading['mv']">input to search</span>
                <div v-if="!loading['mv']">
                  <MvCell @click.native="clickMvCell" v-for="item in result['mv'][vendor].list" :key="item.id" v-bind="item"></MvCell>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane class="item" label="歌单" name="playlist">
            <div class="info">
              <div class="vendors">
                <el-menu
                    :default-active="vendor"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#FF0000"
                    @select="selectTab">
                  <el-menu-item index="qq">
                    <span slot="title">QQ</span>
                  </el-menu-item>
                  <el-menu-item index="netease">
                    <span slot="title">网易</span>
                  </el-menu-item>
                  <el-menu-item index="xiami">
                    <span slot="title">虾米</span>
                  </el-menu-item>
                </el-menu>
              </div>
              <div class="result_lists" v-loading="loading['playlist'] && searching" element-loading-background="rgba(0, 0, 0, 0.1)">
                <span style="color: white" v-show="loading['playlist']">input to search</span>
                <div v-if="!loading['playlist']">
                  <PlaylistCell @click.native="clickPlaylistCell(item)" v-for="item in result['playlist'][vendor].list" :key="item.playlist.id" v-bind="item"></PlaylistCell>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane class="item" label="用户" name="user">
            <div class="info">
              <div class="vendors">
                <el-menu
                    :default-active="vendor"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#FF0000"
                    @select="selectTab">
                  <el-menu-item index="qq">
                    <span slot="title">QQ</span>
                  </el-menu-item>
                  <el-menu-item index="netease">
                    <span slot="title">网易</span>
                  </el-menu-item>
                  <el-menu-item index="xiami">
                    <span slot="title">虾米</span>
                  </el-menu-item>
                </el-menu>
              </div>
              <div class="result_lists" v-loading="loading['user'] && searching" element-loading-background="rgba(0, 0, 0, 0.1)">
                <span style="color: white" v-show="loading['user']">input to search</span>
                <div v-if="!loading['user']">
                  <UserCell v-for="item in result['user'][vendor].list" :key="item.id" v-bind="item"></UserCell>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </keep-alive>
</template>

<script>
  import SongCell from "./Cell/songCell";
  import SingerCell from "./Cell/singerCell";
  import AlbumCell from "./Cell/albumCell";
  import MvCell from "./Cell/mvCell";
  import PlaylistCell from "./Cell/playlistCell";
  import UserCell from "./Cell/userCell";
  import musicUtil from "../../../common/js/music";
  export default {
    name: "Search",
    components: {SongCell, SingerCell, AlbumCell, MvCell, PlaylistCell, UserCell},
    data() {
      return {
        input: '',
        type: 'song',
        vendor: 'qq',
        searching: false
      }
    },
    computed: {
      loading: function () {
        return this.$store.getters.getSearchLoading;
      },
      result: function () {
        return this.$store.getters.getSearchList;
      },
      info: function () {
        return this.type + this.vendor;
      }
    },
    methods: {
      search: function () {
        if(this.input !== '') {
          this.$store.dispatch("getSearchResult", {t: this.type, keywords: this.input});
          this.searching = true;
        }
        else {
          this.$message({
            message: '搜索内容不可为空',
            type: 'warning'
          })
        }
      },
      clickTab: function (tab) {
        this.type = tab.name;
      },
      selectTab: function (key) {
        this.vendor = key;
      },
      clickSongCell: function (list) {
        list.forEach((item, index) => {
          item['vendor'] = this.vendor;
          item['index'] = index;
          item['song']['time'] = musicUtil.formatDuration(item['song']['duration'])
        });
        this.$store.commit("setMusicSheetList", list);
        this.$router.push(`/music/sheet/searchlist/${this.vendor}/${this.type}`);
      },
      clickSingerCell: function () {
        this.type = 'song';
      },
      clickAlbumCell: function (item) {
        this.$router.push(`/music/sheet/album/${this.vendor}/${item.album.mid ? item.album.mid: item.album.id}`);
        this.$store.dispatch("getAlbumDetail", {vendor: this.vendor, id: item.album.mid ? item.album.mid: item.album.id})
      },
      clickMvCell: function () {
        console.log("mv cell click");
      },
      clickPlaylistCell: function (item) {
        this.$router.push(`/music/sheet/plist/${this.vendor}/${item.playlist.mid ? item.playlist.mid: item.playlist.id}`);
        this.$store.dispatch("getPlaylistDetail", {vendor: this.vendor, id: item.playlist.id});
      }
    },
    watch: {
      info: {
        handler: function () {
          if(this.input !== ''){
            this.search();
          }
        },
        deep: true
      }
    },
    mounted() {
    }
  }
</script>

<style>
  .el-select .el-input {
    width: 80px;
  }
  .el-input-group__prepend, .el-input__inner, .el-input-group__append, .el-select-dropdown, .el-select-dropdown__item {
    background-color: transparent !important;
    color: white !important;
  }
  .el-tabs {
    height: 100%;
  }
  .el-tabs__content {
    height: calc(100% - 55px);
  }
  .el-menu {
    border-right: none !important;
  }
  .el-tab-pane {
    height: 100%;
  }
  .search {
    width: 100%;
    height: calc(100% - 60px);
    margin-top: 10px;
  }
  .result {
    width: 100%;
    height: calc(100% - 40px);
  }
  .info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .vendors {
    height: 100%;
    width: 70px;
    border-right: solid 1px rgba(125, 125, 125, 0.8);
  }
  .result_lists {
    width: calc(100% - 70px);
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>