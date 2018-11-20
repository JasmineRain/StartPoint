<template>
    <div class="scroll">
        <el-table
            @row-dblclick="dbclickRow"
            v-loading = "loading"
            element-loading-text="request"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.6)"
            :data="musicData"
            height="70vh"
            class="music-list"
            :default-sort = "{prop: 'date', order: ''}">
            <el-table-column
                type="index">
            </el-table-column>
            <el-table-column
                :show-overflow-tooltip="true"
                prop="songname"
                label="歌曲"
                sortable>
            </el-table-column>
            <el-table-column
                :show-overflow-tooltip="true"
                width="90px"
                prop="singer"
                label="歌手"
                sortable>
            </el-table-column>
            <el-table-column
                :show-overflow-tooltip="true"
                prop="albumname"
                label="专辑"
                v-if="show"
                align="center"
                sortable>
            </el-table-column>
            <el-table-column
                :show-overflow-tooltip="true"
                prop="duration"
                width="80px"
                align="center"
                label="时长">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name: "Sheet",
  data() {
    return {
      width: document.body.clientWidth
    };
  },
  computed: {
    show: function() {
      return this.width > 550;
    },
    musicData: function() {
      return this.$store.getters.getMusicList;
    },
    loading: function() {
      return !this.musicData.length;
    }
  },
  methods: {
    setWidth: function() {
      this.width = document.body.clientWidth;
    },
    dbclickRow: function(row) {
      this.$store.dispatch("getQQMusicDetail", row);
    }
  },
  mounted() {
    window.onresize = () => {
      this.setWidth();
    };
  },
  created() {
    this.$store.dispatch("getQQTopList");
  }
};
</script>

<style scoped>
.music-list {
  color: #fff;
  background-color: transparent;
}
</style>
