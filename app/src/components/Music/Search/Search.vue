<template>
  <div class="search">
    <el-input placeholder="搜索全平台" v-model="input" class="input-with-select">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <div class="result">
      <el-tabs v-model="activeName">
        <el-tab-pane class="item" label="单曲" name="song">
          <div class="info">
            <div class="vendors">
              <el-menu
                  default-active="1"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#FF0000">
                <el-menu-item index="1">
                  <span slot="title">QQ</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <span slot="title">网易</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <span slot="title">虾米</span>
                </el-menu-item>
              </el-menu>
            </div>
            <div class="result_lists">
              <SongCell></SongCell>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane class="item" label="歌手" name="singer">
          <div class="info">
            <div class="vendors">
              <el-menu
                  default-active="1"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#FF0000">
                <el-menu-item index="1">
                  <span slot="title">QQ</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <span slot="title">网易</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <span slot="title">虾米</span>
                </el-menu-item>
              </el-menu>
            </div>
            <div class="result_lists">
              <SingerCell></SingerCell>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane class="item" label="专辑" name="album">
          <div class="info">
            <div class="vendors">
              <el-menu
                  default-active="1"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#FF0000">
                <el-menu-item index="1">
                  <span slot="title">QQ</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <span slot="title">网易</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <span slot="title">虾米</span>
                </el-menu-item>
              </el-menu>
            </div>
            <div class="result_lists">
              <AlbumCell></AlbumCell>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane class="item" label="视频" name="video">
          <div class="info">
            <div class="vendors">
              <el-menu
                  default-active="1"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#FF0000">
                <el-menu-item index="1">
                  <span slot="title">QQ</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <span slot="title">网易</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <span slot="title">虾米</span>
                </el-menu-item>
              </el-menu>
            </div>
            <div class="result_lists">
              <MvCell></MvCell>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane class="item" label="歌单" name="playlist">
          <div class="info">
            <div class="vendors">
              <el-menu
                  default-active="1"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#FF0000">
                <el-menu-item index="1">
                  <span slot="title">QQ</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <span slot="title">网易</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <span slot="title">虾米</span>
                </el-menu-item>
              </el-menu>
            </div>
            <div class="result_lists">
              <PlaylistCell></PlaylistCell>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane class="item" label="用户" name="user">
          <div class="info">
            <div class="vendors">
              <el-menu
                  default-active="1"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#FF0000">
                <el-menu-item index="1">
                  <span slot="title">QQ</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <span slot="title">网易</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <span slot="title">虾米</span>
                </el-menu-item>
              </el-menu>
            </div>
            <div class="result_lists">
              <UserCell></UserCell>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import SongCell from "./Cell/songCell";
  import SingerCell from "./Cell/singerCell";
  import AlbumCell from "./Cell/albumCell";
  import MvCell from "./Cell/mvCell";
  import PlaylistCell from "./Cell/playlistCell";
  import UserCell from "./Cell/userCell"
  export default {
    name: "Search",
    components: {SongCell, SingerCell, AlbumCell, MvCell, PlaylistCell, UserCell},
    data() {
      return {
        input: '',
        activeName: 'song'
      }
    },
    computed: {
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
    flex-direction: row;}
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