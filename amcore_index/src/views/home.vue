<template>
  <div class="home">
    <div class="home-head">

      <div class="home-head-logo">
        <img
        src="../assets/images/logo.png"
        alt="">
        <p>编程是门艺术</p>
      </div>

      <div class="home-nav">
        <ul>
          <li>
            <router-link to='/me'>
              <am-icon name="home"></am-icon>
            </router-link>
          </li>
          <li>
            <router-link to='/like'>
              <am-icon name="like"></am-icon>
            </router-link>
          </li>
          <li>
            <router-link to='/date'>
              <am-icon name="form"></am-icon>
            </router-link>
          </li>
        </ul>
        <div class="head-language">
          <span
          @click='changCn'
          v-text='cn'
          :class="{'current-language': cn === '中文'}">
          </span>
          <span
          @click='changEn'
          v-text='en'
          :class="{'current-language': en !== 'EN'}">
          </span>
        </div>
      </div>

    </div>

    <div class="home-main">
      <div class="home-entry">
        <transition name='main-fade'>
          <router-view></router-view>
        </transition>
      </div>
    </div>

    <am-load v-show='loadding'></am-load>

  </div>
</template>

<script>

  import {
    mapGetters,
    mapActions
  } from 'vuex'

  import {
    lan
  } from '../vuex/types'

  export default {

    components: {
    },

    data() {
      return {
        loadding: true,
        currentLanguage: true
      }
    },

    computed: {
      ...mapGetters({
        cn: lan.GCN,
        en: lan.GEN
      })
    },

    methods: {
      ...mapActions({
        changCn: lan.ACN,
        changEn: lan.AEN
      }),
      redirectRouter() {
        this.$router.push('./me')
      },
      transformLoad() {
        setTimeout(() => {
          this.loadding = false
        }, 500)
      },
      selectCn() {
        this.cn()
      },
      selectEn() {
        this.en()
      }
    },

    mounted() {
      this.transformLoad()
    }
  }
</script>
<style lang='scss'>
@import '../assets/styles/var.scss';
  .home {
    display: flex;
    flex-direction: column;
  }
  .home-head {
    padding: 2rem 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .home-head-logo {
      display: flex;
      align-items: center;
      img {
        width: 5rem;
      }
      p {
        margin: 0 3rem;
        font-family: fantasy;
        font-size: 2rem;
      }
    }

    .home-nav {
      display: flex;
      justify-content: space-between;
      &>ul {
        width: 100%;
        display: flex;
        li {
          position: relative;
          font-size: 2rem;
          align-items: center;
          a {
            width: 100%;
            height: 100%;
            padding: 1rem 2rem;
            display: inline-block;
            border-radius: 0.3rem;
            box-sizing: border-box;
          }
          .router-link-active {
            animation: navAnimation .5s;
            background: $borderColor;
            svg {
              fill: $primeColor;
            }
          }
        }
        li:hover {
          &:after {
            content: '';
            height: 0.2rem;
            width: 100%;
            display: block;
            background-color: $primeColor;
            position: absolute;
            color: $primeColor;
            animation: navBorderAnimation .5s;
          }
        }
      }
    }

    .head-language {
      & {
        position: relative;
        display: flex;
        align-items: center;
        margin-left: $commonDistance;
        width: 10rem;
        text-align: center;
      }
      span {
        display: block;
      }
      span:hover {
        cursor: pointer;
      }
      .current-language {
        flex: 1;
        display: block;
        font-size: 1.6rem;
        color: $primeColor;
      }
    }
  }


  .home-main {
    flex: 1;
    display: flex;
    background: #f5f5f5;
    padding: 0 5rem;

    .home-entry {
      flex: 1;
      margin: $commonDistance;
      background: #fff;
      border-radius: 0.5rem;
      padding: $commonDistance;
    }
  }


  @keyframes navAnimation {
    from {
      background: none;
    }
    to {
      background: $borderColor;
    }
  }
  @keyframes navBorderAnimation {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
</style>
