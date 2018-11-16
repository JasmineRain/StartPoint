<template>
    <div class="scroll">
        <el-table
            :data="tableData3"
            height="70vh"
            class="music-list"
            :default-sort = "{prop: 'date', order: 'descending'}">
            <el-table-column
                type="index">
            </el-table-column>
            <el-table-column
                :show-overflow-tooltip="true"
                prop="date"
                label="歌曲"
                sortable>
            </el-table-column>
            <el-table-column
                :show-overflow-tooltip="true"
                prop="name"
                label="歌手"
                sortable>
            </el-table-column>
            <el-table-column
                :show-overflow-tooltip="true"
                prop="address"
                label="专辑"
                v-if="show"
                sortable>
            </el-table-column>
            <el-table-column
                :show-overflow-tooltip="true"
                prop="time"
                width="80px"
                align="center"
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
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "03:23"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "03:23"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "03:23"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "03:23"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "03:23"
        },
        {
          date: "2016-05-07",
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
      ],
      width: document.body.clientWidth
    };
  },
  computed: {
    show: function() {
      return this.width > 500;
    }
  },
  methods: {
    setWidth: function() {
      this.width = document.body.clientWidth;
    }
  },
  mounted() {
    window.onresize = () => {
      this.setWidth();
    };
  }
};
</script>

<style scoped>
.music-list {
  color: #fff;
  background-color: transparent;
}
</style>
