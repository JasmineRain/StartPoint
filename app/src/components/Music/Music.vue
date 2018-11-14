<template>
	<div class="content">
		<el-row>

			<el-col :md="16" :lg="16" :sm="16" :xs="24">
				<FuncPanel/>
				<Sheet/>
			</el-col>

			<el-col :md="8" :lg="8" :sm="8" :xs="0">
				aaa
			</el-col>

		</el-row>


		<el-row>
			<el-col :md="4" :lg="4" :sm="4" :xs="24">
				<PlayerCtrl/>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import Sheet from "./Sheet/Sheet";
import FuncPanel from "./FuncPanel/FuncPanel";
import PlayerCtrl from "./CtrlPanel/PlayerCtrl/PlayerCtrl";
export default {
  name: "Music",
  components: {
    Sheet,
    FuncPanel,
    PlayerCtrl
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
  padding: 20px;
}
</style>
