import axios from "axios";

const weatherUrl =
  "/weatherAPI/v3/weather/daily.json?key=pgfx1t9fhgu7bbko&language=zh-Hans&unit=c";
const cityUrl =  "/cityAPI/cityjson?ie=utf-8";

const weather = {
  state: {
    city: "",
    ip: "",
    weatherInfo: {
      daily: [
        {
          date: "",
          text_day: "",
          low: "",
          high: ""
        },
        {
          date: "",
          text_day: "",
          low: "",
          high: ""
        },
        {
          date: "",
          text_day: "",
          low: "",
          high: ""
        }
      ]
    }
  },
  mutations: {
    setCity(state, city) {
      state.city = city;
    },
    setIP(state, ip) {
      state.ip = ip;
    },
    setWeather(state, weather) {
      state.weatherInfo = weather;
    }
  },
  getters: {
    getCity: state => state.city,
    getWeather: state => state.weatherInfo
  },
  actions: {
    getWeatherInfo(context) {
      axios.get(cityUrl).then(response => {
        let ip = response.data.substring(
          response.data.indexOf("cip") + 7,
          response.data.indexOf("cid") - 4
        );
        let city = "北京";
        if(response.data.indexOf("市")>0) {
          city = response.data.substring(
            response.data.indexOf("省") + 1,
            response.data.indexOf("市")
          );
        } else {
          city = response.data.substring(
            response.data.indexOf("省") - 2,
            response.data.indexOf("省")
          )
        }
        context.commit("setCity", city);
        context.commit("setIP", ip);
        let wurl = weatherUrl + "&location=" + ip;
        axios.get(wurl).then(response => {
          let daily = response.data.results[0];
          context.commit("setWeather", daily);
        });
      });
    }
  }
};

export default weather;
