<template>
    <ul>
        <li>
            <img src="../../../../assets/media-previous.png" alt="">
        </li>
        <li>
            <img src="../../../../assets/play.png" alt="">
        </li>
        <li>
            <img src="../../../../assets/media-next.png" alt="">
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
  padding: 0 20px;
}
ul {
  display: flex;
  justify-content: space-around;
  padding: 0;
}
</style>
