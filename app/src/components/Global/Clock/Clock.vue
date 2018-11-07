<template>
    <div class="content">
        <div class="time">
            {{ctime.hour+" : "+ctime.minute+" : "+ctime.second}}
        </div>
        <div class="date">
            {{ctime.date+" "+ctime.month+" "+ctime.year+", "+ctime.day}}
        </div>
    </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Clock",
  data() {
    return {
      year: moment().format("YYYY"),
      month: moment().format("MMM"),
      date: moment().format("Do"),
      day: moment().format("ddd"),
      hour: moment().format("H"),
      minute: moment().format("mm"),
      second: moment().format("ss")
    };
  },
  computed: {
    ctime() {
      return {
        year: this.year,
        month: this.month,
        date: this.date,
        day: this.day,
        hour: this.hour,
        minute: this.minute,
        second: this.second
      };
    }
  },
  methods: {
    timeTicker: function() {
      setInterval(this.setTime, 1000);
    },
    setTime: function() {
      this.year = moment().format("YYYY");
      this.month = moment().format("MMM");
      this.date = moment().format("Do");
      this.day = moment().format("ddd");
      this.hour = moment().format("H");
      this.minute = moment().format("mm");
      this.second = moment().format("ss");
    }
  },
  mounted() {
    this.timeTicker();
  }
};
</script>

<style scoped>
.content {
  overflow: hidden;
  position: absolute;
  bottom: 20px;
  left: 20px;
  text-shadow: 5px, 5px, 5px, #a4d1ff;
}
.time {
  color: #ffffff;
  font-size: 2vw;
}
.date {
  font-size: 1.5vw;
  color: #ffffff;
}
</style>
