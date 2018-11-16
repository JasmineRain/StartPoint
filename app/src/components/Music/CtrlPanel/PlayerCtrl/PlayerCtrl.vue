<template>
    <ul>
        <li>
            <img src="../../../../assets/previous.png" alt="">
        </li>
        <li>
            <img src="../../../../assets/play.png" alt="">
        </li>
        <li>
            <img src="../../../../assets/next.png" alt="">
        </li>
    </ul>
</template>

<script>
export default {
  name: "PlayerCtrl"
};
</script>

<style scoped>
li {
  float: left;
  list-style: none;
  margin: 0 2vw 0 2vw;
}
ul {
  display: flex;
  justify-content: space-around;
  padding: 0;
}
</style>
