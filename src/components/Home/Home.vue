<template>
    <div>
        <Navigation></Navigation>
        <Background></Background>
        <Copyright/>
        <Description/>
    </div>
</template>

<script>
import Navigation from "../Global/Nav/Navigation";
import Background from "../Global/Background/Background";
import Copyright from "../Home/CopyrightInfo/CopyrightInfo";
import Description from "../Home/Description/Description";
export default {
  name: "Home",
  components: {
    Navigation,
    Background,
    Copyright,
    Description
  }
};
</script>

<style scoped>
</style>
