<template>
    <span class="copyright">
        <el-row class="hidden-xs-only">
            每日壁纸由Bing提供
        </el-row>
    </span>
</template>

<script>
  export default {
    name: "CopyrightInfo"
  };
</script>

<style scoped>
  .copyright {
    position: absolute;
    bottom: 0;
    right: 20px;
    left: 30px;
    color: #fff;
    font-size: 10px;
    line-height: 40px;
    height: 40px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: right;
  }
</style>
