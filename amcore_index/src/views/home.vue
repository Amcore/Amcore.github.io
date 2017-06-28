<template>
  <transition name='home-fade'>
    <div class='home'>
      <div class="home__bg">
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
    background: url('../assets/images/mac.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.8;
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
