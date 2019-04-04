<template>
  <div class="search">
    <el-input placeholder="搜索全平台" v-model="input" class="input-with-select">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <div class="result">
      <el-tabs v-model="activeName">
        <el-tab-pane class="item" label="单曲" name="song">

        </el-tab-pane>
        <el-tab-pane class="item" label="歌手" name="singer">

        </el-tab-pane>
        <el-tab-pane class="item" label="专辑" name="album">

        </el-tab-pane>
        <el-tab-pane class="item" label="视频" name="video">

        </el-tab-pane>
        <el-tab-pane class="item" label="歌单" name="playlist">

        </el-tab-pane>
        <el-tab-pane class="item" label="歌词" name="lyric">

        </el-tab-pane>
        <el-tab-pane class="item" label="用户" name="user">

        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import Sheet from "../Sheet/Sheet";
  export default {
    name: "Search",
    components: {Sheet},
    data() {
      return {
        input: '',
        activeName: 'song'
      }
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
    overflow: scroll !important;
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
</style>