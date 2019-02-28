<template>
  <div>
    <Description/>
    <Change/>
    <Clock/>
    <Copyright/>
    <Weather/>
  </div>
</template>

<script>
  import Copyright from "../Home/CopyrightInfo/CopyrightInfo";
  import Description from "../Home/Description/Description";
  import Change from "../Home/Change/Change";
  import Clock from "../Global/Clock/Clock";
  import Weather from "../Global/Weather/Weather";

  export default {
    name: "Home",
    components: {
      Description,
      Change,
      Clock,
      Copyright,
      Weather
    }
  };
</script>

<style scoped>
</style>
