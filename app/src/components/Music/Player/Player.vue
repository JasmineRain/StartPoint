<template>
	<el-row>
		<el-row class="sheet">
			<el-col :md="16" :lg="16" :sm="16" :xs="24">
				<el-row>
					<Sheet/>
				</el-row>
			</el-col>
			<el-col :md="8" :lg="8" :sm="8" class="hidden-xs-only">
				<CD/>
			</el-col>
		</el-row>
		<el-row :gutter="20">
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
export default {
  name: "Player",
  components: {
    Sheet,
    PlayerCtrl,
    Progress,
    PlayerModel,
    CD
  }
};
</script>

<style scoped>
@media screen and (min-height: 1000px) {
  .sheet {
    margin-bottom: 30px;
  }
}
@media screen and (min-width: 1600px) {
  .sheet {
    margin-bottom: 50px;
  }
}
</style>
