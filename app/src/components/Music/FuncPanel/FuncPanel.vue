<template>
	<el-row class="funcBtn">
		<el-button size="medium" round class="btn">排行榜/歌单</el-button>
		<el-button size="medium" round class="btn">发现</el-button>
	</el-row>
</template>

<script>
export default {
  name: "FuncPanel"
};
</script>

<style scoped>
.funcBtn {
  display: flex;
  justify-content: start;
  margin-bottom: 2vh;
}
.btn {
  color: #fff;
  background: transparent;
}
.btn:hover {
  border: 1px solid #fff !important;
  box-shadow: #fff 0 0 10px 1px;
  background-color: initial;
  color: #fff;
}
.btn:focus {
  background-color: initial;
  color: #fff;
}
@media screen and (max-width: 400px) {
  .btn {
    font-size: 12px;
  }
}
</style>
