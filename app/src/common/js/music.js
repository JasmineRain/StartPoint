const musicUtil = {
  formatDuration(interval) {
    let min = parseInt(interval / 60)
    .toString()
    .padStart(2, "0");
    let sec = parseInt(interval % 60)
    .toString()
    .padStart(2, "0");
    return min + ":" + sec;
  },

  parseLyric(lrc) {
    let lyrics = lrc.split("\n");
    let lrcObj = {};
    for (let i = 0; i < lyrics.length; i++) {
      let lyric = decodeURIComponent(lyrics[i]);
      let timeReg = /\[\d*:\d*(([.:])\d*)*\]/g;
      let timeRegExpArr = lyric.match(timeReg);
      if (!timeRegExpArr) continue;
      let clause = lyric.replace(timeReg, "");
      for (let k = 0, h = timeRegExpArr.length; k < h; k++) {
        let t = timeRegExpArr[k];
        let min = Number(String(t.match(/\[\d*/i)).slice(1)),
          sec = Number(String(t.match(/:\d*/i)).slice(1));
        let time = min * 60 + sec;
        lrcObj[time] = clause;
      }
    }
    return lrcObj;
  },

  // initAudioEvent(that) {
  //   // audio Dom元素
  //   const ele = this.$store.getters.getPlayer;
  //   ele.onloadedmetadata = () => {
  //   };
  //
  //   // 音乐播放结束事件
  //   ele.onended = (index) => {
  //     this.$store.dispatch("playNext", index + 1);
  //   };
  //   ele.ontimeupdate = function () {
  //     if (!that.isDrag) {
  //       const ele = store.getters.getAudioEle
  //       const duration = Math.floor(ele.duration)
  //       const currentT = Math.floor(ele.currentTime)
  //       musicApi.scrollLyric(currentT, that)
  //       // 设置currentT
  //       store.dispatch('set_AudioCurrentTime', currentT)
  //       // 设置duration
  //       store.dispatch('set_AudioCurrentD', currentT / duration * 100)
  //     }
  //   };
  //   // 监听缓冲的进度
  //   ele.onprogress = function () {
  //     const durationT = Math.floor(ele.duration)
  //     try {
  //       if (ele.buffered.length > 0) {
  //         var bufferedT = 0
  //         for (var i = 0; i < ele.buffered.length; i++) {
  //           bufferedT += ele.buffered.end(i) - ele.buffered.start(i)
  //           if (bufferedT > durationT) {
  //             bufferedT = durationT
  //             console.log('缓冲完成')
  //           }
  //         }
  //         var bufferedP = Math.floor((bufferedT / durationT) * 100)
  //         that.bufferingP = bufferedP
  //       }
  //     } catch (e) {
  //       return
  //     }
  //   }
  // },
  // dragMouseDown(that, event) {
  //   const ele = store.getters.getAudioEle
  //   if (ele.src.indexOf('.') < 0) return
  //   var _this = this
  //   that.isDrag = true
  //   let e = event || window.event
  //   var x = e.clientX
  //   let l = e.target.offsetLeft
  //   _this.maxProgressWidth = document.getElementById('music_progressD').offsetWidth
  //   const moveProgress = document.getElementById('music_progress')
  //   // console.log(this.maxProgressWidth)
  //   moveProgress.onmousemove = function (event) {
  //     if (that.isDrag) {
  //       let e = event || window.event
  //       let thisX = e.clientX
  //       _this.dragProgressTo = Math.min(_this.maxProgressWidth, Math.max(0, l + (thisX - x)))
  //       _this.updateDragProgress(that, _this.maxProgressWidth, _this.dragProgressTo)
  //       console.log(_this.dragProgressTo)
  //       console.log(_this.maxProgressWidth)
  //     }
  //   };
  //   moveProgress.onmouseup = function (event) {
  //     const durationT = ele.duration
  //     if (that.isDrag) {
  //       that.isDrag = false
  //       ele.currentTime = Math.floor(_this.dragProgressTo / _this.maxProgressWidth * durationT)
  //     }
  //   };
  //   moveProgress.onmouseleave = function (event) {
  //     const durationT = ele.duration
  //     if (that.isDrag) {
  //       that.isDrag = false
  //       ele.currentTime = Math.floor(_this.dragProgressTo / _this.maxProgressWidth * durationT)
  //     }
  //   }
  // },
  // dragTouchStart(that, event) {
  //   const ele = store.getters.getAudioEle
  //   if (ele.src.indexOf('.') < 0) return
  //   const _this = this
  //   that.isDrag = true
  //   const e = event || window.event
  //   _this.x = e.touches[0].clientX
  //   _this.l = e.target.offsetLeft
  //   _this.maxProgressWidth = document.getElementById('music_progressD').offsetWidth
  //   // console.log(this.maxProgressWidth)
  // },
  // dragTouchMove(that, event) {
  //   const _this = this
  //   if (that.isDrag) {
  //     let e = event || window.event
  //     let thisX = e.touches[0].clientX
  //     _this.dragProgressTo = Math.min(_this.maxProgressWidth, Math.max(0, _this.l + (thisX - _this.x)))
  //     _this.updateDragProgress(that, _this.maxProgressWidth, _this.dragProgressTo)
  //   }
  // },
  // dragTouchEnd(that, event) {
  //   const _this = this
  //   const ele = store.getters.getAudioEle
  //   const durationT = ele.duration
  //   if (that.isDrag) {
  //     that.isDrag = false
  //     ele.currentTime = Math.floor(_this.dragProgressTo / _this.maxProgressWidth * durationT)
  //   }
  // },
  // // 拖动  点击的进度效果   l length  to 移动的位置
  // updateDragProgress(that, l, to) {
  //   const ele = store.getters.getAudioEle
  //   const durationT = ele.duration
  //   // const duration = Math.floor(ele.duration)
  //   // const currentT = Math.floor(ele.currentTime)
  //   musicApi.scrollLyric(Math.floor(to / l * durationT), that)
  //   // 设置currentT
  //   store.dispatch('set_AudioCurrentTime', Math.floor(to / l * durationT))
  //   // 设置duration
  //   store.dispatch('set_AudioCurrentD', (Math.floor(to / l * durationT)) / durationT * 100)
  //   // console.log(currentT + ' ---- ' + duration)
  // },
  //
  // clickProgress(event) {
  //   const ele = store.getters.getAudioEle
  //   const durationT = ele.duration
  //   const e = event || window.event
  //   const l = e.offsetX
  //   const w = document.getElementById('music_progressD').offsetWidth
  //   console.log(l + '------------' + w)
  //   ele.currentTime = Math.floor(l / w * durationT)
  // },

};
export default musicUtil;