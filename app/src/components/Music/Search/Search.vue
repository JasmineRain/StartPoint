<template>
  <div style="margin-top: 15px;">
    <el-input placeholder="search" v-model="input" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="type">
        <el-option label="单曲" value="song"></el-option>
        <el-option label="专辑" value="album"></el-option>
        <el-option label="歌单" value="songlist"></el-option>
        <el-option label="歌词" value="lyric"></el-option>
        <el-option label="MV" value="mv"></el-option>
        <el-option label="用户" value="user"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
  export default {
    name: "Search",
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
</style>