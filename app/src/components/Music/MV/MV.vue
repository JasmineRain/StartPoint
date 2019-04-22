<template>
  <div class="mv">
    <el-dialog top="3vh" custom-class="mv_dialog" title="MV" :visible="visible" :append-to-body="true" @close="close">
      <h2 v-if="!mv">暂无MV</h2>
      <div v-if="mv" v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.1)">
        <d-player :options="options" ref="mvplayer">
        </d-player>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import VueDPlayer from 'vue-dplayer'
  import 'vue-dplayer/dist/vue-dplayer.css'
  export default {
    name: "MV",
    components: {
      'd-player': VueDPlayer
    },
    data() {
      return {
      }
    },
    computed: {
      visible: function () {
        return this.$store.getters.getShowMV;
      },
      loading: function () {
        return this.$store.getters.getMVLoading;
      },
      mv: function () {
        return this.$store.getters.getMVUrl;
      },
      options: function () {
        return {
          video: {
            url: this.$store.getters.getMVUrl
          },
          autoplay: true
        }
      }
    },
    methods: {
      close: function () {
        this.$store.commit("setShowMV", false);
        if(this.$refs.mvplayer)
          this.$refs.mvplayer.dp.pause();
      }
    },
    mounted() {
    }
  }
</script>

<style>
  .mv_dialog {
    width: 65% !important;
  }
  .el-dialog__wrapper {
    overflow: scroll !important;
  }
</style>