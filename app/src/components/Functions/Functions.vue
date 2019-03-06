<template>
  <el-row class="content">
    <div>
      <el-col :sm="12" :md="8" :lg="6" class="item">
        <router-link to="/calendar">
          <div class="mask">
            <div class="icon-container">
              <img src="../../assets/calendar.png" alt="">
            </div>
            <div class="words">
              <span>calendar</span>
            </div>
          </div>
        </router-link>
      </el-col>
      <el-col :sm="12" :md="8" :lg="6" class="item">
        <router-link to="/">
          <div class="mask">
            <div class="icon-container">
              <img src="../../assets/news.png" alt="">
            </div>
            <div class="words">
              <span>news</span>
            </div>
          </div>
        </router-link>
      </el-col>
      <el-col :sm="12" :md="8" :lg="6" class="item">
        <router-link to="/">
          <div class="mask">
            <div class="icon-container">
              <img src="../../assets/notification.png" alt="">
            </div>
            <div class="words">
              <span>notification</span>
            </div>
          </div>
        </router-link>
      </el-col>
      <el-col :sm="12" :md="8" :lg="6" class="item">
        <router-link to="/">
          <div class="mask">
            <div class="icon-container">
              <img src="../../assets/author.png" alt="">
            </div>
            <div class="words">
              <span>author</span>
            </div>
          </div>
        </router-link>
      </el-col>
    </div>
  </el-row>
</template>

<script>
  export default {
    name: "Functions"
  };
</script>

<style scoped>
  .content {
    position: absolute;
    left: 100px;
    right: 100px;
    bottom: 100px;
    top: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  @media screen and (max-width: 525px){
    .content {
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
    }
  }

  span {
    color: #ffffff;
  }

  .words {
    text-align: center;
  }

  .icon-container {
    text-align: center;
  }

  .item {
    margin: 20px 0;
  }

  .mask:hover {
    opacity: 0.7;
  }
</style>
