<template>
  <div class="playlists">
    <el-tabs v-model="params.vendor" @tab-click="clickTab">
      <el-tab-pane class="item" label="QQ音乐" name="qq">
        <div class="info" v-loading="loading_cat" element-loading-background="rgba(0, 0, 0, 0.1)">
          <div class="categories">
            <el-menu
                :default-active="params.id"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#FF0000"
                @select="clickMenu">
              <el-menu-item index="all">
                <span slot="title" key="qq_all">全部</span>
              </el-menu-item>
              <el-menu-item v-for="cat in categories['qq']" :index="cat.id.toString()" :key="cat.id">
                <span slot="title">{{cat.name}}</span>
              </el-menu-item>
            </el-menu>
          </div>
          <div class="cat_result" v-loading="loading_list" element-loading-background="rgba(0, 0, 0, 0.5)">
            <el-row class="container">
              <el-col :xs="12" :sm="8" :md="6" :lg="6" v-for="(item, index) in lists" :key="item.id" class="list_item">
                <div class="playlist_item" :title="parseInt(item.list.play/1000) + 'K播放 ' + item.list.name">
                  <img :title="parseInt(item.list.play/1000) + 'K播放 ' + item.list.name" :src="item.list.cover" alt="" style="width: 100px; height: 100px">
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane class="item" label="网易云音乐" name="netease">
        <div class="info">
          <div class="categories">
            <el-menu
                :default-active="params.id"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#FF0000"
                @select="clickMenu">
              <el-menu-item index="all">
                <span slot="title" key="netease_all">全部</span>
              </el-menu-item>
              <el-menu-item v-for="cat in categories['netease']" :index="cat.id.toString()" :key="cat.id">
                <span slot="title">{{cat.name}}</span>
              </el-menu-item>
            </el-menu>
          </div>
          <div class="cat_result" v-loading="loading_list" element-loading-background="rgba(0, 0, 0, 0.5)">
            <el-row class="container">
              <el-col :xs="12" :sm="8" :md="6" :lg="6" v-for="(item, index) in lists" :key="item.id" class="list_item">
                <div class="playlist_item" :title="parseInt(item.list.play/1000) + 'K播放 ' + item.list.name">
                  <img :title="parseInt(item.list.play/1000) + 'K播放 ' + item.list.name" :src="item.list.cover" alt="" style="width: 100px; height: 100px">
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane disabled class="item" label="虾米音乐" name="xiami">虾米音乐开发中</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: "TopPlaylists",
    data() {
      return {
        params: {
          vendor: 'qq',
          id: "all"
        }
      };
    },
    computed: {
      categories: function () {
        return this.$store.getters.getHotCategories;
      },
      lists: function () {
        return this.$store.getters.getTopPlaylists;
      },
      loading_cat: function () {
        return this.$store.getters.getHotCategoriesLoading;
      },
      loading_list: function () {
        return this.$store.getters.getTopPlaylistsLoading;
      }
    },
    methods: {
      clickTab: function (tab) {
        this.params.id = 'all';
        if(!this.categories[tab.name]){
          this.$store.dispatch("getHotCategories", {vendor: tab.name});
        }
      },
      clickMenu: function (key) {
        //this.$store.dispatch("getTopPlaylists", {vendor: this.vendor, id: key});
        this.params.id = key;
      }
    },
    created() {
      this.$store.dispatch("getHotCategories", {vendor: "qq"});
    },
    watch: {
      params: {
        handler: function () {
          if(this.params.id === 'all')
            this.$store.dispatch("getTopPlaylists", {vendor: this.params.vendor});
          else
            this.$store.dispatch("getTopPlaylists", {vendor: this.params.vendor, id: this.params.id});
        },
        deep: true
      }
    }
  }
</script>

<style scoped>
  .playlists{
    width: 100%;
    height: calc(100% - 60px);
    color: rgba(225, 225, 225, 0.8);
    overflow: auto;
    position: relative;
  }
  #pane-qq, #pane-netease, #pane-xiami {
    overflow: hidden;
  }
  .info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .categories {
    height: 100%;
    width: 100px;
    border-right: solid 1px rgba(125, 125, 125, 0.8);
    overflow: scroll;
  }
  .categories::before {
    content: '...';
    width: 100px;
    height: 10px;
    position: absolute;
    bottom: 0;
    color: white;
    text-align: center;
    font-size: 10px;
  }
  .cat_result {
    width: calc(100% - 70px);
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .container {
    width: 100%;
    height: 100%;
  }
  .playlist_item {
    width: 100%;
    cursor: pointer;
    text-align: center;
    position: relative;
  }
  .playlist_item::before {
    content:attr(title);
    position: absolute;
    bottom: 0;
    width: 100px;
    margin: 0 auto;
    height: 30px;
    line-height: 30px;
    text-overflow: ellipsis;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    background: rgba(0,0,0,0.3);
    color: #fff;
    font-size: 12px;
  }
</style>