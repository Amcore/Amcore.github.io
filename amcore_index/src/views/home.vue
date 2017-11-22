<template>
  <transition name='home-fade'>
    <div class='home'>
      <div class="home__bg">
        <p class="balloon-red">hello</p>
        <p class="balloon-blue" @click='toResume'>entry</p>
      </div>
      <div class="home__main"
      @click='toResume'>
        <img src="../assets/images/logo.png" alt="">
        <div class="home__main__main">
          <router-link to='/cn'>Cn</router-link>
        </div>
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
      toResume() {
        this.$router.push('/cn')
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
    background: $backgroundColor;

    .balloon-red {
      position: absolute;
      width: 200px;
      height: 200px;
      top: 100px;
      left: 50px;
      border-radius: 50%;
      background: rgba(255, 0, 30, .7);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 20px;
      animation: riseUp 1s cubic-bezier(0, 0, 0.37, 1.84);
    }
    .balloon-blue {
      position: absolute;
      width: 200px;
      height: 200px;
      top: 150px;
      left: 150px;
      border-radius: 50%;
      background: rgba(0, 200, 255, .7);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 20px;
      animation: riseUp-blue 1s cubic-bezier(0, 0, 0.37, 1.84);
    }
  }

  .home__main {
    text-align: center;
    filter: blur(0px);
    font-size: 26px;

    .home__main__main {
      margin-top: 20px;
      color: #fff;
    }

    img {
      width: 100px;
      height: auto;
      border-radius: 50%;
    }

    a {
      color: #fff;
    }

  }

  @keyframes riseUp-blue {
    0% {
      top: -1000px;
      opacity: 0;
    }

    50% {
      top: 150px;
      opacity: 0.8;
    }

    75% {
      top: 180px;
      opacity: 0.8;
    }

    100% {
      top: 150px;
      opacity: 0.7;
    }
  }

  @keyframes riseUp {
    0% {
      top: -1000px;
      opacity: 0;
    }

    50% {
      top: 100px;
      opacity: 0.8;
    }

    75% {
      top: 130px;
      opacity: 0.8;
    }

    100% {
      top: 100px;
      opacity: 0.7;
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
