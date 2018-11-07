<template>
    <span class="copyright">本项目为本人练习项目，代码全部开源在github，ID:JasmineRain，每日壁纸由Bing提供</span>
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
  right: 30px;
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
