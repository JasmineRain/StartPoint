<template>
    <div>
        <Description/>
        <Weather/>
        <Change/>
        <Clock/>
    </div>
</template>

<script>
//import Copyright from "../Home/CopyrightInfo/CopyrightInfo";
import Description from "../Home/Description/Description";
import Weather from "../Global/Weather/Weather";
import Change from "../Home/Change/Change";
import Clock from "../Global/Clock/Clock";
export default {
  name: "Home",
  components: {
    Description,
    Weather,
    Change,
    Clock
  }
};
</script>

<style scoped>
</style>
