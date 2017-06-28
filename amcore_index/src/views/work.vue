<template>
  <transition>
    <div class="work">

      <div class="cn__banner">
        <p>工作经历</p>
      </div>

      <div class="work__main">
        <p class="work__tenmaker">南京十匠电子商务有限公司</p>
        <p class="work__tenmaker__time">2016.7～至今</p>
      </div>

      <div class="page__next" @click='goProject'>
        <i class="arrow-first fa fa-caret-down"></i>
        <i class="arrow-last fa fa-chevron-down"></i>
      </div>

    </div>
  </transition>
</template>

<script>
  export default {
    methods: {
      goProject() {
        this.$router.push('/project')
      }
    }
  }
</script>

<style lang='scss'>
  .work {
    height: 100%;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .cn__banner {
    font-size: 30px;
    margin: 0 30px;
    font-weight: bold;
    box-sizing: border-box;
    border-bottom: 1px solid #ececec;

    p {
      margin: 20px 0;
    }
  }

  .work__main {
    margin: 0 30px;
    font-size: 24px;
    flex: 1;
    position: relative;

    .work__tenmaker {
      top: 0;
      font-size: 20px;
      position: absolute;
      animation: leftIn 1s;
    }

    .work__tenmaker__time {
      top: 80px;
      position: absolute;
      color: #999999;
      animation: rightIn 1s;
    }
  }

  .page__next {
    position: absolute;
    height: 50px;
    width: 100px;
    left: 50%;
    margin-left: -50px;
    bottom: 0;
    text-align: center;
    animation: fadeUp 2s;

    .arrow-first {
      position: absolute;
      display: block;
      width: 20px;
      left: 50%;
      margin-left: -10px;
      top: -2px;
      font-size: 20px;
      color: #000;
      animation: fadeOpacity 2s infinite;
    }

    .arrow-last {
      font-size: 30px;
      display: block;
      height: 50px;
      color: #000;
      animation: fadeOpacity 2s .5s infinite;
    }

  }

</style>
