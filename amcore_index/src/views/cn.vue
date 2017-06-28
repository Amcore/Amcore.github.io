<template>
  <transition name='cn-fade'>
    <div class="cn">


      <div class="cn__banner">
        <p>个人信息</p>
      </div>

      <div class="cn__main">
          <div class="cn__title">
            <p class="cn__title__name">姓名:</p>
            <p class="cn__title__name">年龄:</p>
            <p class="cn__title__name">电话:</p>
            <p class="cn__title__name">邮箱:</p>
            <p class="cn__title__name">毕业学校:</p>
            <p class="cn__title__name">专业:</p>
          </div>

          <div class="cn__content">
            <p class="cn__title__name">潘敏敏</p>
            <p class="cn__title__name">25</p>
            <p class="cn__title__name">17712859212</p>
            <p class="cn__title__name">173677402@qq.com</p>
            <p class="cn__title__name">南京中医药大学</p>
            <p class="cn__title__name">计算机科学与技术</p>
          </div>
      </div>

      <div class="page__next" @click='goWork'>
        <i class="arrow-first fa fa-caret-down"></i>
        <i class="arrow-last fa fa-chevron-down"></i>
      </div>


    </div>
  </transition>
</template>

<script>
  export default {

    methods: {
      goWork() {
        this.$router.push('/work')
      }
    }
  }
</script>

<style lang='scss'>
  .cn {
    height: 100%;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .cn__banner {
    font-size: 30px;
    margin: 0 30px;
    font-weight: bold;
    box-sizing: border-box;
    border-bottom: 1px solid #ececec;
  }

  .cn__main {
    flex: 1;
    position: relative;
  }

  .cn__bg {
    height: 100%;
    width: 100%;
    /* background: url('../assets/images/mac.jpg'); */
    background: #ececec;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: .8;
    left: 0;
    top: 0;
    position: absolute;
    animation: fadeIn .5s linear;
  }

  .cn__title {
    padding: 2rem;
    font-size: 1.6rem;
    position: relative;
    opacity: 1;
    text-align: right;
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
    height: 100%;
    box-sizing: border-box;
    animation: fadeLeft 1s linear;
  }

  .cn__content {
    position: absolute;
    right: 0;
    width: 60%;
    height: 100%;
    padding: 2rem;
    font-size: 1.6rem;
    color: #999999;
    box-sizing: border-box;
    animation: fadeRight 1s linear;
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


  .cn-fade-enter-active {
    animation: fadeIn 1s linear;
  }

</style>
