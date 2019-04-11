<template>
  <keep-alive>
    <div class="lists">
      <el-tabs v-model="activeName">
        <el-tab-pane class="item" label="QQ音乐" name="qq">
          <span v-if="loading" style="color: white">loading...</span>
          <el-row class="container">
            <el-col :xs="12" :sm="8" :md="6" :lg="6" v-for="(item, index) in lists[activeName]" :key="item.id" class="list_item">
              <div class="item_detail" :title="item.desc" @click="clickItem(item)">
                <img :src="item.cover" alt="" style="width: 110px; height: 110px">
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane class="item" label="网易云音乐" name="netease">
          <span v-if="loading" style="color: white">loading...</span>
          <el-row class="container">
            <el-col :xs="12" :sm="8" :md="6" :lg="6" v-for="(item, index) in lists[activeName]" :key="item.id" class="list_item">
              <div class="item_detail" :title="item.desc" @click="clickItem(item)">
                <img :src="item.cover" alt="" style="width: 110px; height: 110px">
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane class="item" label="虾米音乐" name="xiami">虾米音乐开发中</el-tab-pane>
      </el-tabs>
    </div>
  </keep-alive>
</template>

<script>
  export default {
    name: "Toplists",
    data() {
      return {
        activeName: 'qq'
      };
    },
    computed: {
      lists: function () {
        return this.$store.getters.getToplists;
      },
      loading: function () {
        return this.$store.getters.getToplistsLoading;
      }
    },

    methods: {
      getToplists: function () {
        this.$store.dispatch("getToplists")
      },
      clickItem(item) {
        this.$router.push(`/music/sheet/toplist/${this.activeName}/${item.id}`);
        let params = {
          vendor: this.activeName.toLowerCase(),
          idx: item.id,
          update_key: item.update_key
        };
        this.$store.dispatch("getToplistDetail", params)
      }
    },
    mounted() {
      this.getToplists();
    }
  }
</script>

<style>
  .lists{
    width: 100%;
    height: calc(100% - 60px);
    color: rgba(225, 225, 225, 0.8);
    overflow: auto;
    position: relative;
  }
  .container {
    width: 100%;
  }
  .list_item {
    padding: 10px 5px;
  }
  .item_detail {
    width: 100%;
    cursor: pointer;
    text-align: center;
    position: relative;
  }
  .item_detail::before {
    content:attr(title);
    position: absolute;
    bottom: 0;
    width: 110px;
    margin: 0 auto;
    height: 30px;
    line-height: 30px;
    text-overflow: ellipsis;
    padding: 0 5px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    background: rgba(0,0,0,0.3);
    color: #fff;
    font-size: 12px;
  }
  .el-tabs__item:hover {
    color: rgba(255, 255, 255, 0.9)!important;
  }
  .el-tabs__item {
    color: rgba(225, 225, 225, 0.8)!important;
  }
  .el-tabs__item.is-active {
    color: rgba(255, 255, 255, 0.9)!important;
  }
  .el-tabs__active-bar {
    background-color: red!important;
  }
  .el-tabs__nav-wrap::after{
    background-color: rgba(255, 255, 255, 0.8)!important;
  }
  #pane-qq, #pane-netease, #pane-xiami {
    overflow: scroll;
  }
</style>