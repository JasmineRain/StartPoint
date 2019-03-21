<template>
  <div>
    <div class="music_progress" id="music_progress">
      <div class="music_current_detail">
        <span class="music_c_name">{{currentMusic.name ? currentMusic.name : '单击开始播放'}} - {{currentMusic.singer ? currentMusic.singer[0].name : '^v^'}}</span>
        <span class="music_c_time">{{time || "00:00"}}</span>
      </div>
      <div class="music_progress_bar">
        <div class="duration" id="music_progressD" @click="clickProgress">
          <div class="buffering" :style="{width:`${buffered}%`}"></div>
          <div class="real" :style="{width: musicProgress}"></div>
        </div>
        <div class="range" @mousedown="dragMouseDown" @touchstart="dragTouchStart" @touchmove="dragTouchMove"
             @touchend="dragTouchEnd" :style="{left:`${musicProgress}`}"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import musicUtil from "../../../../common/js/music";

  export default {
    name: "Progress",
    data() {
      return {
        maxProgressWidth: 0,
        dragProgressTo: 0,
        x: 0,  // x 的位置
        l: 0,  // offsetleft
      };
    },
    computed: {
      //当前曲目
      currentMusic: function () {
        return this.$store.getters.getCurrentMusic;
      },

      //播放进度
      musicProgress() {
        const mp = this.$store.getters.getCurrentDuration;
        return (mp).toFixed(4) + '%'
      },

      //时长显示
      time() {
        return musicUtil.formatDuration(this.$store.getters.getCurrentTime) + "/" +
          musicUtil.formatDuration(this.currentMusic.duration)
      },

      //当前音乐序号
      index: function () {
        return this.$store.getters.getCurrentMusic.index;
      },

      //已缓冲（0-100）
      buffered: function () {
        return this.$store.getters.getBuffered;
      },

      //鼠标拖动
      isDrag: function () {
        return this.$store.getters.getIsDrag;
      },

      //歌词滚动控制
      lyric: function () {
        return this.$store.getters.getLyric;
      }
    },
    methods: {
      //进度条控制
      dragMouseDown(event) {
        const player = this.$store.getters.getPlayer;
        if (player.src.indexOf('.') < 0) return;
        this.$store.commit("setIsDrag", true);
        let e = event || window.event;
        let x = e.clientX;
        let l = e.target.offsetLeft;
        this.maxProgressWidth = document.getElementById('music_progressD').offsetWidth;
        const moveProgress = document.getElementById('music_progress');
        moveProgress.onmousemove = (event) => {
          if (this.isDrag) {
            let e = event || window.event;
            let thisX = e.clientX;
            this.dragProgressTo = Math.min(this.maxProgressWidth, Math.max(0, l + (thisX - x)));
            this.updateDragProgress(this.maxProgressWidth, this.dragProgressTo);
          }
        };
        moveProgress.onmouseup = () => {
          const durationT = player.duration;
          if (this.isDrag) {
            this.$store.commit("setIsDrag", false);
            player.currentTime = Math.floor(this.dragProgressTo / this.maxProgressWidth * durationT)
          }
        };
        moveProgress.onmouseleave = () => {
          const durationT = player.duration;
          if (this.isDrag) {
            this.$store.commit("setIsDrag", false);
            player.currentTime = Math.floor(this.dragProgressTo / this.maxProgressWidth * durationT)
          }
        }
      },
      dragTouchStart(event) {
        const player = this.$store.getters.getPlayer;
        if (player.src.indexOf('.') < 0) return;
        this.$store.commit("setIsDrag", true);
        const e = event || window.event;
        this.x = e.touches[0].clientX;
        this.l = e.target.offsetLeft;
        this.maxProgressWidth = document.getElementById('music_progressD').offsetWidth
      },
      dragTouchMove(event) {
        if (this.isDrag) {
          let e = event || window.event;
          let thisX = e.touches[0].clientX;
          this.dragProgressTo = Math.min(this.maxProgressWidth, Math.max(0, this.l + (thisX - this.x)));
          this.updateDragProgress(this.maxProgressWidth, this.dragProgressTo)
        }
      },
      dragTouchEnd() {
        const player = this.$store.getters.getPlayer;
        const durationT = player.duration;
        if (this.isDrag) {
          this.$store.commit("setIsDrag", false);
          player.currentTime = Math.floor(this.dragProgressTo / this.maxProgressWidth * durationT)
        }
      },
      // 拖动  点击的进度效果   l length  to 移动的位置
      updateDragProgress(l, to) {
        const player = this.$store.getters.getPlayer;
        const durationT = player.duration;
        this.scrollLyric(Math.floor(to / l * durationT));
        this.$store.commit('setCurrentTime', Math.floor(to / l * durationT));
        this.$store.commit('setCurrentDuration', (Math.floor(to / l * durationT)) / durationT * 100)
      },
      clickProgress(event) {
        const player = this.$store.getters.getPlayer;
        const durationT = player.duration;
        const e = event || window.event;
        const l = e.offsetX;
        const w = document.getElementById('music_progressD').offsetWidth;
        player.currentTime = Math.floor(l / w * durationT);
      },
      setAudioEvents() {
        const player = this.$store.getters.getPlayer;
        player.ontimeupdate = () => {
          if (!this.isDrag) {
            const currentT = Math.floor(this.$store.getters.getPlayer.currentTime);
            this.scrollLyric(currentT);
            this.$store.commit("setCurrentTime", this.$store.getters.getPlayer.currentTime);
            this.$store.commit("setCurrentDuration", currentT / this.$store.getters.getPlayer.duration * 100)
          }
        };
        player.onended = () => {
          this.$store.dispatch("playNext", this.index + 1);
        };
        player.onprogress = () => {
          const durationT = Math.floor(player.duration);
          try {
            if (player.buffered.length > 0) {
              let bufferedT = 0;
              for (let i = 0; i < player.buffered.length; i++) {
                bufferedT += player.buffered.end(i) - player.buffered.start(i);
                if (bufferedT > durationT) {
                  bufferedT = durationT;
                }
              }
              this.$store.commit("setBuffered", Math.floor((bufferedT / durationT) * 100));
            }
          } catch (err) {
            console.log(err);
          }
        }
      },
      scrollLyric (time) {
        let lastLyric = 0;
        if (this.lyric === '')
          return false;
        time = parseInt(time);
        if (this.lyric === undefined || this.lyric[time] === undefined)
          return false;
        if (lastLyric === time)
          return true;
        let i = 0;
        this.$store.commit("setLyricIndex",i);
        for (let k in this.lyric) {
          if (k > time)
            break;
          i++
        }
        lastLyric = time;  // 记录方便下次使用
        this.$store.commit("setLyricIndex",i);
        try {
          let scroll = (document.getElementsByClassName('lrc-item')[0].offsetHeight * i) - this.$store.getters.getLyricContent.offsetHeight / 2;
          let content = this.$store.getters.getLyricContent;
          content.scrollTop = scroll;
        } catch (e) {
          console.log(e);
        }
      }
    },
    mounted() {
      this.setAudioEvents();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../../common/style/style.styl'
  @import '../../../../common/style/global.styl'
  .music_progress
    width: 100%
    padding: 0 20px
    box-sizing: border-box
    display: flex
    align-items: center
    flex-direction: column
    justify-content: center

    .music_current_detail
      display: block
      width: 100%
      height: auto
      color: $text_before_color
      margin-bottom: 10px
      font-size: 0
      overflow: hidden

      .music_c_name
        display: inline-block
        // text-align:left
        width: calc(100% - 115px)
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        font-size: 16px
        vertical-align: top

      .music_c_time
        display: inline-block
        font-size: 16px
        vertical-align: top
        text-align: right
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        // text-align:right
        width: 110px

    .music_progress_bar
      width: 100%
      height: 2px
      box-sizing: border-box
      position: relative
      cursor: pointer

      &:before {
        content: ''
        position: absolute
        bottom: 2px
        width: 100%
        height: 10px
        background: transparent
      }

      .duration
        width: 100%
        height: 2px
        position: relative
        background: $progress_color
        border-radius: 1px

        .buffering
          width: 20%
          height: 100%
          background: $buffering_color
          border-radius: 1px
          position: absolute
          top: 0
          left: 0
          transition: width 0.3s

        .real
          width: 10%
          position: absolute
          height: 100%
          left: 0
          background: $real_color
          border-radius: 1px

      .range
        width: 6px
        height: 6px
        margin-top: -3px
        margin-left: 0
        border-radius: 50%
        background-color: #f00
        position: absolute
        left: 0
        top: 50%
        z-index: 2
        cursor: pointer

        &:before
          content: " ";
          display: block;
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: radial-gradient(rgba(0, 0, 0, 0) 20%, rgba(255, 255, 255, 0.6) 50%, rgba(0, 0, 0, 0) 60%);
          top: 50%;
          margin-top: -12px;
          margin-left: -9px;
          cursor: pointer;
          outline: 0;
          -webkit-tap-highlight-color: transparent;
</style>
