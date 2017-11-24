<template>
  <v-touch
    style='height: 100%'
    v-on:swipeup="goSelf"
    v-on:swipedown="$router.push('/kingcore')">
  <div class="project">

    <div class="cn__banner">
      <p>个人项目</p>
    </div>

    <div class="project__main">

      <div class="project__main__item">
        <p class="item__name">amma Vue ui 库（开发中）</p>
        <p class="item__content">
          <p class="item__content__title">
            message
          </p>
          <p class="item__content__content">
            利用vue提供的extend的API对组件进行包装，添加在原姓链上从而方便调用。
          </p>
        </p>
        <p class="item__content">
          <p class="item__content__title">
            input
          </p>
          <p class="item__content__content">
            对input组件通过emit实现数据的传递，使得vue2中v-model在子组件能通过v-model进行方便使用。
          </p>
        </p>
        <p class="item__content">
          <p class="item__content__title">
            input
          </p>
          <p class="item__content__content">
            对input组件通过emit实现数据的传递，使得vue2中v-model在子组件能通过v-model进行方便使用。
          </p>
        </p>
        <p class="item__content">
          <p class="item__content__title">
            其他组件
          </p>
          <p class="item__content__content">
            下来菜单、switch组件、树形菜单、button组件等
          </p>
        </p>
      </div>

    </div>

    <div class="page__next" @click='goSelf'>
      <i class="arrow-first fa fa-caret-down"></i>
      <i class="arrow-last fa fa-chevron-down"></i>
    </div>

  </div>
</v-touch>
</template>

<script>
  export default {
    methods: {
      goSelf() {
        this.$router.push('/self')
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
          margin-top: 0;
          margin-bottom: 10px;
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
