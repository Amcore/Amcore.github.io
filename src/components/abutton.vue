<template lang="html">
    <button
    class='a-button'
    @click='handleClick'
    :class="[
      size ? 'a-button--' + size: ''
    ]">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    </button>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    size: String,
    icon: String,
    text: {
      type: String,
      default: '默认按钮'
    }
  },
  methods: {
    handleClick(ev) {
      this.$emit('click', ev)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/style/var.scss';
    .a-button {
      color: #fff;
      background-color: $primeColor;
      border-color: $primeColor;
      padding: 10px 15px;
      border-radius: 4px;
      border-width: 1px;
      border-style: solid;
      cursor: pointer;
    }
    .a-button:hover {
      background-color: $deepPrimeColor;
    }
</style>
