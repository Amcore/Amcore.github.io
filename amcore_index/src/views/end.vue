<template>
  <transition name='home-fade'>
    <v-touch
      style='height: 100%'
      v-on:swipeup="$router.push('/')"
      v-on:swipedown="$router.push('/self')">
      <div class='home' style='height: 100%'>
        <div class="home__bg">
        </div>
        <div class="end__main">
          <div class="end__main__main">
            <router-link to='/end'>结束了</router-link>
          </div>
          <p>
            <router-link to='/cn'>还想再看一遍吗？<span>(点击此处)</span></router-link>
          </p>
        </div>
      </div>
    </v-touch>
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
@import '../assets/styles/var.scss';
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

  .end__main {
    text-align: center;
    filter: blur(0px);
    font-size: 26px;
    position: relative;

    .end__main__main {
      top: -30px;
      left: 50%;
      width: 200px;
      margin-left: -100px;
      text-align: center;
      position: absolute;
      color: #000;
      animation: endIn 1s cubic-bezier(0, 0, 0, 1.45);
    }

    img {
      width: 100px;
      height: auto;
      border-radius: 50%;
    }

    a {
      color: $grayFont;

      span {
        color: #123aaa;
      }
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

  @keyframes endIn {
    0% {
      top: -1000px;
    }
    25% {
      top: -30px;
    }
    50% {
      top: -60px;
    }
    70% {
      top: -30px;
    }
    80% {
      top: -50px;
    }
    90% {
      top: -30px;
    }
    95% {
      top: -40px;
    }
    100% {
      top: -30px;
    }
  }
</style>
