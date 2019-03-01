<template>
  <el-row class="music_content">

    <!--小屏以上-->
    <el-row class="music hidden-xs-only">

      <el-row class="sheet">
        <el-col :span="16" class="list">
          <FuncPanel/>
          <Sheet/>
        </el-col>
        <el-col :span="8" class="lyric_cd">
          <CD/>
        </el-col>
      </el-row>

    </el-row>
    <el-row class="panel hidden-xs-only" :gutter="20">
      <el-col :md="6" :lg="6" :sm="6" :xs="24">
        <PlayerCtrl/>
      </el-col>
      <el-col :md="12" :lg="12" :sm="12" :xs="24">
        <Progress/>
      </el-col>
      <el-col :md="6" :lg="6" :sm="6">
        <PlayerModel/>
      </el-col>
    </el-row>

    <!--小屏-->
    <el-row class="music_m hidden-sm-and-up">

      <el-row class="sheet">
        <FuncPanel/>
        <Sheet/>
      </el-row>

    </el-row>
    <el-row class="panel_m hidden-sm-and-up">
      <el-col :span="24">
        <PlayerCtrl/>
      </el-col>
      <el-col :span="24">
        <Progress/>
      </el-col>
    </el-row>


  </el-row>
</template>

<script>
  /* eslint-disable vue/no-unused-components */

  import Sheet from "../Sheet/Sheet";
  import PlayerCtrl from "../CtrlPanel/PlayerCtrl/PlayerCtrl";
  import Progress from "../CtrlPanel/Progress/Progress";
  import PlayerModel from "../CtrlPanel/PlayerMode/PlayerMode";
  import CD from "../CD/CD";
  import "element-ui/lib/theme-chalk/display.css";
  import FuncPanel from "../FuncPanel/FuncPanel";

  export default {
    name: "Player",
    components: {
      FuncPanel,
      Sheet,
      PlayerCtrl,
      Progress,
      PlayerModel,
      CD
    }
  };
</script>

<style scoped>
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
