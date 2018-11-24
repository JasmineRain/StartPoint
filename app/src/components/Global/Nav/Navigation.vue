<template>
    <div class="navigation">
        <el-header>
            <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo hidden-xs-only"
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
            <CircleMenu class="circle-nav hidden-sm-and-up" btn type="left" :number='4' animate="animated jello" mask='black' circle :colors="[ '#000000', '#000000', '#000000', '#000000', '#000000']">
                <router-link to="/" slot="item_1">
                    <img src="../../../assets/home.png" alt="">
                </router-link>
                <router-link to="/" slot="item_2">
                    <img src="../../../assets/blog.png" alt="">
                </router-link>
                <router-link to="/music" slot="item_3">
                    <img src="../../../assets/music.png" alt="">
                </router-link>
                <router-link to="/functions" slot="item_4">
                    <img src="../../../assets/function.png" alt="">
                </router-link>
            </CircleMenu>
        </el-header>
    </div>
</template>

<script>
import CircleMenu from "vue-circle-menu";
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
  },
  components: {
    CircleMenu
  }
};
</script>

<style scoped>
a {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
img {
  width: 60%;
  height: 60%;
}
.navigation {
  overflow: hidden;
}
.circle-nav {
  width: 50px;
  height: 50px;
}
header {
  position: relative !important;
}
@media screen and (max-width: 400px) {
  .nav {
    font-size: 12px;
  }
}
button {
  border: 1px solid #fff !important;
}
div {
  background: transparent !important;
}
</style>
