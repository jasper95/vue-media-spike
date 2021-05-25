<template>
  <div class="container">
    <h2>Record RTC</h2>
    <button class="btn" @click="start" :disabled="playing">Play</button>
    <button class="btn" @click="stop" :disabled="!playing">Stop</button>
    <video
      width="500px"
      height="300px"
      ref="video"
      controls
      autoplay
      playsinline
    ></video>
  </div>
</template>

<script>
import RecordRtc from "recordrtc";
export default {
  data() {
    return {
      recorder: null,
      playing: false,
    };
  },
  methods: {
    async start() {
      const displaymediastreamconstraints = {
        video: true,
      };
      let stream;
      if (navigator.mediaDevices.getDisplayMedia) {
        stream = await navigator.mediaDevices.getDisplayMedia(
          displaymediastreamconstraints
        );
      } else {
        stream = navigator.getDisplayMedia(displaymediastreamconstraints);
      }
      this.recorder = new RecordRtc(stream, {
        type: "video",
      });
      this.recorder.startRecording();
      this.recorder.screen = stream;
      this.playing = true;
    },
    stop() {
      this.recorder.stopRecording(this.onStop);
    },
    onStop() {
      const video = this.$refs.video;
      video.src = video.srcObject = null;
      video.src = URL.createObjectURL(this.recorder.getBlob());
      this.recorder.screen.stop();
      this.recorder.destroy();
      this.recorder = null;
      this.playing = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn {
  margin: 10px 0px;
  width: 200px;
}
</style>