<template>
    <div class="navigation">
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
                <el-menu-item index="1" class="nav"><router-link to="/">Home</router-link></el-menu-item>
                <el-menu-item index="2" class="nav">Blog</el-menu-item>
                <el-menu-item index="3" class="nav"><router-link to="/music">Music</router-link></el-menu-item>
                <el-menu-item index="6" class="nav"><router-link to="/functions">Function</router-link></el-menu-item>
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
.navigation {
  overflow: hidden;
}
header {
  position: relative !important;
}
@media screen and (max-width: 400px) {
  .nav {
    font-size: 12px;
  }
}
</style>
