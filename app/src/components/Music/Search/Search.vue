<template>
  <div class="search">
    <el-input placeholder="search" v-model="input" class="input-with-select">
      <!--<el-select v-model="select" slot="prepend" placeholder="type">-->
        <!--<el-option label="单曲" value="song"></el-option>-->
        <!--<el-option label="专辑" value="album"></el-option>-->
        <!--<el-option label="歌单" value="songlist"></el-option>-->
        <!--<el-option label="歌词" value="lyric"></el-option>-->
        <!--<el-option label="MV" value="mv"></el-option>-->
        <!--<el-option label="用户" value="user"></el-option>-->
      <!--</el-select>-->
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <div class="result">
      <el-tabs v-model="activeName">
        <el-tab-pane class="item" label="单曲" name="song">
          <div class="song">
            <Sheet></Sheet>
          </div>
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
        select: ''
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
  .el-tabs__nav-scroll {
    display: flex;
    justify-content: center;
  }
  .el-tabs {
    height: 100%;
  }
  .el-tabs__content {
    height: calc(100% - 60px);
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
  .song {
    width: 100%;
    height: calc(100% - 60px);
  }
</style>