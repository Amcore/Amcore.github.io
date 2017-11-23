<template>
  <v-touch
    style='height: 100%'
    v-on:swipeup="goKingcore"
    v-on:swipedown="$router.push('/project')">
  <div class="project">

    <div class="cn__banner">
      <p>项目经验</p>
    </div>

    <div class="project__main">

      <div class="project__main__item">
        <p class="item__name">3板桥</p>
        <p class="item__content">
          <p class="item__content__title">
            3板桥后台管理系统
          </p>
          <p class="item__content__content">
            后台管理员PC端。文章管理（文章编辑，修改，添加文章，富文本编辑器），用户文章评论。用户审核。其中页面用到的组件包括input select button等页面小组件自主完成
          </p>
        </p>
      </div>

    </div>

    <div class="page__next" @click='goKingcore'>
      <i class="arrow-first fa fa-caret-down"></i>
      <i class="arrow-last fa fa-chevron-down"></i>
    </div>

  </div>
</v-touch>
</template>

<script>
  export default {
    methods: {
      goKingcore() {
        this.$router.push('/kingcore')
      }
    }
  }
</script>

<style lang='scss'>
@import '../assets/styles/var.scss';
  .project {
    height: 100%;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background: $backgroundColor;

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
