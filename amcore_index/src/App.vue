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
      document.body.addEventListener('touchmove', (e) => {
        e.preventDefault()
      }, false)
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

  @keyframes fadeIn {
    from {
      top: 300px;
      opacity: 0;
    }

    to {
      opacity: 1;
      top: 0px;
    }
  }

  @keyframes fadeLeft {
    from {
      left: -1000px;
      opacity: 0;
    }

    to {
      opacity: 1;
      left: 0px;
    }
  }

  @keyframes fadeOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeRight {
    from {
      right: -1000px;
    }
    to {
      right: 0;
    }
  }

  @keyframes fadeUp {
    from {
      bottom: -1000px;
    }
    to {
      bottom: 0;
    }
  }
  
  @keyframes rightIn {
    from {
      left: 1000px;
    }
    to {
      left: 0px;
    }
  }

  @keyframes leftIn {
    from {
      left: -1000px;
    }
    to {
      left: 0px;
    }
  }

</style>
