<!--suppress JSPotentiallyInvalidTargetOfIndexedPropertyAccess -->
<template>
  <div class="weather">
    <el-popover
        placement="top-start"
        width="200px"
        trigger="hover">
      <div class="pop">
        <ul>
          <li>
            <div class="day">
              <p>{{daily[0].date.substring(daily[0].date.indexOf("-")+1)}}</p>
              <p>{{daily[0].text_day}}</p>
              <p>{{daily[0].low + " - " + daily[0].high + "℃"}}</p>
            </div>
          </li>
          <li>
            <div class="day">
              <p>{{daily[1].date.substring(daily[1].date.indexOf("-")+1)}}</p>
              <p>{{daily[1].text_day}}</p>
              <p>{{daily[1].low + " - " + daily[1].high + "℃"}}</p>
            </div>
          </li>
          <li>
            <div class="day">
              <p>{{daily[2].date.substring(daily[2].date.indexOf("-")+1)}}</p>
              <p>{{daily[2].text_day}}</p>
              <p>{{daily[2].low + " - " + daily[2].high + "℃"}}</p>
            </div>
          </li>
        </ul>
      </div>

      <el-button slot="reference" class="btn">{{location}}</el-button>
    </el-popover>
  </div>
</template>

<script>
  export default {
    name: "Weather",
    data() {
      return {};
    },
    computed: {
      daily() {
        return this.$store.getters.getWeather.daily;
      },
      location() {
        return this.$store.getters.getCity;
      }
    },
    methods: {
      getInfo: function () {
        this.$store.dispatch("getWeatherInfo");
      }
    },
    created() {
      this.getInfo();
    }
  };
</script>

<style scoped>
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

  .weather {
    position: absolute;
    bottom: 30px;
    right: 20px;
  }

  @media screen and (max-width: 360px) {
    .weather {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .weather {
      bottom: 20px;
    }
  }

  ul {
    overflow: hidden;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }

  li {
    float: left;
    list-style: none;
  }

  p {
    text-align: center;
  }

  .day {
    margin: 0 10px;
  }
</style>
