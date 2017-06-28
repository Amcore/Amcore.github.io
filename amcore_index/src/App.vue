<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import FastClick from 'fastclick'

  export default {
    name: 'app',

    mounted() {
      FastClick.attach(document.body, false)
    }
  }
</script>

<style>
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  #app {
    height: 100%;
    width: 100%;
  }
</style>
