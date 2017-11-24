<template>
  <v-touch
    style='height: 100%'
    v-on:swipeup="goPerson"
    v-on:swipedown="$router.push('/banqiao')">
    <div class="project">
      <div class="cn__banner">
        <p>项目经验</p>
      </div>

      <div class="project__main">

        <div class="project__main__item">
          <p class="item__name">鑫宇安灯系统</p>
          <p class="item__content">
            <p class="item__content__title">
              鑫宇安灯系统前端
            </p>
            <p class="item__content__content">
              负责前端页面实现，
              该系统结合工厂安灯实现对工厂工序，
              生产进行便捷管理。实现智能制造。
              通过生成问题实时反馈到车间看板上。（公司后端用PHP）
            </p>
          </p>
          <p class="item__content">
            <p class="item__content__title">
              涉及技术
            </p>
            <p class="item__content__content">
              Vue、vuex、websocket、element-ui、e6、e7、sass、flex
            </p>
          </p>
        </div>

      </div>

      <div class="page__next" @click='goPerson'>
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
