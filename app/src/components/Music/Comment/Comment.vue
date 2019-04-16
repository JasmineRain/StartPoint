<template>
  <div class="comment">
    <el-dialog top="10vh" custom-class="comment_dialog" title="歌曲评论" :visible="visible" :append-to-body="true" @close="close">
      <div v-if="comments" class="comment_cell" v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.1)">
        <h2>热评</h2>
        <CommentCell v-for="(comment, index) in comments['hot']" v-bind="comment" :key="index + 'hot'">
        </CommentCell>
        <h2>最新评论</h2>
        <CommentCell v-for="(comment, index) in comments['new']" v-bind="comment" :key="index + 'new'">
        </CommentCell>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import CommentCell from "./Cell/commentCell";
  export default {
    name: "Comment",
    components: { CommentCell },
    data() {
      return {
      }
    },
    computed: {
      visible: function () {
        return this.$store.getters.getShowComment;
      },
      comments: function () {
        return this.$store.getters.getMusicComment;
      },
      loading: function () {
        return this.$store.getters.getCommentLoading;
      }
    },
    methods: {
      close: function () {
        this.$store.commit("setShowComment", false);
      }
    }
  }
</script>

<style>
  .comment_cell {
    width: 100%;
    height: 90px;
  }
  .el-dialog__body {
    overflow-y: scroll;
    padding: 10px !important;
    height: calc(100% - 74px);
    color: rgba(255, 255, 255, 0.8) !important;
  }
  .el-dialog {
    background: rgba(25,25,25,0.8) !important;
  }
  .el-dialog__title {
    color: rgba(255, 255, 255, 0.8) !important;
  }
  .comment_dialog {
    height: 80vh;
  }
</style>