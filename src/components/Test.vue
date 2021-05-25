<template>
  <div class="container">
    <h2>Vue Record</h2>
    <div class="item">
      <VueRecordAudio @result="onResultAudio" mode="press" />
      <span>Audios</span>
      <audio
        v-for="(audio, index) in audios"
        :src="audio"
        :key="index"
        controls="controls"
      />
    </div>
    <div class="item">
      <VueRecordVideo @result="onResultVideo" mode="press" />
      <span>Videos</span>
      <video
        v-for="(video, index) in videos"
        :src="video"
        :key="index"
        controls="controls"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Test",
  props: {},
  data() {
    return {
      audios: [],
      videos: [],
    };
  },
  methods: {
    onResultAudio(blob) {
      console.log("bogogoog", blob);
      this.audios.push(`${window.URL.createObjectURL(blob)}#t=3,5`);
    },
    onResultVideo(blob) {
      this.videos.push(window.URL.createObjectURL(blob));
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item {
  padding: 20px 20px;
}
</style>