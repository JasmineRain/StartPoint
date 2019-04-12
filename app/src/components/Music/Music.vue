<template>
  <div class="content">
    <el-row class="music_content">

      <!--小屏以上-->
      <el-row v-if="isHigher768" class="music">

        <el-row class="sheet">
          <el-col :span="16" class="list">
            <FuncPanel></FuncPanel>
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
          <el-col :span="8" class="lyric_cd">
            <CD></CD>
          </el-col>
        </el-row>

      </el-row>
      <el-row class="panel hidden-xs-only">
        <el-col :md="4" :lg="4" :sm="4" :xs="24">
          <PlayerCtrl></PlayerCtrl>
        </el-col>
        <el-col :md="12" :lg="12" :sm="12" :xs="24">
          <Progress></Progress>
        </el-col>
        <el-col :md="8" :lg="8" :sm="8">
          <PlayerModel></PlayerModel>
        </el-col>
      </el-row>

      <!--小屏-->
      <el-row v-if="!isHigher768" class="music_m">

        <el-row class="sheet">
          <FuncPanel></FuncPanel>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-row>

      </el-row>
      <el-row class="panel_m hidden-sm-and-up">
        <el-col :span="24">
          <PlayerCtrl></PlayerCtrl>
        </el-col>
        <el-col :span="24">
          <Progress></Progress>
        </el-col>
      </el-row>


    </el-row>
  </div>
</template>


<script>
  /* eslint-disable vue/no-unused-components */
  import Sheet from "./Sheet/Sheet";
  import PlayerCtrl from "./CtrlPanel/PlayerCtrl/PlayerCtrl";
  import Progress from "./CtrlPanel/Progress/Progress";
  import PlayerModel from "./CtrlPanel/PlayerMode/PlayerMode";
  import CD from "./CD/CD";
  import FuncPanel from "./FuncPanel/FuncPanel";
  import "element-ui/lib/theme-chalk/display.css";
  export default {
    name: "Music",
    components: {
      FuncPanel,
      Sheet,
      PlayerCtrl,
      Progress,
      PlayerModel,
      CD
    },
    mounted() {
      this.$store.dispatch("getRecmList");
    },
    computed: {
      isHigher768: function () {
        return this.$store.getters.getClientWid >= 768
      }
    }
  };
</script>

<style scoped>
  .content {
    position: fixed;
    top: 50px;
    bottom: 0;
    right: 40px;
    left: 40px;
    padding: 10px;
  }

  @media screen and (max-width: 1440px) {
    .content {
      top: 40px;
      bottom: 20px;
      right: 20px;
      left: 20px;
    }
  }

  @media screen and (max-width: 525px) {
    .content {
      top: 40px;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 0
    }
  }

  .music {
    height: calc(100% - 80px);
  }

  .music_m {
    height: calc(100% - 121px);
  }

  .panel {
    height: 80px;
    display: flex;
    align-items: center;
  }

  .panel_m {
    padding: 0 20px;
  }

  .music_content {
    width: 100%;
    height: 100%;
  }

  .sheet {
    height: 100%;
    padding: 10px;
  }

  @media screen and (max-width: 525px) {
    .panel_m {
      padding: 0 10px;
    }
  }

  .list {
    height: 100%;
  }

  .lyric_cd {
    height: 100%;
  }
</style>
