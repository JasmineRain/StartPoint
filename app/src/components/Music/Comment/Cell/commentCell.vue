<template>
  <div class="commentCell">
    <div class="cmt_avatar">
      <img style="width: 100%; height: 100%; border-radius: 50%" :src="avatar" alt="../../../../assets/test.jpg">
    </div>
    <div class="cmt_info">
      <div class="cmt_text">
        <div class="cmt_author">
          {{author}}
        </div>
        <div class="cmt_content">
          {{content}}
        </div>
      </div>
      <div class="cmt_meta">
        <div class="cmt_author">
          {{like + " 赞"}}
        </div>
        <div class="cmt_time">
          {{new Date(time).toLocaleDateString().replace(/\//g, ".")}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "commentCell",
    props: {
      author: String,
      avatar: String,
      content: String,
      like: Number,
      time: Number
    }
  }
</script>

<style>
  .commentCell {
    width: 100%;
    height: 90px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .cmt_avatar {
    width: 80px;
    height: 80px;
  }
  .cmt_info {
    width: calc(100% - 80px);
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: rgba(255, 255, 255, 0.8);
    padding: 5px 10px 5px 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .cmt_text {
    width: calc(70% - 10px);
    height: calc(100% - 10px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: rgba(255, 255, 255, 0.8);
  }
  .cmt_meta {
    width: calc(30% - 10px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    color: rgba(255, 255, 255, 0.8);
    padding: 10px 0 10px 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .cmt_author {
    font-size: 15px;
  }
  .cmt_content {
    width: 100%;
    height: calc(100% - 20px);
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cmt_time {
    font-size: 12px;
  }
</style>