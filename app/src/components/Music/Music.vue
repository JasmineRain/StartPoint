<template>
	<div class="content">
		<el-row class="sheet">

			<el-col :md="16" :lg="16" :sm="16" :xs="24">
				<el-row>
					<FuncPanel/>
				</el-row>
				<el-row>
					<Sheet/>
				</el-row>
			</el-col>

			<el-col :md="8" :lg="8" :sm="8" :xs="0">
				aaa
			</el-col>

		</el-row>


		<el-row :gutter="20" style="margin-top: 10px">
			<el-col :md="4" :lg="4" :sm="4" :xs="24">
				<PlayerCtrl/>
			</el-col>
			<el-col :md="12" :lg="12" :sm="12" :xs="24">
				<Progress/>
			</el-col>
			<el-col :md="8" :lg="8" :sm="8" :xs="24">
				<PlayerModel/>
			</el-col>
		</el-row>
	</div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Sheet from "./Sheet/Sheet";
import FuncPanel from "./FuncPanel/FuncPanel";
import PlayerCtrl from "./CtrlPanel/PlayerCtrl/PlayerCtrl";
import Progress from "./CtrlPanel/Progress/Progress";
import PlayerModel from "./CtrlPanel/PlayerModel/PlayerModel";
export default {
  name: "Music",
  components: {
    Sheet,
    FuncPanel,
    PlayerCtrl,
    Progress,
    PlayerModel
  }
};
</script>

<style scoped>
.content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 75px 20px 20px 20px;
}
.sheet {
  overflow: hidden;
}
</style>
