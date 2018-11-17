<template>
    <div class="progress">
        <div class="name">
            <span>不能说的秘密（Live）</span>
            <span>林俊杰</span>
            <span>5:41</span>
        </div>
        <el-slider v-model="value1" label="4"></el-slider>
    </div>
</template>

<script>
export default {
  name: "Progress",
  data() {
    return {
      value1: 80
    };
  }
};
</script>

<style scoped>
.name {
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.progress {
  margin-top: 10px;
}
</style>
