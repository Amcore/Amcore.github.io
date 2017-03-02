<template lang="html">
  <transition name="message-fade">
    <div
    class="message"
    id='id'>
      <i
      :class="[
      type ? 'fa fa-' + type : '',
      type ? '' + type : ''
      ]">
      </i>
      <span
      v-text='message'>
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      type: 'info',
      duration: 10000
    }
  },

  methods: {
    destoryElement() {
      setTimeout(() => {
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      }, 2000)
    }
  },

  mounted() {
    this.destoryElement()
  }
}
</script>

<style lang="scss">
  .message {
    position: absolute;
    top: 30px;
    left: 50%;
    margin-left: -150px;
    width: 300px;
    box-shadow: 0px 0px 10px 1px #ececec;
    height: 50px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;

    i {
      font-size: 16px;
      display: block;
      line-height: 50px;
      width: 50px;
      background: #ececec;
    }

    .info {
      color: #20a0ff;
    }

    .error {
      color: red;
    }

    span {
      background: #fff;
      flex: 1;
      line-height: 50px;
      font-size: 16px;
    }
  }
  .message-fade-enter-active {
    animation: fade-message-in .5s;
  }
  .message-fade-leave-active {
    animation: fade-message-out .5s;
  }
  @keyframes fade-message-in {
    0% {
      top: -100px;
      opacity: 0;
    }
    100% {
      top: 30px;
      opacity: 1;
    }
  }
  @keyframes fade-message-out {
    0% {
      top: 30px;
    }
    100% {
      top: -100px;
      opacity: 0;
    }
  }
</style>
