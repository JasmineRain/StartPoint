<template>
    <div>
        <el-header>
            <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    style="border: none"
                    mode="horizontal"
                    @select="handleSelect"
                    text-color="#F3F3F4"
                    background-color="transparent"
                    active-text-color="rgba(255,255,255,0.7)">
                <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
                <el-menu-item index="2">Blog</el-menu-item>
                <el-menu-item index="3"><router-link to="/music">Music</router-link></el-menu-item>
                <el-menu-item index="6"><router-link to="/functions">Function</router-link></el-menu-item>
            </el-menu>
        </el-header>
    </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key) {
      this.activeIndex = key;
    }
  }
};
</script>

<style scoped>
</style>
