<template>
  <v-touch
    style='height: 100%'
    v-on:swipeup="$router.push('/person')"
    v-on:swipedown="$router.push('/andon')">
    <div class="project">
      <div class="cn__banner">
        <p>项目经验</p>
      </div>

      <div class="project__main">

        <div class="project__main__item">
          <p class="item__name">3D打印机控制系统</p>
          <p class="item__content">
            <p class="item__content__title">
              前端负责
            </p>
            <p class="item__content__content">
              公司主营3D打印业务，
              该系统控制3D打印机在生产、查看喷头温度、创建生产、停止生产等流程。
              在该系统中负 责前端工作。
              在权限管理的中使用Vue directive自定义指令对功能操作进行管理。
              利用vuex对打印机系统时间与 服务端保持一致。
              利用echart对喷头温度图标反馈。
              页面实现响应式，方便手机对打印机的控制。
            </p>
          </p>
          <p class="item__content">
            <p class="item__content__title">
              涉及主要技术
            </p>
            <p class="item__content__content">
              Vue、vuex、websocket、element-ui、e6、e7、echart、stylus
            </p>
          </p>
        </div>

      </div>

      <div class="page__next" @click="$router.push('/person')">
        <i class="arrow-first fa fa-caret-down"></i>
        <i class="arrow-last fa fa-chevron-down"></i>
      </div>

    </div>
  </v-touch>
</template>

<script>
  export default {
    methods: {
      goPerson() {
        this.$router.push('/person')
      }
    }
  }
</script>

<style lang='scss'>
  .project {
    height: 100%;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

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

    .project__main {
      flex: 1;
      margin: 0 30px;
      font-size: 16px;
      position: relative;

      .project__main__item {
        position: absolute;
        top: 0;
        left: 0;
        animation: fadeIn 1s;

        .item__name {
          font-size: 20px;
          margin: 20px 0;
        }
        .item__content__title {
          color: #000;
          margin: 0px 0px 10px 0px;
        }
        .item__content__content {
          line-height: 1.5;
          color: #999999;
        }

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

  }
</style>
