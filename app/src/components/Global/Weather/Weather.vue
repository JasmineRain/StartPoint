<template>
    <div class="weather">
        <weather/>
    </div>
</template>

<script>
import weather from "../../../common/weather";

export default {
  name: "Weather",
  component: weather
};
</script>

<style scoped>
@media screen and (max-width: 400px) {
  .weather {
    display: none;
  }
}
</style>
