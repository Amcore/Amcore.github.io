<template>
  <transition name='home-fade'>
    <div class='home'>
      <div class="home__bg">
      </div>
      <div class="home__main">
        <div class="home__main__main">
          <router-link to='/end'>End</router-link>
        </div>
        <p>
          <router-link to='/cn'>还想再看一遍吗？</router-link>
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {

    data() {
      return {
      }
    },

    components: {
    },

    methods: {
      goEn() {
        window.alert(111)
      }
    }
  }
</script>

<style lang='scss'>
  .home {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
  }

  .home-fade-leave-active {
    animation: fadeOut .5s linear;
  }

  .home__bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .home__main {
    text-align: center;
    filter: blur(0px);
    font-size: 26px;

    .home__main__main {
      margin-top: 20px;
      color: #000;
    }

    img {
      width: 100px;
      height: auto;
      border-radius: 50%;
    }

    a {
      color: #000;
    }

  }

  @keyframes fadeOut {
    from {
      top: 0px;
      opacity: 0;
    }

    to {
      top: -1000px;
      opacity: 1;
    }
  }
</style>
