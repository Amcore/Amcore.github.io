<template lang="html">
  <div class="pages-project">
    <div class="project-head">
      <img src="../assets/logo.png" alt="zero" />
      <span
      class="project-username"
      v-text='nickName'>
      </span>
      <div
      class="user-opear"
      @click='shutDown'>
        <span>退出</span>
      </div>
    </div>
    <div class="project-main">
      <div class="project-nav">
        <ul>
          <li>
            <router-link :to="{ name: 'admin' }"><i class="fa fa-user-o"></i></router-link>
          </li>
          <li>
            <router-link :to="{ name: 'commodity' }"><i class="fa fa-bars"></i></router-link>
          </li>
        </ul>
      </div>
      <div class="project-sub">
        <transition name='fade'>
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickName: window.localStorage.nickName
    }
  },

  mounted() {
  },

  methods: {
    shutDown() {
      this.$router.push({path: 'login'})
    }
  }
}
</script>

<style lang="scss">
@import '../assets/style/var.scss';
.pages-project {
  height: 100%;
  display: flex;
  flex-direction: column;

  .project-head {
    padding: 15px 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    justify-content: space-between;

    img {
      width: 48px;
      height: 48px;
    }

    .project-username {
      font-size: 14px;
      margin-left: 20px;
      color: $primeColor;
      cursor: pointer;
      line-height: 3;
    }

    .project-username:hover {
      & + .user-opear {
        display: block;
      }
    }

    .user-opear {
      position: absolute;
      font-size: 1.2em;
      display: none;
      top: 50px;
      right: 20px;
      height: 50px;
      width: 80px;
      cursor: pointer;
      background: $primeColor;
      opacity: 0.5;
      color: #000;
      text-align: center;
      animation: show .5s;
      span {
        line-height: 50px;
        color: #fff;
      }
    }
    .user-opear:hover {
      display: block;
    }

  }
  .project-main {
    flex: 1;
    display: flex;

    .project-nav {
      min-height: 100%;
      background: #fff;

      ul {
        li {
          width: 100px;
          height: 50px;
          a {
            display: inline-block;
            height: 100%;
            width: 100%;
            font-size: 1.4rem;
            line-height: 50px;
            color: #aaa;
            text-align: center;
          }
          .router-link-active {
            background-color: #f4f4f4;
            i {
              color: #000;
            }
          }
        }
      }
    }
    .project-sub {
      height: 100%;
      width: 100%;
      overflow-y: hidden;
      background: #f4f4f4;
    }
  }
}



@keyframes show {
  from {
    height: 0px;
  }
  to {
    height: 50px;
  }
}


.fade-enter-active {
  animation: fade-in .5s;
}
.fade-leave-active {
  animation: fade-out .5s;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-out {
  100% {
    opacity: 0;
  }
}

</style>
