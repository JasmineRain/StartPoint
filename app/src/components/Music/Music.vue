<template>
	<div class="content">
		<el-row>
			<FuncPanel/>
		</el-row>
		<router-view></router-view>
	</div>
</template>


<script>
/* eslint-disable vue/no-unused-components */
import FuncPanel from "./FuncPanel/FuncPanel";
export default {
  name: "Music",
  components: {
    FuncPanel
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px 20px 0 20px;
}
@media screen and (max-width: 400px) {
  .content {
    padding-top: 0;
  }
}
</style>
