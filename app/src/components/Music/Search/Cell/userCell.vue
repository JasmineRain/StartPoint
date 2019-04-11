<template>
  <div class="user_cell">
    <div class="user_avatar">
      <img style="width: 100%; height: 100%; border-radius: 50%" src="../../../../assets/test.jpg" alt="/src/assets/test.jpg">
    </div>
    <div class="user_info">
      <div class="user_name">
        轻寒戏雨
      </div>
      <div class="user_desc">
        苦逼程序员
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userCell",
    props: {
      user: Object
    }
  }
</script>

<style scoped>
  .user_cell {
    width: 100%;
    height: 60px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .user_avatar {
    width: 50px;
    height: 50px;
  }
  .user_info {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: rgba(255, 255, 255, 0.8);
    padding: 5px 0 5px 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .user_name {
    font-size: 15px;
  }
  .user_desc {
    font-size: 12px;
  }
</style>