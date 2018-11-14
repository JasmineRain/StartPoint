<template>
    <div>
        <el-table
        :data="tableData3"
        height="300px"
        :default-sort = "{prop: 'date', order: 'descending'}">
            <el-table-column
                type="index">
            </el-table-column>
            <el-table-column
                prop="date"
                label="歌曲"
                width="180"
                sortable>
            </el-table-column>
            <el-table-column
                prop="name"
                label="歌手"
                width="180"
                sortable>
            </el-table-column>
            <el-table-column
                prop="address"
                label="专辑">
            </el-table-column>
            <el-table-column
                prop="time"
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
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "03:23"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "03:23"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "03:23"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "03:23"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "03:23"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "03:23"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "03:23"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
