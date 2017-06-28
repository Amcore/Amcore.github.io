<template>
  <div class="project">

    <div class="cn__banner">
      <p>项目经验</p>
    </div>

    <div class="project__main">

      <div class="project__main__item">
        <p class="item__name">磐晟云平台</p>
        <p class="item__content">
          <p class="item__content__title">
            用印申请流程
          </p>
          <p class="item__content__content">
            包括用印添加，用印审批，用印完成。
            基于Vue开发，其中部分组件利用了element UI进行开发，Vuex进行用户管理状态。同时也开发了一些公共组件，文件上传组件，用印弹窗等。
            应用promise 与async await新特性（公司后端用java)
          </p>
        </p>
      </div>

    </div>

    <div class="page__next" @click='goBanqiao'>
      <i class="arrow-first fa fa-caret-down"></i>
      <i class="arrow-last fa fa-chevron-down"></i>
    </div>

  </div>
</template>

<script>
  export default {
    methods: {
      goBanqiao() {
        this.$router.push('/banqiao')
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
