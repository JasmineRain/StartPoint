<template>
    <div class="model">
        <ul class="modelBtn">
            <li>
                <img src="../../../../assets/like.png" alt="">
            </li>
            <li>
                <img src="../../../../assets/download.png" alt="">
            </li>
            <li>
                <img src="../../../../assets/model.png" alt="">
            </li>
            <li>
                <img src="../../../../assets/voice.png" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "PlayerModel"
};
</script>

<style scoped>
.model {
  overflow: hidden;
}
.modelBtn {
  display: flex;
  justify-content: space-around;
}
ul {
  margin: 20px 0;
}
li {
  float: left;
  list-style: none;
}
</style>
