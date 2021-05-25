<template>
  <div id="app">
    <Test />
    <RecordRtcSpike />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Test from "./components/Test";
import RecordRtcSpike from "./components/RecordRtcSpike";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Test,
    RecordRtcSpike,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
