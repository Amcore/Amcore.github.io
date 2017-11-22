<template>
  <div class="project">

    <div class="cn__banner">
      <p>自我描述</p>
    </div>

    <div class="project__main">

      <div class="project__main__item">
        <p class="item__name"></p>
        <p class="item__content">
          <p class="item__content__title">
            对于前端
          </p>
          <p class="item__content__content">
            热爱前端，关注一些例如掘金等互联网动态。平常喜欢写一些Vue的组件，对于js新特性保持关注。有些时候为了一个问题而睡不找。
          </p>
        </p>
        <p class="item__content">
          <p class="item__content__title">
            日常使用工具
          </p>
          <p class="item__content__content">
            Git，webpack，Atom, sublime，scss
          </p>
        </p>
        <p class="item__content">
          <p class="item__content__title">
            其他信息
          </p>
          <p class="item__content__content">
            <span class="blog">个人博客</span>
            <a href="http://www.jianshu.com/u/6feba298ece4">http://www.jianshu.com/u/6feba298ece4</a>
            <span class="github">github</span>
            <a href="https://github.com/Amcore">https://github.com/Amcore</a>
          </p>
        </p>
      </div>

    </div>

    <div class="page__next" @click='goEnd'>
      <i class="arrow-first fa fa-caret-down"></i>
      <i class="arrow-last fa fa-chevron-down"></i>
    </div>

  </div>
</template>

<script>
  export default {
    methods: {
      goEnd() {
        this.$router.push('/end')
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

          .blog {
            display: block;
          }
          .github {
            display: block;
          }

          a {
            font-size: 14px;
            text-decoration: none;
            color: #20a0ff;
          }
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
