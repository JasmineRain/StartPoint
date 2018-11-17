import axios from "axios";

const weather = {
  state: {
    city: "",
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
    setWeather(state, weather) {
      state.weatherInfo = weather;
    }
  },
  getters: {
    getCity: state => state.city,
    getWeather: state => state.weatherInfo
  },
  actions: {
    getWeatherInfo(context, payload) {
      axios.get(payload.curl).then(response => {
        let info = response.data.substring(
          response.data.indexOf("省") + 1,
          response.data.indexOf("市")
        );
        context.commit("setCity", info);
        let wurl = payload.wurl + "&location=" + context.state.city;
        axios.get(wurl).then(response => {
          let daily = response.data.results[0];
          context.commit("setWeather", daily);
        });
      });
    }
  }
};

export default weather;
